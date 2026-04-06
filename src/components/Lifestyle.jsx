import { useEffect, useRef } from 'react'

const PHOTOS = [
  {
    src: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=500&q=80',
    alt: 'Cachorro golden retriever',
    label: 'Perros',
    aspect: 'aspect-[3/4]',
  },
  {
    src: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=700&q=80',
    alt: 'Gato naranja descansando',
    label: 'Gatos',
    aspect: 'aspect-[4/3]',
  },
  {
    src: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=500&q=80',
    alt: 'Perro disfrutando su alimento premium',
    label: 'Nutrición',
    aspect: 'aspect-[3/4]',
  },
]

export default function Lifestyle() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120)
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
    <section ref={sectionRef} className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="container-main">

        {/* Label */}
        <div className="reveal flex items-center justify-between mb-8">
          <p className="section-label">Tu mascota merece lo mejor</p>
          <p className="font-mono text-xs text-brown-400 hidden sm:block">
            Perros · Gatos · Nutrición premium
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-3 gap-3 md:gap-4 items-end">
          {PHOTOS.map((photo, i) => (
            <div
              key={photo.label}
              className={`reveal reveal-delay-${i + 1} relative rounded-2xl md:rounded-3xl overflow-hidden group ${photo.aspect}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Label badge */}
              <div className="absolute bottom-3 left-3">
                <span
                  className="font-mono text-xs font-medium rounded-full px-2.5 py-1"
                  style={{ background: 'rgba(243,228,201,0.92)', color: '#6B4C39' }}
                >
                  {photo.label}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
