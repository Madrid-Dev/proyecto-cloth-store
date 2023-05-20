import React from 'react';
import { useEffect, useState } from 'react';
import ProductCard from '../elements/ProductCard';
import './../../styles/product.css';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Product() {
  const [productos, setProductos] = useState([]);
  const [category, setCategory] = useState('');
  const { categoryParam } = useParams();

  /* For the category name */
  const capitalizeFirstLetter = (str) =>{
    const string0 = str.slice(1);
    const string1 = str.charAt(0).toUpperCase();
    return string1 + string0;
  }

  useEffect(() => {
    /* Fetching */
    fetch(process.env.PUBLIC_URL + '/data/products.json')
      .then(response => response.json())
      .then(data => {
        setProductos(data.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      //seting the value to category
      setCategory(categoryParam);
  }, [categoryParam,category]); //UseEffect runs when category params change.

  return (
    <div className='product-container'>
      <div className='container-header'>
        <Link className='home-icon' to='/'>
            <FontAwesomeIcon icon='fa-solid fa-chevron-left'/>
            <p>a</p>
        </Link>
        <h1>{capitalizeFirstLetter(category)}</h1>
      </div>
        
        <div className='product-filters'>
          <ul>
            <li>
              <Link to="/categories/all">All</Link>
            </li>
            <li>
              <Link to="/categories/sweaters">Sweaters</Link>
            </li>
            <li>
              <Link to="/categories/shoes">Shoes</Link>
            </li>
            <li>
              <Link to="/categories/accesories">Accesories</Link>
            </li>
            <li>
              <Link to="/categories/seasonal">Seasonal</Link>
            </li>
            <li>
              <Link to="/categories/classic">Classic</Link>
            </li>
            <li>
              <Link to="/categories/t-shirt">T-Shirts</Link>
            </li>
          </ul>
        </div>
        <div className='product-grid-container'>
        {productos.map((producto) => {
              if(producto.category === category)
              {return(<ProductCard productName = {producto.name} productPrice = {producto.price} key={producto.id} productImage={producto.image}/>)}
              else if(category === 'all'){
                return(<ProductCard productName = {producto.name} productPrice = {producto.price} key={producto.id} productImage={producto.image}/>);
              }else{
                return(<div className='blank'></div>)
              }             
        })}
        </div>
        
    </div>
  );
}

export default Product;