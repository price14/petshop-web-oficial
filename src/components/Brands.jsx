import { useEffect, useRef } from 'react'
import { Shield, Award } from 'lucide-react'

const BRANDS = [
  {
    name: 'Orijen',
    tier: 'Super Premium',
    description: 'Nutrición biológicamente apropiada. Elaborado con más del 85% de ingredientes de origen animal de la región.',
    origin: 'Canadá',
    highlight: 'Libre de granos',
  },
  {
    name: 'Acana',
    tier: 'Super Premium',
    description: 'Fórmulas con proteínas frescas y regionales. Nutrición que refleja la dieta natural de perros y gatos.',
    origin: 'Canadá',
    highlight: 'Alto en proteína',
  },
  {
    name: "Hill's Science Diet",
    tier: 'Premium',
    description: 'Respaldada por 35 años de investigación nutricional. Formulada por veterinarios y nutricionistas.',
    origin: 'EE.UU.',
    highlight: 'Evidencia clínica',
  },
  {
    name: 'Royal Canin',
    tier: 'Premium',
    description: 'Nutrición de precisión adaptada a la raza, tamaño y etapa de vida. Referencia veterinaria mundial.',
    origin: 'Francia',
    highlight: 'Raza específica',
  },
  {
    name: 'PremieRpet',
    tier: 'Premium',
    description: 'Nutrición equilibrada con ingredientes de alta calidad y tecnología de producción avanzada.',
    origin: 'Brasil',
    highlight: 'Alta digestibilidad',
  },
  {
    name: 'Calibra',
    tier: 'Premium',
    description: 'Alimento holístico con ingredientes naturales sin colorantes ni conservantes artificiales.',
    origin: 'República Checa',
    highlight: 'Sin aditivos',
  },
]

export default function Brands() {
  const sectionRef = useRef(null)

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
    <section id="marcas" ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-[360px_1fr] gap-16 lg:gap-24">

          {/* Left */}
          <div className="reveal">
            <p className="section-label mb-5">Solo lo mejor</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brown-950 leading-tight tracking-tight text-balance mb-6">
              Marcas que no
              <em className="not-italic" style={{ color: '#A98B76' }}> comprometen.</em>
            </h2>
            <p className="font-sans text-brown-500 leading-relaxed mb-8">
              No vendemos marcas masivas ni de bajo costo. Solo trabajamos con
              fabricantes que priorizan la salud animal sobre el margen.
            </p>

            <div className="space-y-3">
              {[
                { icon: Shield, text: 'Fórmulas sin subproductos de baja calidad' },
                { icon: Award,  text: 'Respaldadas por veterinarios y nutricionistas' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#EFF1E5' }}>
                    <Icon className="w-4 h-4" style={{ color: '#858969' }} />
                  </div>
                  <p className="font-sans text-sm text-brown-500 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — brand grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {BRANDS.map((brand, i) => (
              <div
                key={brand.name}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} card p-5 flex flex-col gap-3`}
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display font-semibold text-brown-950 text-lg leading-tight">
                    {brand.name}
                  </h3>
                  <span
                    className="font-mono text-[10px] tracking-wide uppercase rounded-full px-2.5 py-1 flex-shrink-0 mt-0.5 border"
                    style={{ color: '#858969', background: '#EFF1E5', borderColor: '#D2D5B8' }}
                  >
                    {brand.tier}
                  </span>
                </div>
                <p className="font-sans text-sm text-brown-500 leading-relaxed flex-1">
                  {brand.description}
                </p>
                <div className="flex items-center gap-3 pt-1 border-t border-brown-100">
                  <span className="font-mono text-xs text-brown-400">{brand.origin}</span>
                  <span className="w-1 h-1 rounded-full bg-brown-200" />
                  <span
                    className="font-sans text-xs font-medium rounded-full px-2 py-0.5"
                    style={{ color: '#858969', background: '#EFF1E5' }}
                  >
                    {brand.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
