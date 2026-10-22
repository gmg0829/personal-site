import { createFileRoute } from '@tanstack/react-router'
import { Home } from '../components/Home'
import { loadSiteContent } from '../lib/content'

export const Route = createFileRoute('/')({
  loader: () => loadSiteContent(),
  component: HomeRoute,
})

function HomeRoute() {
  const content = Route.useLoaderData()
  return <Home content={content} />
}
