import React from 'react'
import './Product.css'

function Product() {
    const products = [
        {
            title: "mini burger",
            item: "Bacon Burger",
            img: "assets/pngwing.com (6).png",
            price: "$6.00",
            quantity: "110gr / 300 Cal"
        },
        {
            title: "cheese burger",
            item: "cheese burger",
            img: "assets/pngwing.com (6).png",
            price: "$12.00",
            quantity: "140gr / 2500 Cal"
        },
        {
            title: "Double burger",
            item: "Double burger",
            img: "assets/pngwing.com (5).png",
            price: "$24.00",
            quantity: "440gr / 600 Cal"
        }
    ]
  return (
    <>
      <section className="products" id="products">
            <h1 className="heading">our <span>products</span> </h1>
            <div className="box-container">
                {
                    products.map((product, index) => {
                        return (
                            <div className="box" key={index}>
                                <div className="box-head">
                                    <span className="title">{product.title}</span>
                                    <a href="#" className="name">{product.item}</a>
                                </div>
                                <div className="image">
                                    <img src={product.img} alt="" />
                                </div>
                                <div className="box-bottom">
                                    <div className="info">
                                        <b className="price">{product.price}</b>
                                        <span className="amount">{product.quantity}</span>
                                    </div>
                                    <div className="product-btn">
                                        <a href="#">
                                            <i className="fas fa-plus"></i>
                                        </a>
                                    </div>
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

export default Product
