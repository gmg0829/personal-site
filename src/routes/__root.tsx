import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import appCss from '../styles/site.css?url'

export const Route = createRootRouteWithContext<{}>()({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: '高明岗 Gao Minggang：软件工程师 Software engineer' },
      {
        name: 'description',
        content:
          '高明岗的个人档案：作品、文章、自述与联系方式。The personal file of Gao Minggang: work, writing, a letter, and how to reach him.',
      },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Zilla+Slab:ital,wght@0,400;0,500;0,600;1,400&display=swap',
      },
      { rel: 'stylesheet', href: appCss },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <html lang="zh-Hans">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  )
}
