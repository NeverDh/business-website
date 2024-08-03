import React from 'react';
import { Element } from 'react-scroll';
import Home from './sections/Home';
import WhoWeWare from './sections/WhoWeWare';
import Depositions from './sections/Depositions';
import Products from './sections/Products';
import Services from './sections/Services';
import Events from './sections/Events';
import Marks from './sections/Marks';
import Contact from './sections/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Element name="home">
        <Home />
      </Element>
      <Element name="products">
        <Products />
      </Element>
      <Element name="whoWeWare">
        <WhoWeWare />
      </Element>
      <Element name="depositions">
        <Depositions />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="events">
        <Events />
      </Element>
      <Element name="marks">
        <Marks />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;