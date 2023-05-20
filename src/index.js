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
const Index = () => {
  library.add(faBars, faCartShopping,faCreditCard, faLocationPin, faExclamation, faRecycle,faHashtag,faXmark,faInfo, faMobile, faCopyright, faChevronLeft);
  return ( 
    <>
    
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
            <App />
        }>
        </Route>
        <Route path='/contact-us' element = {
            <App />
        }>
        </Route>
        <Route path='/product/:id' element = {
            <App />
        }>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
 
export default Index;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Index></Index>
);