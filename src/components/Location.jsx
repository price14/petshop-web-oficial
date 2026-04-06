import { useEffect, useRef } from 'react'
import { MapPin, Clock, Phone } from 'lucide-react'

const HOURS = [
  { days: 'Lunes',      hours: '10:00 – 19:30' },
  { days: 'Martes',     hours: '10:00 – 19:30' },
  { days: 'Miércoles',  hours: '10:00 – 19:30' },
  { days: 'Jueves',     hours: '10:00 – 19:30' },
  { days: 'Viernes',    hours: '10:00 – 19:30' },
  { days: 'Sábado',     hours: '10:00 – 15:00' },
  { days: 'Domingo',    hours: 'Cerrado' },
]

export default function Location() {
  const sectionRef = useRef(null)
  const todayIndex = new Date().getDay()
  const todayLabel = HOURS[(todayIndex === 0 ? 6 : todayIndex - 1)]?.days

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80)
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
      id="ubicacion"
      ref={sectionRef}
      className="py-24 lg:py-32"
      style={{ background: '#FAF3E4' }}
    >
      <div className="container-main">

        <div className="text-center mb-16 reveal">
          <p className="section-label mb-5 justify-center">Encuéntranos</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brown-950 leading-tight tracking-tight text-balance">
            Visítanos en tienda.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Address */}
          <div className="reveal card p-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: '#EFF1E5' }}>
              <MapPin className="w-5 h-5" style={{ color: '#858969' }} />
            </div>
            <h3 className="font-display font-semibold text-brown-950 text-lg mb-2">Dirección</h3>
            <p className="font-sans text-brown-500 text-sm leading-relaxed mb-4">
              Strip Center Vilumanque<br />
              Concepción, Región del Biobío<br />
              Chile
            </p>
            <a
              href="https://maps.google.com/?q=Strip+Center+Vilumanque+Concepcion+Chile"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs font-semibold transition-colors underline underline-offset-2"
              style={{ color: '#A98B76' }}
            >
              Ver en Google Maps
            </a>
          </div>

          {/* Hours */}
          <div className="reveal reveal-delay-2 card p-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: '#EFF1E5' }}>
              <Clock className="w-5 h-5" style={{ color: '#858969' }} />
            </div>
            <h3 className="font-display font-semibold text-brown-950 text-lg mb-4">Horario</h3>
            <div className="space-y-2">
              {HOURS.map((h) => {
                const isToday = h.days === todayLabel
                const isClosed = h.hours === 'Cerrado'
                return (
                  <div
                    key={h.days}
                    className="flex items-center justify-between py-1.5 px-2 rounded-lg -mx-2"
                    style={isToday ? { background: '#EFF1E5' } : {}}
                  >
                    <span className={`font-sans text-sm ${isToday ? 'font-semibold' : 'text-brown-500'}`}
                      style={isToday ? { color: '#6B6F52' } : {}}>
                      {h.days}
                      {isToday && (
                        <span className="ml-2 font-mono text-[10px] rounded-full px-1.5 py-0.5" style={{ color: '#6B6F52', background: '#D2D5B8' }}>
                          hoy
                        </span>
                      )}
                    </span>
                    <span className={`font-mono text-xs ${isClosed ? 'text-brown-300' : ''}`}
                      style={isToday ? { color: '#858969', fontWeight: 500 } : {}}>
                      {h.hours}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Contact */}
          <div className="reveal reveal-delay-3 card p-6">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: '#EFF1E5' }}>
              <Phone className="w-5 h-5" style={{ color: '#858969' }} />
            </div>
            <h3 className="font-display font-semibold text-brown-950 text-lg mb-2">Contacto</h3>
            <p className="font-sans text-brown-500 text-sm leading-relaxed mb-6">
              Toda la atención es personalizada a través de WhatsApp.
              Respondemos durante horario de tienda.
            </p>

            <div className="space-y-3">
              <a
                href="https://wa.me/56912345678?text=Hola%2C%20quisiera%20hacer%20un%20pedido."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl transition-colors group"
                style={{ background: 'rgba(18,140,126,0.07)', border: '1px solid rgba(18,140,126,0.18)' }}
              >
                <div className="w-8 h-8 bg-[#128C7E] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans font-semibold text-brown-950 text-sm">WhatsApp</p>
                  <p className="font-mono text-xs text-brown-400">+56 9 XXXX XXXX</p>
                </div>
              </a>

              <div className="p-3 rounded-xl" style={{ background: '#F3E4C9' }}>
                <p className="font-sans text-xs text-brown-500 leading-relaxed">
                  Pedidos, consultas de stock y suscripciones por WhatsApp.
                  Respondemos durante horario de atención.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
