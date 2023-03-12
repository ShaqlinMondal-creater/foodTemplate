import React from 'react'

function Icon() {
    const social=
        [
            "facebook",
            "twitter",
            "instagram",
            "linkedin",
            "pinterest",
        ]
  return (
    <>
       <div className="share">
            {
                social.map((icon,index)=>{
                    return(
                        <a href="#" className={`fab fa-${icon}`} key={index}></a>
                    )
                })
            } 
        </div>
    </>
  )
}

export default Icon
