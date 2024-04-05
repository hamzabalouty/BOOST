import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Arrowup from './components/Arrowup/Arrowup';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Team from './pages/Team/Team';
import Testimonials from './pages/Testimonials/Testimonials';
import Pricing from './pages/Pricing/Pricing';
import FAQs from './pages/FAQs/FAQs';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/team' element={<Team />}/>
        <Route path='/testimonials' element={<Testimonials />}/>
        <Route path='/pricingplan' element={<Pricing />}/>
        <Route path='/faqs' element={<FAQs />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Arrowup />
      <Footer />
    </BrowserRouter>
  )
}

export default App