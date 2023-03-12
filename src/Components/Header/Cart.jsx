import React from 'react'

function Cart() {
  return (
    <React.Fragment>
     <div className="cart-items-container">
            <div className="cart-item">
                <i className="fas fa-times"></i>
                <img src="./assets/pngwing.com (1).png" alt="menu" />
                <div className="content">
                    <h3>cart item 01</h3>
                    <div className="price">$15.99 </div>
                </div>
            </div>
            <div className="cart-item">
                <i className="fas fa-times"></i>
                <img src="./assets/pngwing.com (2).png" alt="menu" />
                <div className="content">
                    <h3>cart item 02</h3>
                    <div className="price">$16.99 </div>
                </div>
            </div>
            <div className="cart-item">
                <i className="fas fa-times"></i>
                <img src="./assets/pngwing.com (3).png" alt="menu" />
                <div className="content">
                    <h3>cart item 03</h3>
                    <div className="price">$13.99 </div>
                </div>
            </div>
            <div className="cart-item">
                <i className="fas fa-times"></i>
                <img src="./assets/pngwing.com (4).png" alt="menu" />
                <div className="content">
                    <h3>cart item 04</h3>
                    <div className="price">$12.99 </div>
                </div>
            </div>
            <a href="#" className="btn">check out </a>
        </div> 
    </React.Fragment>
  )
}

export default Cart
