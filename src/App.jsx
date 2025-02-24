import { Route, Routes } from 'react-router'
import Navbar from './pages/Navbar'
import './style/App.css'
import Child from './pages/Child'
import FAQs from './pages/Customers/FAQs'
import ShippingReturns from './pages/Customers/ShippingReturns'
import OrderTracking from './pages/Customers/OrderTracking'
import PrivacyPolicy from './pages/Customers/PrivacyPolicy'
import TermsOfService from './pages/Customers/TermsOfService'
import AboutUs from './pages/Customers/AboutUs'
import ContactUs from './pages/Customers/ContactUs'
import Footer from './pages/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Child />} />

        <Route path="/faqs" element={<FAQs />} />
        <Route path="/ship" element={<ShippingReturns />} />
        <Route path="/ordertrack" element={<OrderTracking />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/tearms" element={<TermsOfService />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />


    </>
  )
}

export default App
