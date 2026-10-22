import type { SiteContent } from '../data/site'
import { mailHref } from '../lib/mail'

const PERFORATION = Array.from({ length: 22 }, (_, i) => <i key={i} />)

export function LetterSection({
  letter,
  person,
}: {
  letter: SiteContent['letter']
  person: SiteContent['person']
}) {
  return (
    <section className="section section--letter" id="letter">
      <div className="wrap letter__wrap">
        <article className="sheet">
          <div className="sheet__head">
            <span className="sheet__seal" aria-hidden="true">
              高
            </span>
            <h2 className="sheet__title">
              自述 <span className="en">Letter</span>
            </h2>
          </div>

          <div className="sheet__cols">
            <div className="letter__col" lang="zh-Hans">
              {letter.zh.map((p) => (
                <p key={p.slice(0, 8)}>{p}</p>
              ))}
            </div>
            <div className="letter__col" lang="en">
              {letter.en.map((p) => (
                <p key={p.slice(0, 8)}>{p}</p>
              ))}
            </div>
          </div>

          <p className="sheet__sign">
            {person.name} {person.latin}
          </p>
          <p className="sheet__role">
            {person.role} <span className="en">{person.roleLatin}</span>
          </p>
        </article>

        <div className="tear">
          <div className="tear__perf" aria-hidden="true">
            {PERFORATION}
          </div>
          <a className="tear__mail" href={mailHref(person)}>
            {person.email}
          </a>
          <span className="tear__note">
            撕下这一条寄给我 <span className="en">Tear this off and send it</span>
          </span>
        </div>
      </div>
    </section>
  )
}
