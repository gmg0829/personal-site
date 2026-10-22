import { serve } from 'srvx'
import { readFile } from 'node:fs/promises'
import { extname } from 'node:path'
import server from './dist/server/server.js'

const port = Number(process.env.PORT || 3000)
const CLIENT_DIR = new URL('./dist/client/', import.meta.url)

const MIME = {
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
}

async function asset(pathname) {
  const url = new URL(pathname.replace(/^\//, ''), CLIENT_DIR)
  if (!url.href.startsWith(CLIENT_DIR.href)) return null
  try {
    const body = await readFile(url)
    return new Response(body, {
      headers: {
        'content-type': MIME[extname(url.pathname)] || 'application/octet-stream',
        'cache-control': 'public, max-age=31536000, immutable',
      },
    })
  } catch {
    return null
  }
}

serve({
  fetch: async (request) => {
    const { pathname } = new URL(request.url)
    if (pathname.startsWith('/assets/')) {
      const hit = await asset(pathname)
      if (hit) return hit
    }
    return server.fetch(request)
  },
  port,
  hostname: process.env.HOST || '127.0.0.1',
})
