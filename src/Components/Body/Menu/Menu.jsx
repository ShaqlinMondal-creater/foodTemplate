import React from 'react'
import './Menu.css'

function Menu() {
    const menus = [
        {
            img: "assets/pngwing.com.png",
            category: "Pizza",
            quantity: "6 Mini Pizzas",
            sellprice: "$104.99",
            price: "$119.99",
        },
        {
            img: "assets/pngwing.com (2).png",
            category: "Burger",
            quantity: "5 Mini Burgers",
            sellprice: "$99.99 ",
            price: "$105.99",
        },
        {
            img: "assets/pngwing.com (1).png",
            category: "Pizza",
            quantity: "2 Mixed Pizzas",
            sellprice: "$49.99",
            price: "$59.99",
        },
        {
            img: "assets/pngwing.com (3).png",
            category: "Burger",
            quantity: "3 Meatball Burgers",
            sellprice: "$79.99",
            price: "$99.99",
        }
    ]
    return (
        <>
            <section className="menu" id="menu">
                <h1 className="heading">our <span>menu</span></h1>
                <div className="box-container">
                    {
                        menus.map((menu, index) => {
                            return (
                                <div className="box" key={index}>
                                    <div className="box-head">

                                        <img src={menu.img} alt="" key={index} />
                                        <span className="menu-category">{menu.category}</span>
                                        <h3>{menu.quantity}</h3>
                                        <div className="price">{menu.sellprice} <span>{menu.price}</span></div>
                                    </div>
                                    <div className="box-bottom">
                                        <a href="#" className="btn">add to cart</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Menu
