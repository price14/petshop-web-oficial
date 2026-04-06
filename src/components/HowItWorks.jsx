import { useEffect, useRef } from 'react'
import { Search, MessageCircle, PackageCheck } from 'lucide-react'

const WHATSAPP_URL = `https://wa.me/56912345678?text=Hola%2C%20quisiera%20hacer%20un%20pedido.`

const STEPS = [
  {
    icon: Search,
    title: 'Elige tu producto',
    description:
      'Navega por nuestras marcas premium y decide qué necesitas. Disponemos de alimentos secos, húmedos y suplementos para perros y gatos.',
  },
  {
    icon: MessageCircle,
    title: 'Escríbenos por WhatsApp',
    description:
      'Envíanos un mensaje con tu pedido. Te confirmamos disponibilidad, precio y tiempo de entrega en minutos.',
  },
  {
    icon: PackageCheck,
    title: 'Recibe en casa',
    description:
      'Delivery en 2–4 horas dentro del radio de 3 km, o retiro en tienda en Strip Center Vilumanque.',
  },
]

export default function HowItWorks() {
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
      id="como-funciona"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background photo — cat */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1920&q=80")`,
        }}
      />
      {/* Parchment overlay — strong, preserves palette */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(243,228,201,0.93)' }}
      />
      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
      />

      <div className="container-main relative z-10">

        <div className="text-center mb-16 reveal">
          <p className="section-label mb-5 justify-center">Proceso</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brown-950 leading-tight tracking-tight text-balance">
            Pedir es muy sencillo.
          </h2>
          <p className="font-sans text-brown-600 mt-4 max-w-md mx-auto leading-relaxed">
            Sin apps, sin cuentas, sin complicaciones.
            Solo un mensaje de WhatsApp.
          </p>
        </div>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-12 left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-px"
            style={{ background: '#D4BCAA' }}
          />
          <div className="grid lg:grid-cols-3 gap-8">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={step.title}
                  className={`reveal reveal-delay-${i + 1} flex flex-col items-start lg:items-center text-left lg:text-center gap-5`}
                >
                  <div className="relative">
                    <div
                      className="w-16 h-16 border-2 rounded-2xl flex items-center justify-center relative z-10"
                      style={{ background: 'rgba(255,255,255,0.85)', borderColor: '#D4BCAA', backdropFilter: 'blur(8px)' }}
                    >
                      <Icon className="w-6 h-6" style={{ color: '#A98B76' }} />
                    </div>
                    <span
                      className="absolute -top-2 -right-2 font-mono text-[10px] font-bold text-white rounded-full w-5 h-5 flex items-center justify-center z-20"
                      style={{ background: '#A98B76' }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-brown-950 text-xl mb-2">{step.title}</h3>
                    <p className="font-sans text-sm text-brown-700 leading-relaxed max-w-xs">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="text-center mt-14 reveal">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <MessageCircle className="w-5 h-5" />
            Empezar mi pedido
          </a>
        </div>

      </div>
    </section>
  )
}
