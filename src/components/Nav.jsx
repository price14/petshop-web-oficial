import { useState, useEffect } from 'react'
import { Clock, MessageCircle, Menu, X } from 'lucide-react'

const WHATSAPP_URL = `https://wa.me/56912345678?text=Hola%2C%20quisiera%20hacer%20un%20pedido.`

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const check = () => {
      const now = new Date()
      const day = now.getDay()
      const time = now.getHours() * 60 + now.getMinutes()
      if (day >= 1 && day <= 5) setOpen(time >= 600 && time < 1170)
      else if (day === 6) setOpen(time >= 600 && time < 900)
      else setOpen(false)
    }
    check()
    const id = setInterval(check, 60000)
    return () => clearInterval(id)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md border-b border-brown-200/60 shadow-[0_1px_12px_-4px_rgba(28,17,8,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-main flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-brown-500 rounded-lg flex items-center justify-center">
            <span className="font-display text-cream-light text-sm font-bold">P</span>
          </div>
          <div>
            <span className="font-display font-semibold text-brown-950 text-base leading-tight block">
              Petshop
            </span>
            <span className="font-mono text-[10px] tracking-widest text-brown-400 uppercase block -mt-0.5">
              Vilumanque
            </span>
          </div>
        </a>

        {/* Status pill */}
        <div className="hidden md:flex items-center gap-1.5 bg-white border border-brown-200 rounded-full px-3 py-1.5 shadow-card">
          <span className={`w-1.5 h-1.5 rounded-full ${open ? 'bg-sage-500 animate-pulse' : 'bg-brown-300'}`} />
          <span className="font-mono text-xs text-brown-600">
            {open ? 'Abierto ahora' : 'Cerrado'}
          </span>
          <span className="text-brown-200 mx-1">|</span>
          <Clock className="w-3 h-3 text-brown-400" />
          <span className="font-mono text-xs text-brown-400">Lun–Vie 10–19:30</span>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2.5 px-5 text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Pedir por WhatsApp
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-brown-700 hover:bg-brown-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream-50/98 backdrop-blur-md border-t border-brown-200 px-6 py-6 space-y-4">
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${open ? 'bg-sage-500 animate-pulse' : 'bg-brown-300'}`} />
            <span className="font-sans text-sm text-brown-600">
              {open ? 'Abierto ahora' : 'Cerrado'}
            </span>
          </div>
          <div className="text-sm text-brown-500 font-sans space-y-1">
            <div>Lun–Vie: 10:00 – 19:30</div>
            <div>Sáb: 10:00 – 15:00</div>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center"
            onClick={() => setMobileOpen(false)}
          >
            <MessageCircle className="w-4 h-4" />
            Pedir por WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
