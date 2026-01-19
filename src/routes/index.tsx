import { Navbar } from '@/components/web/navbar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className=" bg-amber-50 min-h-screen">
      <Navbar />
    </div>
  )
}
