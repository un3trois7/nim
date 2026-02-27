import Link from 'next/link'

export type ProductCardProps = {
  name: string
  id: string
  baseline: string
  cta: string
  href?: string
}

export function ProductCard({
  name,
  id,
  baseline,
  cta,
  href = '#',
}: ProductCardProps) {
  return (
    <article className="flex flex-col">
      <div className="mb-4 flex items-baseline justify-between border-b border-neutral-200 pb-2">
        <span className="text-4xl font-medium tracking-tight">{name}</span>
        <span className="font-mono text-xs text-neutral-500">{id}</span>
      </div>
      <p className="mb-8 flex-grow max-lg:text-xl leading-relaxed text-neutral-500">
        {baseline}
      </p>
      <Link
        href={href}
        className="inline-flex self-end items-center gap-2 font-mono text-sm max-lg:text-base uppercase text-black transition-opacity hover:opacity-50"
      >
        <span className="text-neutral-500">[</span>
        {cta}
        <span className="text-neutral-500">]</span>
      </Link>
    </article>
  )
}
