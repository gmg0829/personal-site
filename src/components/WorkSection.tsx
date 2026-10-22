import { useRef, useState } from 'react'
import type { Project } from '../data/site'

export function WorkSection({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(projects[0]?.id)
  const previewRef = useRef<HTMLDivElement>(null)
  const current = projects.find((p) => p.id === active) ?? projects[0]

  const pick = (id: string) => {
    setActive(id)
    if (window.matchMedia('(max-width: 900px)').matches && previewRef.current) {
      previewRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <section className="section section--work" id="work">
      <div className="wrap work__head">
        <h2 className="section__head section__head--small" data-reveal>
          作品 <span className="en">Work</span>
        </h2>
        <p className="work__note" data-reveal style={{ '--d': '80ms' } as React.CSSProperties}>
          做过的东西，按标签排成一格一格；指向其中一个，右边会浮出它的样子。
          <span className="en">
            Sixteen things I have made, filed by tag. Point at one and its card appears.
          </span>
        </p>
      </div>

      <div className="wrap work__body">
        <ul className="shelf" id="shelf">
          {projects.map((p) => (
            <li className="shelf__item" data-disc={p.discipline} key={p.id}>
              <a
                className="spine"
                href={`#${p.id}`}
                onMouseEnter={() => setActive(p.id)}
                onFocus={() => setActive(p.id)}
                onClick={(e) => {
                  e.preventDefault()
                  pick(p.id)
                }}
              >
                <span className="spine__name">{p.name}</span>
                <span className="spine__disc">{p.disciplineLabel}</span>
                <span className="spine__year">{p.year}</span>
              </a>
              <article className="pcard" id={p.id}>
                <h3 className="card__title">{p.name}</h3>
                <p className="card__en">{p.latin}</p>
                <p className="card__meta">
                  {p.disciplineLabel} · {p.disciplineLatin} · {p.year} · {p.credit}
                </p>
                <p className="card__note">
                  {p.note}
                  <span className="en">{p.noteLatin}</span>
                </p>
              </article>
            </li>
          ))}
        </ul>

        <div className="preview" id="preview" ref={previewRef} aria-live="polite">
          {current && (
            <div className="preview__inner" key={current.id}>
              <h3 className="card__title">{current.name}</h3>
              <p className="card__en">{current.latin}</p>
              <p className="card__meta">
                {current.disciplineLabel} · {current.disciplineLatin} · {current.year} · {current.credit}
              </p>
              <p className="card__note">
                {current.note}
                <span className="en">{current.noteLatin}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
