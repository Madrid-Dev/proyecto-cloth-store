import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { faRecycle } from '@fortawesome/free-solid-svg-icons';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Product from './components/Pages/Product';
import ProductID from './components/ProductID';
import Footer from './components/Footer';
import AboutUs from './components/Pages/Aboutus';
import ContactUs from './components/Pages/Contactus';
import {CartProvider} from './components/CartProvider';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Index = () => {
  library.add(faBars,faTrash, faCartShopping,faCreditCard, faLocationPin, faExclamation, faRecycle,faHashtag,faXmark,faInfo, faMobile, faCopyright, faChevronLeft);
  return ( 
    <>
    <CartProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element = {
              <App />
          }>
          </Route>
          <Route path='/categories/:categoryParam' element = {
              <Product />
          }>
          </Route>
          <Route path='/about-us' element = {
              <AboutUs />
          }>
          </Route>
          <Route path='/contact-us' element = {
              <ContactUs />
          }>
          </Route>
          <Route path='/product/:id' element = {
              <ProductID />
          }>
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
    </>
  );
}
 
export default Index;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Index></Index>
);