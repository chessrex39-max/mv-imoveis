import type { Property } from "@/lib/types";

/**
 * Modo preview de prospecção: sem número real configurado, o botão fica
 * visível mas desabilitado — nunca aponta para um WhatsApp provisório.
 */
export function getWhatsappHref(property?: Property): string | null {
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  if (!rawNumber) return null;

  // wa.me só aceita dígitos — remove "+", espaços, parênteses e traços
  // mesmo que o número tenha sido configurado com esses símbolos.
  const number = rawNumber.replace(/\D/g, "");
  if (!number) return null;

  const base = `Olá! Vi o site da MV Imóveis e gostaria de mais informações`;
  const message = property
    ? `${base} sobre o imóvel "${property.title}" (código ${property.code}).`
    : `${base}.`;

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
