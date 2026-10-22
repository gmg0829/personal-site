import type { SiteContent } from '../data/site'

export function Footer({
  person,
  links,
}: {
  person: SiteContent['person']
  links: SiteContent['links']
}) {
  return (
    <footer className="section section--footer">
      <div className="wrap">
        <div className="back">
          <div className="back__left">
            <p className="back__sign">
              谢谢，看完了 <span className="en">Thanks for reading</span>
            </p>
            <p>这个页面本身也是一份档案：作品、文章、一封信，和找到我的方式。</p>
            <p className="en">
              This page is a file too: work, writing, a letter, and how to reach me.
            </p>
          </div>
          <div className="back__right">
            <span className="seal" aria-hidden="true">
              砚
            </span>
            <ul className="addr">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <p className="back__imprint">
            © 2026 {person.name} {person.latin}，{person.role}{' '}
            <span className="en">{person.roleLatin}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
