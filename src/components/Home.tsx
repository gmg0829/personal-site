import type { SiteContent } from '../data/site'
import { useReveals } from '../lib/reveal'
import { Hero } from './Hero'
import { FileSection } from './FileSection'
import { WorkSection } from './WorkSection'
import { WritingSection } from './WritingSection'
import { LetterSection } from './LetterSection'
import { ContactSection } from './ContactSection'
import { Footer } from './Footer'

export function Home({ content }: { content: SiteContent }) {
  useReveals()

  return (
    <>
      <main>
        <Hero person={content.person} />
        <FileSection facts={content.facts} />
        <WorkSection projects={content.projects} />
        <WritingSection essays={content.essays} />
        <LetterSection letter={content.letter} person={content.person} />
        <ContactSection person={content.person} hours={content.hours} />
      </main>
      <Footer person={content.person} links={content.links} />
    </>
  )
}
