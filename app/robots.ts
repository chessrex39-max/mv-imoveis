import type { MetadataRoute } from "next";

// Indexação desativada até autorização explícita de publicação em produção
// (ver seção "Modo do projeto" no README).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
