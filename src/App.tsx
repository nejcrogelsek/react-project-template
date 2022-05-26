import { FC } from 'react'
import { Router, Outlet } from '@tanstack/react-location'
import { ReactLocationDevtools } from '@tanstack/react-location-devtools'

//Partials
import Header from './components/partials/Header/Header'
import Footer from './components/partials/Footer/Footer'
import { routes, location } from './routes/Routes'

const App: FC = () => {
  return (
    <Router routes={routes} location={location}>
      <Header />
      <Outlet />
      <Footer />
      <ReactLocationDevtools />
    </Router>
  )
}

export default App
