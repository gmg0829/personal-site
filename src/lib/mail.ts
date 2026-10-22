import type { SiteContent } from '../data/site'

export function mailHref(person: SiteContent['person']) {
  return `mailto:${person.email}?subject=${encodeURIComponent('想聊聊')}&body=${encodeURIComponent('你好，我想聊聊。')}`
}
