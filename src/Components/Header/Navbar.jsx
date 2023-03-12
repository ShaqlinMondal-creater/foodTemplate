import React from 'react'
import { Outlet, Link, NavLink } from "react-router-dom"
import './Header.css'

function Navbar() {
    const router=[
        {
            routing:"./index.html",
            name:"home"
        },
        {
            routing:"./about.html",
            name:"about"
        },
        {
            routing:"./menu.html",
            name:"menu"
        },
        {
            routing:"./products.html",
            name:"products"
        },
        {
            routing:"./review.html",
            name:"review"
        },
        {
            routing:"./contact.html",
            name:"contact"
        },
        {
            routing:"./blog.html",
            name:"blog"
        }
    ]
  return (
    <React.Fragment>
        {/* {
        router.map((link,index)=>{
            return(
                <>
                <nav className="navbar" key={index}>
                    <NavLink to={`/${link.name}`}>Home</NavLink> 
                </nav>                
                </>
            )
        })} */}
    <nav className="navbar">
        <NavLink to="/home">Home</NavLink>   
        <NavLink to="/about">About</NavLink>    
        <NavLink to="/menu">Menu</NavLink>   
        <NavLink to="/products">Products</NavLink>  
        <NavLink to="/review">Review</NavLink>   
        <NavLink to="/contact">Contact</NavLink>   
        <NavLink to="/blog">Blog</NavLink>   
    </nav>
   <>
   <Outlet />
   </>
    </React.Fragment>
    
  )
}

export default Navbar
