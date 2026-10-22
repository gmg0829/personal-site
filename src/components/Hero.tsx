import type { SiteContent } from '../data/site'
import { mailHref } from '../lib/mail'

const INDEX = [
  { href: '#file', cn: '档案', en: 'The file' },
  { href: '#work', cn: '作品', en: 'Work' },
  { href: '#writing', cn: '文章', en: 'Writing' },
  { href: '#letter', cn: '自述', en: 'Letter' },
  { href: '#contact', cn: '联系', en: 'Contact' },
]

export function Hero({ person }: { person: SiteContent['person'] }) {
  return (
    <section className="hero" id="top">
      <div className="hero__top">
        <span className="seal seal--mark" aria-hidden="true">
          高
        </span>
        <nav className="hero__nav" aria-label="主导航 Primary">
          <a href="#work">
            作品 <span className="en">Work</span>
          </a>
          <a href="#writing">
            文章 <span className="en">Writing</span>
          </a>
          <a href="#contact">
            联系 <span className="en">Contact</span>
          </a>
        </nav>
        <a className="button button--small" href={mailHref(person)}>
          写封邮件 <span className="en">Email me</span>
        </a>
      </div>

      <div className="hero__card">
        <h1 className="hero__name">
          <span className="hero__line hero__line--a">{person.name}</span>
          <span className="hero__line hero__line--b">{person.latin}</span>
        </h1>

        <p className="hero__details">
          <span>
            {person.role}　Software engineer for back-end and systems
          </span>
          <span>
            后端、基础设施与工具　Services, infrastructure and the tools around them
          </span>
          <span>
            上海 GMT+8　2026 秋冬开放接活
          </span>
        </p>

        <nav className="hero__index" aria-label="档案索引 File index">
          {INDEX.map((item) => (
            <a href={item.href} key={item.href}>
              <span className="hero__index-cn">{item.cn}</span>
              <span className="hero__index-en">{item.en}</span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  )
}
