import { useEffect, useRef } from 'react'
import { MessageCircle, Star, ArrowRight } from 'lucide-react'
import { gsap } from 'gsap'

const WHATSAPP_URL = `https://wa.me/56912345678?text=Hola%2C%20quisiera%20hacer%20un%20pedido.`
const BRANDS = ['Orijen', 'Acana', "Hill's", 'Royal Canin', 'PremieRpet', 'Calibra']

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-label',      { opacity: 0, y: 16, duration: 0.6 })
        .from('.hero-headline',   { opacity: 0, y: 32, duration: 0.8 }, '-=0.3')
        .from('.hero-sub',        { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
        .from('.hero-cta',        { opacity: 0, y: 16, duration: 0.5 }, '-=0.3')
        .from('.hero-stats',      { opacity: 0, y: 12, stagger: 0.1, duration: 0.5 }, '-=0.3')
        .from('.hero-brands',     { opacity: 0, y: 10, duration: 0.5 }, '-=0.2')
        .from('.hero-image-card', { opacity: 0, x: 40, duration: 0.8, ease: 'power2.out' }, '-=0.8')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden"
    >
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1920&q=80")`,
        }}
      />

      {/* Gradient overlay: opaque on left (text readable), transparent on right (photo visible) */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(254,252,247,0.98) 0%, rgba(254,252,247,0.98) 40%, rgba(254,252,247,0.75) 65%, rgba(254,252,247,0.25) 100%)',
        }}
      />

      {/* Mobile overlay: gradient — opaque top/bottom para texto, transparente en el centro */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          background: 'linear-gradient(to bottom, rgba(254,252,247,0.92) 0%, rgba(254,252,247,0.55) 35%, rgba(254,252,247,0.55) 65%, rgba(254,252,247,0.97) 100%)',
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
      />

      <div className="container-main w-full py-20 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 lg:gap-24 items-center">

          {/* Left — content */}
          <div>
            <p className="hero-label section-label mb-6">
              Strip Center Vilumanque, Concepción
            </p>

            <h1 className="hero-headline font-display text-5xl md:text-6xl xl:text-7xl font-bold text-brown-950 leading-[1.05] tracking-tight text-balance mb-6">
              Solo lo mejor
              <br />
              <em className="not-italic" style={{ color: '#A98B76' }}>para tu mascota.</em>
            </h1>

            <p className="hero-sub font-sans text-lg text-brown-700 leading-relaxed max-w-[480px] mb-10">
              Nutrición de alto rendimiento de las marcas más premium del mercado.
              Pedidos por WhatsApp con delivery en 2–4 horas dentro de Concepción.
            </p>

            <div className="hero-cta flex flex-wrap gap-3 mb-14">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle className="w-5 h-5" />
                Hacer un pedido
              </a>
              <a href="#como-funciona" className="btn-secondary">
                Cómo funciona
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Stats */}
            <div className="hero-stats flex flex-wrap gap-8 mb-10">
              {[
                { value: '2–4 hrs', label: 'Delivery estimado' },
                { value: '3 km',    label: 'Radio de entrega' },
                { value: '6',       label: 'Marcas premium' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-bold text-brown-950">{s.value}</div>
                  <div className="font-mono text-xs text-brown-500 tracking-wide mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Brands */}
            <div className="hero-brands">
              <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-brown-400 mb-3">
                Marcas disponibles
              </p>
              <div className="flex flex-wrap gap-2">
                {BRANDS.map((brand) => (
                  <span
                    key={brand}
                    className="font-sans text-xs font-semibold text-brown-700 bg-white/80 backdrop-blur-sm border border-brown-200 rounded-full px-3 py-1 shadow-card"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — subscription card */}
          <div className="hero-image-card hidden lg:block">
            <div
              className="rounded-3xl p-8 relative overflow-hidden backdrop-blur-sm"
              style={{ background: 'rgba(243,228,201,0.88)', border: '1px solid rgba(191,162,140,0.3)' }}
            >
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  backgroundSize: '128px 128px',
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#A98B76' }}>
                    Suscripción mensual
                  </span>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#BFA28C' }}>
                    <Star className="w-4 h-4" style={{ color: '#F3E4C9' }} />
                  </div>
                </div>

                <p className="font-display text-3xl font-bold text-brown-900 leading-tight mb-2">
                  Nunca te<br />quedes sin alimento.
                </p>
                <p className="font-sans text-brown-600 text-sm leading-relaxed mb-8">
                  Recibe tu pedido mensual de forma automática.
                  Sin preocupaciones, sin olvidos.
                </p>

                <div className="space-y-3 mb-8">
                  {['Marca y gramaje fijos', 'Envío programado mensual', 'Precio preferencial garantizado'].map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#A98B76' }} />
                      <span className="font-sans text-sm text-brown-700">{f}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-brown-500 text-cream-light rounded-xl py-3 font-sans font-semibold text-sm transition-colors hover:bg-brown-600"
                >
                  <MessageCircle className="w-4 h-4" />
                  Consultar suscripción
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
