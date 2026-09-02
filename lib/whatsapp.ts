import type { Property } from "@/lib/types";

export type WhatsappIntent = "general" | "sell";

/**
 * Modo preview de prospecção: sem número real configurado, o botão fica
 * visível mas desabilitado — nunca aponta para um WhatsApp provisório.
 */
export function getWhatsappHref(
  property?: Property,
  intent: WhatsappIntent = "general"
): string | null {
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  if (!rawNumber) return null;

  // wa.me só aceita dígitos — remove "+", espaços, parênteses e traços
  // mesmo que o número tenha sido configurado com esses símbolos.
  const number = rawNumber.replace(/\D/g, "");
  if (!number) return null;

  let message = "Oi! Vi o site da MV Imóveis e gostaria de mais informações.";

  if (property) {
    message = `Oi! Quero mais informações sobre o imóvel "${property.title}" (código ${property.code}).`;
  } else if (intent === "sell") {
    message = "Oi! Quero anunciar um imóvel com a MV Imóveis.";
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
