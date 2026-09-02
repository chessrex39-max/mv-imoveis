import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="eyebrow">Página não encontrada</span>
      <h1 className="font-display mt-4 text-[18vw] text-cream sm:text-8xl">
        404
      </h1>
      <p className="mt-4 max-w-sm text-cream-soft">
        A página que você procura não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="focus-ring mt-8 inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
