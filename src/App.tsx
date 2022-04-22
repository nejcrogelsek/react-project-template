import { FC } from 'react'

//Partials
import Header from './components/partials/Header/Header'
import Footer from './components/partials/Footer/Footer'
import Routes from './routes/Routes'

const App: FC = () => {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  )
}

export default App
