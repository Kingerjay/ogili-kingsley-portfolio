import DesktopView from './DesktopView'
import MobileView from './MobileView'

export default function MainContent({ isDesktop }) {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="min-w-0 flex-1 px-4 py-6 focus:outline-none min-[481px]:px-6 min-[481px]:py-8 lg:px-12 lg:py-10"
    >
      <div className="max-w-[880px]">{isDesktop ? <DesktopView /> : <MobileView />}</div>
    </main>
  )
}