import React from 'react'
import './Contact.css'

function Contact() {
    const input = [
        {
            class: "user",
            type: "text",
            placeholder: "name"
        },
        {
            class: "envelope",
            type: "email",
            placeholder: "email"
        },
        {
            class: "phone",
            type: "nmber",
            placeholder: "number"
        }
    ]
    return (
        <React.Fragment>
            <section className="contact" id="contact">
                <h1 className="heading">contact <span>us</span> </h1>
                <div className="row">
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d983.3235940970079!2d8.540719273659763!3d47.3713194174677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a00aa1e1d17%3A0x278f576acdd580f5!2sStorchen%20Z%C3%BCrich%20-%20Lifestyle%20Boutique%20Hotel!5e0!3m2!1sde!2sch!4v1658505945506!5m2!1sde!2sch" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <form>
                        <h3>get in touch</h3>
                        {
                            input.map((data, index) => {
                                return (
                                    <div className="inputBox" key={index}>
                                        <i className={`fas fa-${data.class}`}></i>
                                        <input type={data.type} placeholder={data.placeholder} />
                                    </div>
                                )
                            })
                        }
                        <input type="submit" className="btn" value="contact now" />
                    </form>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Contact
