import React from 'react'
import './Review.css'

function Review() {
    const reviews = [
        {
            img: "pngwing.com (9).png",
            review: "Dicta totam suscipit vero praesentium excepturi facilis, fuga at architecto dolor tempora molestias quam dignissimos sit. Molestiae temporibus ratione quas placeat possimus!",
            name: "Patrick Hellinger"
        },
        {
            img: "pngwing.com (10).png",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga at architecto dolor tempora molestias quam dignissimos sit. Molestiae temporibus ratione quas placeat possimus!",
            name: "Serena Williams"
        },
        {
            img: "pngwing.com (11).png",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta totam suscipit vero praesentium excepturi facilis, fuga at architecto dolor tempora molestias quam dignissimos possimus!",
            name: "Helen Marksen"
        }
    ]
    const stars = 
        [
            "star", 
            "star", 
            "star", 
            "star", 
            "star-half-alt"
        ]
  return (
    <React.Fragment>
      <section className="review" id="review">
        <h1 className="heading">customer's <span>review</span> </h1>
        <div className="box-container">
        {
                    reviews.map((review, index) => {
                        return (
                            <div className="box" key={index}>
                                <img src="assets/pngwing.com (8).png" alt="quote" />
                                <p> {review.review}</p>
                                <img src={`assets/${review.img}`} alt="customer-avatar" className="user" />
                                <h3>{review.name}</h3>
                                
                                <div className="stars">
                                    {
                                        stars.map((star, index) => {
                                            return (
                                                <i className={`fas fa-${star}`} key={index}></i>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
        </div>
    </section> 
    </React.Fragment>
  )
}

export default Review
