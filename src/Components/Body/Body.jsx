import React from 'react'
import Menu from './Menu/Menu'
import Product from './Products/Product'

function Body() {
  return (
    <div>
        
    {/* <!---------------------------------------------MENU SECTION --> */}
        <Menu />
    {/* <!---------------------------------------------MENU SECTION --> */}

    {/* <!---------------------------------------------PRODUCTS SECTION -->  */}
        <Product /> 
    {/* <!---------------------------------------------PRODUCTS SECTION --> */}
        
    </div>
  )
}

export default Body
