import { useEffect, useRef, useState } from 'react'
import type { SiteContent } from '../data/site'

export function FileSection({ facts }: { facts: SiteContent['facts'] }) {
  const [label, setLabel] = useState('')
  const [width, setWidth] = useState(48)
  const tabRef = useRef<HTMLSpanElement>(null)

  const text = label.trim() || '个人档案'

  useEffect(() => {
    const measure = () => {
      if (tabRef.current) {
        setWidth(Math.round(tabRef.current.getBoundingClientRect().width / 3.7795))
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [label])

  return (
    <section className="section section--file" id="file">
      <div className="wrap grid file__top">
        <h2 className="section__head" data-reveal>
          档案 <span className="en">The file</span>
        </h2>

        <div className="file__note" data-reveal style={{ '--d': '80ms' } as React.CSSProperties}>
          <p>这一页是我的档案：作品、文章、自述和联系方式，像抽屉里的文件一样按标签归档。</p>
          <p className="en">
            This page is my own file: work, writing, a letter and how to reach me, filed by tab.
          </p>
        </div>

        <div className="maker" data-reveal style={{ '--d': '160ms' } as React.CSSProperties}>
          <p className="maker__label" id="maker-label">
            给这份档案贴个标签 <span className="en">Label this file</span>
          </p>
          <div className="maker__row">
            <input
              className="maker__input"
              id="maker-input"
              type="text"
              maxLength={14}
              autoComplete="off"
              placeholder="你的名字 Your name"
              aria-labelledby="maker-label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
            <span className="maker__tab" ref={tabRef}>
              {text}
            </span>
          </div>
          <p className="maker__meta">
            {Array.from(text).length} 个字符 characters · {width} 毫米 mm
          </p>
        </div>
      </div>

      <div className="wrap facts" data-reveal style={{ '--d': '120ms' } as React.CSSProperties}>
        {facts.map((fact) => (
          <div className="fact" key={fact.big}>
            <span className="fact__big">{fact.big}</span>
            <span className="fact__note">{fact.note}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
