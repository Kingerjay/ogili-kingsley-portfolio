import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import MainContent from './components/layout/MainContent'
import { useMediaQuery } from './hooks/useMediaQuery'

export default function App() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  const skipToContent = (event) => {
    event.preventDefault()
    const main = document.getElementById('main-content')
    main?.focus()
    main?.scrollIntoView()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        onClick={skipToContent}
        className="absolute left-2 top-2 z-30 -translate-y-[200%] rounded-md bg-primary px-4 py-2 font-semibold text-white focus:translate-y-0"
      >
        Skip to main content
      </a>
      <Header />
      <div className="flex flex-1">
        {isDesktop && <Sidebar />}
        <MainContent isDesktop={isDesktop} />
      </div>
    </div>
  )
}