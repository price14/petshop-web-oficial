import Nav from './components/Nav'
import Hero from './components/Hero'
import Brands from './components/Brands'
import HowItWorks from './components/HowItWorks'
import Subscription from './components/Subscription'
import Delivery from './components/Delivery'
import Location from './components/Location'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Brands />
        <HowItWorks />
        <Subscription />
        <Delivery />
        <Location />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
