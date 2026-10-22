import { useEffect, useRef } from 'react'
import type { Essay } from '../data/site'

const TONES = ['#1f2b4d', '#28355c', '#31406b']
const STEP = 120
const MAX = 5

export function WritingSection({ essays }: { essays: Essay[] }) {
  const deckRef = useRef<HTMLDivElement>(null)
  const bandRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean) as HTMLElement[]
    if (!cards.length) return

    const layout = () => {
      const deck = deckRef.current
      const band = bandRef.current
      if (!deck || !band) return
      if (window.matchMedia('(max-width: 900px)').matches) {
        cards.forEach((card) => {
          card.style.transform = ''
          card.style.opacity = ''
          card.style.zIndex = ''
        })
        return
      }
      const rect = deck.getBoundingClientRect()
      const travel = deck.offsetHeight - window.innerHeight
      const p = travel > 0 ? Math.min(1, Math.max(0, -rect.top / travel)) : 0
      const c = p * (cards.length - 1)
      const bandW = band.clientWidth
      const cardW = cards[0].offsetWidth || 720
      const anchor = Math.min(STEP * Math.min(c, MAX), Math.max(0, bandW - cardW))
      cards.forEach((card, i) => {
        const s = c - i
        let x: number
        let opacity = 1
        if (s < 0) {
          const t = 1 + s
          x = bandW + 40 + (anchor - (bandW + 40)) * t
          opacity = Math.min(1, Math.max(0, t * 1.7))
        } else if (s > MAX) {
          x = -600
          opacity = 0
        } else {
          x = anchor - STEP * s
        }
        card.style.transform = `translate3d(${Math.round(x)}px,0,0)`
        card.style.opacity = opacity
        card.style.zIndex = String(i + 1)
        card.classList.toggle('is-behind', s > 0.4)
      })
    }
    // no rAF: a background tab pauses animation frames, and the deck would freeze on its first card
    const queue = () => layout()

    layout()
    window.addEventListener('scroll', queue, { passive: true })
    window.addEventListener('resize', queue)
    return () => {
      window.removeEventListener('scroll', queue)
      window.removeEventListener('resize', queue)
    }
  }, [essays.length])

  return (
    <section className="section section--writing" id="writing">
      <div className="deck" id="deck" ref={deckRef}>
        <div className="deck__stage">
          <div className="wrap deck__headwrap">
            <h2 className="section__head" data-reveal>
              文章 <span className="en">Writing</span>
            </h2>
          </div>

          <div className="wrap deck__bandwrap">
            <div className="deck__band" ref={bandRef}>
              <div className="deck__cards" id="deck-cards">
                {essays.map((essay, i) => (
                  <article
                    className="wcard"
                    style={{ '--tone': TONES[i % TONES.length] } as React.CSSProperties}
                    key={essay.id}
                    ref={(el) => {
                      cardRefs.current[i] = el
                    }}
                  >
                    <h3 className="wcard__title">{essay.title}</h3>
                    <p className="wcard__en">{essay.titleLatin}</p>
                    <p className="wcard__ex">
                      {essay.excerpt}
                      <span className="en">{essay.excerptLatin}</span>
                    </p>
                    <div className="wcard__foot">
                      <span className="wcard__date">{essay.date}</span>
                      <a className="wcard__link" href="#writing">
                        读 <span className="en">Read</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="wrap deck__foot">
            <p className="deck__count">
              目前六篇 <span className="en">Six essays so far</span>
            </p>
            <a className="deck__all" href="#writing">
              全部文章 <span className="en">All writing</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
