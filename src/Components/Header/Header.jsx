import React from 'react'
import Cart from './Cart'
import Navbar from './Navbar'
import Home from '../Home/Home'
import About from '../About/About'
import Menu from '../Body/Menu/Menu'
import Review from '../Review/Review'
import Contact from '../Contact/Contact'
import Blog from '../Blog/Blog'
import Product from '../Body/Products/Product'

import './Header.css'
import { BrowserRouter,Routes,Route, NavLink } from 'react-router-dom'

function Header() {
    const buttons=[
        {
            name:"search",
            id:"search"
        },
        {
            name:"shopping-cart",
            id:"cart"
        },
        {
            name:"bars",
            id:"menu"
        }
    ]
  return (
    <React.Fragment>
      <header className="header" >
        <a href="#" className="logo">
            <img src="./assets/pngegg.png" alt="logo" />
        </a>

        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar />} >
                {/* <Route index element={<Home />} /> */}
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/products" element={<Product />} />
                <Route path="/review" element={<Review />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                
            </Route>
        </Routes>
        </BrowserRouter>
        

        <div className="buttons">
            {
                buttons.map((item,index)=>{
                    return(
                        <button id={`${item.id}-btn`} key={index}>
                        <i className={`fas fa-${item.name}`}></i>
                        </button>
                    )
                })
            }
        </div>

        <div className="search-form">
            <input type="text" className="search-input" id="search-box" placeholder="Search" />
            <i className="fas fa-search"></i>
        </div>

        <Cart />
    </header>
    </React.Fragment>
  )
}

export default Header
