import { MessageCircle, MapPin, Clock } from 'lucide-react'

const WHATSAPP_URL = `https://wa.me/56912345678?text=Hola%2C%20quisiera%20hacer%20un%20pedido.`

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#2D1F14', color: '#BFA28C' }}>
      <div className="container-main pt-16 pb-8">

        <div className="grid md:grid-cols-[1fr_auto] gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#A98B76' }}>
                <span className="font-display text-sm font-bold" style={{ color: '#F3E4C9' }}>P</span>
              </div>
              <div>
                <span className="font-display font-semibold text-base block leading-tight" style={{ color: '#F3E4C9' }}>
                  Petshop Vilumanque
                </span>
                <span className="font-mono text-[10px] tracking-widest uppercase block -mt-0.5" style={{ color: '#8A6652' }}>
                  Nutrición Premium
                </span>
              </div>
            </div>
            <p className="font-sans text-sm leading-relaxed max-w-xs" style={{ color: '#8A6652' }}>
              Especialistas en nutrición de alto rendimiento para perros y gatos.
              Solo marcas premium y super premium.
            </p>
          </div>

          {/* Info columns */}
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-mono text-[11px] tracking-[0.1em] uppercase mb-4" style={{ color: '#6B4C39' }}>
                Horario
              </h4>
              <ul className="space-y-1.5 font-sans text-sm">
                <li className="flex items-center gap-2" style={{ color: '#BFA28C' }}>
                  <Clock className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#8A6652' }} />
                  Lun–Vie: 10:00 – 19:30
                </li>
                <li className="flex items-center gap-2" style={{ color: '#BFA28C' }}>
                  <Clock className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#8A6652' }} />
                  Sábado: 10:00 – 15:00
                </li>
                <li style={{ color: '#6B4C39' }}>Domingo: Cerrado</li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-[11px] tracking-[0.1em] uppercase mb-4" style={{ color: '#6B4C39' }}>
                Contacto
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-sans text-sm transition-colors"
                    style={{ color: '#BFA28C' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#F3E4C9'}
                    onMouseLeave={e => e.currentTarget.style.color = '#BFA28C'}
                  >
                    <MessageCircle className="w-3.5 h-3.5" style={{ color: '#8A6652' }} />
                    WhatsApp
                  </a>
                </li>
                <li className="flex items-start gap-2 font-sans text-sm" style={{ color: '#8A6652' }}>
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#6B4C39' }} />
                  Strip Center Vilumanque,<br />Concepción
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: '#3D2B1F' }}>
          <p className="font-mono text-xs" style={{ color: '#6B4C39' }}>
            &copy; {year} Petshop Vilumanque. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#BABF94' }} />
            <span className="font-mono text-xs" style={{ color: '#6B4C39' }}>Concepción, Chile</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
