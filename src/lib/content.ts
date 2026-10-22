import { createServerFn } from '@tanstack/react-start'
import { siteContent } from '../data/site'

/**
 * The seam where a CMS goes.
 * Swap the body for a fetch to Notion / Sanity / a database and return the
 * same shape; the page components do not change.
 */
export const loadSiteContent = createServerFn({ method: 'GET' }).handler(async () => {
  return siteContent
})
