import React from 'react'

function Links() {
    const links=
        [
            "home",
            "about",
            "menu",
            "products",
            "review",
            "contact",
            "blog",
        ]
  return (
    <>
       <div className="links">
        {
            links.map((link,index)=>{
                return (
                    <a href="#home" key={index}>{link}</a>
                )
            })
        }
    </div>
    </>
  )
}

export default Links
