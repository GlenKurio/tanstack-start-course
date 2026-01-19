import { Navbar } from '@/components/web/navbar'
import { sessionQueryOptions } from '@/lib/api'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  loader: async ({ context }) => {
    await context.queryClient.prefetchQuery(sessionQueryOptions)
  },
  component: App,
})

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
    </div>
  )
}
