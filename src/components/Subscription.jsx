import { useEffect, useRef } from 'react'
import { MessageCircle, RefreshCw, Bell, Tag, CalendarCheck } from 'lucide-react'

const WHATSAPP_URL = `https://wa.me/56912345678?text=Hola%2C%20me%20interesa%20la%20suscripci%C3%B3n%20mensual.`

const BENEFITS = [
  {
    icon: CalendarCheck,
    title: 'Entrega automática',
    description: 'Tu pedido se programa mes a mes sin que tengas que recordar nada.',
  },
  {
    icon: Tag,
    title: 'Precio preferencial',
    description: 'Los suscriptores acceden a precio especial garantizado mes a mes.',
  },
  {
    icon: Bell,
    title: 'Aviso previo',
    description: 'Te avisamos 3 días antes de cada entrega por si necesitas ajustar el pedido.',
  },
  {
    icon: RefreshCw,
    title: 'Sin permanencia',
    description: 'Pausa o cancela cuando quieras. Sin cargos ni penalizaciones.',
  },
]

export default function Subscription() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="suscripcion"
      ref={sectionRef}
      className="py-24 lg:py-32 overflow-hidden relative"
      style={{ background: '#4A3326' }}
    >
      {/* Background photo — dog eating */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=1920&q=80")`,
        }}
      />
      {/* Dark brown overlay */}
      <div className="absolute inset-0" style={{ background: 'rgba(45,31,20,0.90)' }} />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
      />

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left */}
          <div>
            <p className="reveal font-mono text-xs tracking-widest uppercase flex items-center gap-2 mb-5" style={{ color: '#BFA28C' }}>
              <span className="block w-4 h-px" style={{ background: '#BFA28C' }} />
              Suscripción mensual
            </p>
            <h2 className="reveal font-display text-4xl md:text-5xl font-bold leading-tight tracking-tight text-balance mb-6" style={{ color: '#F3E4C9' }}>
              Nunca te quedes
              <em className="not-italic" style={{ color: '#BABF94' }}> sin alimento.</em>
            </h2>
            <p className="reveal font-sans leading-relaxed mb-10 max-w-md" style={{ color: '#BFA28C' }}>
              Configura una sola vez tu pedido recurrente y recíbelo cada mes en la
              puerta de tu casa. Perfecto para quienes tienen mascotas con dieta fija.
            </p>

            <div className="reveal">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-sans font-semibold text-base transition-colors active:scale-[0.98]"
                style={{ background: '#F3E4C9', color: '#4A3326' }}
                onMouseEnter={e => e.currentTarget.style.background = '#E8D0AA'}
                onMouseLeave={e => e.currentTarget.style.background = '#F3E4C9'}
              >
                <MessageCircle className="w-5 h-5" />
                Activar suscripción
              </a>
            </div>
          </div>

          {/* Right — benefits grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {BENEFITS.map((b, i) => {
              const Icon = b.icon
              return (
                <div
                  key={b.title}
                  className={`reveal reveal-delay-${i + 1} rounded-2xl p-5 border`}
                  style={{ background: 'rgba(169,139,118,0.12)', borderColor: 'rgba(191,162,140,0.25)' }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: 'rgba(169,139,118,0.2)' }}
                  >
                    <Icon className="w-4 h-4" style={{ color: '#F3E4C9' }} />
                  </div>
                  <h3 className="font-sans font-semibold text-sm mb-2" style={{ color: '#F3E4C9' }}>
                    {b.title}
                  </h3>
                  <p className="font-sans text-xs leading-relaxed" style={{ color: '#BFA28C' }}>
                    {b.description}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
