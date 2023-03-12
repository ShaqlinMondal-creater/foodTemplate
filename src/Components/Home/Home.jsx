import React from 'react'
import './Home.css'

function Home() {
  const img = "./assets/pizza-with-turkey-bacon-orange-and-cashew-nuts-2022-03-29-07-33-54-utc.jpg";
  return (
    <React.Fragment>
      <section className="home" id="home" style={{ backgroundImage: `url(${img})` }}>
        <div className="content">
        <h3>Fast Food Delivery</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt perferendis obcaecati iste voluptatum, quaerat nihil magnam numquam sint? </p>
        <a href="#" className="btn">order now</a>
        </div>
    </section>
    </React.Fragment>
  )
}

export default Home
