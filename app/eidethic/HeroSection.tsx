export function HeroSection() {
  return (
    <section
      className="relative z-10 flex min-h-[60vh] flex-1 flex-col justify-end p-4 md:p-8"
      aria-labelledby="hero-title"
    >
      <h1
        id="hero-title"
        className="mb-2 max-w-[1200px] text-5xl font-normal leading-none tracking-tight md:text-6xl lg:text-7xl"
      >
        une identité numérique
        <br />
        souveraine & libre
      </h1>
      <p className="font-mono text-base tracking-tight text-neutral-500 text-pretty md:text-lg bg-white text-justify">
        une suite de logiciels open source pour les internautes soucieux de leur vie privée.
      </p>
    </section>
  )
}
