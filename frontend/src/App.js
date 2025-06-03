import Banner from './components/banner';
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
      {/* <Certificate /> */}
      <ContactForm />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
