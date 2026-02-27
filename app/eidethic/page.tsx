'use client'

import { useRef } from 'react'
import { TopNav } from './TopNav'
import { HeroSection } from './HeroSection'
import { ProductCard } from './ProductCard'
import { useEidethicWebGLV2 } from './useEidethicWebGLV2'

const PRODUCTS = [
  {
    name: 'ïd',
    id: 'v.alpha.0.1',
    baseline:
      'fournisseur d\'identité numérique conforme au standard europeen eIDAS 2.0',
    cta: 'reclame un e-ïd',
  },
  {
    name: 'fr:ses',
    id: 'v.1.1',
    baseline:
      'générateur de frises chronologiques : personnelles, éducationnelles, collaboratives ou professionnelles.',
    cta: 'crée une frise',
  },
  {
    name: 'aarch:ve',
    id: 'v.1.1',
    baseline:
      'reseau semi-social pour capturer, revisiter et partager ses souvenirs.',
    cta: 'crée une aarchive',
  },
  {
    name: 'atarax:e',
    id: 'v.alpha.0.1',
    baseline:
      'aventure introspective promouvant la conscience de soi : le voyage du temps intérieur.',
    cta: 'commence ton voyage',
  },
] as const

export default function EidethicLandingPageV2() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEidethicWebGLV2(canvasRef)

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white text-black antialiased">
      <canvas
        ref={canvasRef}
        className="absolute left-0 top-0 z-0 h-full w-full pointer-events-none opacity-15"
        aria-hidden
        id="glcanvas"
      />
      <TopNav />
      <HeroSection />
      <section
        className="relative z-10 border-t border-neutral-200 bg-white p-4 md:p-8"
        aria-labelledby="products-heading"
      >
        <h2 id="products-heading" className="sr-only">
          produits
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-y-12 md:gap-8 lg:grid-cols-4 lg:gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              id={product.id}
              baseline={product.baseline}
              cta={product.cta}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
