import React from 'react'
import './About.css'

function About() {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">about <span>us</span> </h1>

        <div className="row">
            <div className="image">
                <img src="./assets/pngwing.com (7).png" alt="" />
            </div>
            <div className="content">
                <h3>What is the secret receipe of our burgers</h3>
                <div className="paragraph">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia officia id et, corrupti assumenda.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia officia id et, corrupti assumenda.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia officia id et, corrupti assumenda.</p>
                </div>
                    <a href="#" className="btn">Learn More</a>
            </div>
        </div>
    </section>
    </>
  )
}
export default About