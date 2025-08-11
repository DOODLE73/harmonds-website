import Banner from './components/banner';
import Banner2 from './components/banner2';
import Products from './components/contactform';
import ContactForm from './components/product';
import Navbar from './components/navbar';
import Footer from './components/footer';

// import Certificate from './components/certificate'

import './style.css';
import React from 'react';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Banner2 />
      {/* <Certificate /> */}
      <ContactForm />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
