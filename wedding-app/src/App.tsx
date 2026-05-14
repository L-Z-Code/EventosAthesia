import './App.css'
import { findWeddingBySlug, weddings } from './data/weddings'
import { NotFoundPage } from './pages/NotFoundPage'
import { WeddingPage } from './pages/WeddingPage'

const getCurrentSlug = () => {
  const pathSegments = window.location.pathname.split('/').filter(Boolean)
  const slug = pathSegments.at(-1)

  return slug
}

function App() {
  const wedding = findWeddingBySlug(getCurrentSlug())

  if (!wedding) {
    return <NotFoundPage weddings={weddings} />
  }

  return <WeddingPage wedding={wedding} />
}

export default App
