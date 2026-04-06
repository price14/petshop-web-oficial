import { useEffect, useRef } from 'react'
import { Truck, Clock, MapPin, MessageCircle, CheckCircle } from 'lucide-react'

const WHATSAPP_URL = `https://wa.me/56912345678?text=Hola%2C%20quisiera%20saber%20si%20hacen%20delivery%20a%20mi%20direcci%C3%B3n.`

export default function Delivery() {
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
    <section id="delivery" ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — visual */}
          <div className="reveal order-2 lg:order-1">
            <div className="rounded-3xl border p-8 relative overflow-hidden" style={{ background: '#FAF3E4', borderColor: '#E8D5C3' }}>

              <div className="relative w-full aspect-square max-w-sm mx-auto">
                {/* Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed opacity-40" style={{ borderColor: '#BFA28C' }} />
                <div className="absolute inset-[15%] rounded-full border opacity-30" style={{ borderColor: '#A98B76' }} />
                <div className="absolute inset-[35%] rounded-full border" style={{ background: '#F3E4C9', borderColor: '#BFA28C' }} />

                {/* Center pin */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center relative z-10" style={{ background: '#A98B76', boxShadow: '0 4px 16px -4px rgba(169,139,118,0.5)' }}>
                      <MapPin className="w-5 h-5" style={{ color: '#F3E4C9' }} />
                    </div>
                    <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ background: '#A98B76' }} />
                  </div>
                </div>

                {/* Radius label */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white border rounded-full px-3 py-1.5 shadow-card whitespace-nowrap" style={{ borderColor: '#E8D5C3' }}>
                  <span className="font-mono text-xs text-brown-600">Radio 3 km</span>
                </div>
              </div>

              {/* Info chips */}
              <div className="flex flex-wrap justify-center gap-2 mt-10">
                {[
                  { icon: Truck,  text: 'Delivery 2–4 hrs' },
                  { icon: Clock,  text: 'Lun–Sáb' },
                  { icon: MapPin, text: 'Strip Center Vilumanque' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5 bg-white border rounded-full px-3 py-1.5 shadow-card" style={{ borderColor: '#E8D5C3' }}>
                    <Icon className="w-3.5 h-3.5" style={{ color: '#A98B76' }} />
                    <span className="font-mono text-xs text-brown-700">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div className="order-1 lg:order-2">
            <p className="reveal section-label mb-5">Delivery local</p>
            <h2 className="reveal font-display text-4xl md:text-5xl font-bold text-brown-950 leading-tight tracking-tight text-balance mb-6">
              Tu pedido llega
              <em className="not-italic" style={{ color: '#A98B76' }}> hoy.</em>
            </h2>
            <p className="reveal font-sans text-brown-500 leading-relaxed mb-8">
              Cubrimos un radio de 3 km desde Strip Center Vilumanque, Concepción.
              Tiempo de entrega estimado de 2 a 4 horas desde confirmado el pedido.
            </p>

            <div className="reveal space-y-4 mb-10">
              {[
                'Consulta disponibilidad por WhatsApp',
                'Confirmamos tiempo de entrega al instante',
                'Pago en efectivo o transferencia al recibir',
                'También puedes retirar en tienda',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#BABF94' }} />
                  <span className="font-sans text-sm text-brown-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="reveal">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                <MessageCircle className="w-5 h-5" />
                Verificar mi zona
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
