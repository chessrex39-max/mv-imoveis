import type { Property } from "@/lib/types";
import { getWhatsappHref } from "@/lib/whatsapp";

export function WhatsAppButton({
  property,
  className,
  children,
}: {
  property?: Property;
  className?: string;
  children: React.ReactNode;
}) {
  const href = getWhatsappHref(property);

  if (!href) {
    return (
      <a href="#contato" className={className}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} rel="noreferrer" className={className}>
      {children}
    </a>
  );
}
