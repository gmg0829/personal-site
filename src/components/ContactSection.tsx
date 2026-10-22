import type { SiteContent } from '../data/site'
import { mailHref } from '../lib/mail'

export function ContactSection({
  person,
  hours,
}: {
  person: SiteContent['person']
  hours: SiteContent['hours']
}) {
  return (
    <section className="section section--contact" id="contact">
      <div className="contact__card">
        <h2 className="contact__title">
          联系 <span className="en">Contact</span>
        </h2>
        <p className="contact__addr">
          {person.city}
          <br />
          <span className="en">{person.cityLatin}</span>
        </p>
        <dl className="contact__rows">
          {hours.map((row) => (
            <div className="row" key={row.day}>
              <dt>
                {row.day} <span className="en">{row.dayLatin}</span>
              </dt>
              <dd>{row.time}</dd>
            </div>
          ))}
        </dl>
        <p className="contact__phone">
          电话 <span className="en">Phone</span>
          <a href={person.phoneHref}>{person.phone}</a>
        </p>
        <p className="contact__email">
          <a href={`mailto:${person.email}`}>{person.email}</a>
        </p>
        <a className="button button--accent" href={mailHref(person)}>
          发封邮件 <span className="en">Send an email</span>
        </a>
      </div>

      <div className="contact__foot">
        <p>
          时区 GMT+8，工作日 09:00–18:00 回信。
          <span className="en">Time zone GMT+8; replies on weekdays, 09:00–18:00.</span>
        </p>
        <p>
          工作室在上海，到访请先来信。
          <span className="en">Studio in Shanghai; write before you visit.</span>
        </p>
      </div>
    </section>
  )
}
