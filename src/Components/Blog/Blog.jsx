import React from 'react'
import './Blog.css'

function Blog() {
    const blog=[
        {
            title:"how to make burgers",
            img:"delicious-burger-on-wooden-board-2022-03-04-05-58-25-utc",
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus eos esse nesciunt cupiditate expedita.",
            postedby:"by admin",
            date: "10st may, 2020",
        },
        {
            title:"how to make burgers",
            img:"delicious-tasty-burgers-on-wooden-background-2021-08-26-15-25-13-utc",
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus eos esse nesciunt cupiditate expedita.",
            postedby:"by admin",
            date: "10st may, 2020",
        },
        {
            title:"how to make burgers",
            img:"handmade-burger-on-dark-background-delicious-blac-2021-10-21-02-27-27-utc",
            desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus eos esse nesciunt cupiditate expedita.",
            postedby:"by admin",
            date: "10st may, 2020",
        },
    ]
    const readmore=
        [
            'readmore',
            'read morre',
            'read',
        ]
  return (
    <>
      <section className="blog" id="blog">
        <h1 className="heading">our <span>blog</span> </h1>
        <div className="box-container">
            {
                blog.map((item,index)=>{
                    return(
                        <div className="box-full" key={index}>
                <div className="image">
                    <img src={`assets/${item.img}.jpg`} alt=""/>
                </div>
                <div className="content">
                    <a href="#" className="title">{item.title}</a>
                    <span>{item.postedby}/{item.date}</span>
                    <p>{item.desc}</p>
                    <a href="#" className="btn">read more</a>
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

export default Blog
