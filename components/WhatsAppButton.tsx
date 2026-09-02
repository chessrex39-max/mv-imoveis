import type { Property } from "@/lib/types";
import { getWhatsappHref, type WhatsappIntent } from "@/lib/whatsapp";

export function WhatsAppButton({
  property,
  intent,
  className,
  children,
}: {
  property?: Property;
  intent?: WhatsappIntent;
  className?: string;
  children: React.ReactNode;
}) {
  const href = getWhatsappHref(property, intent);

  if (!href) {
    return (
      <a href="#contato" className={className}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}
