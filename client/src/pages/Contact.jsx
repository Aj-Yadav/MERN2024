import React, { useState } from "react";
import "./Contact.css";
const Contact = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        message: "",
    });
    const handleInput = (e) => {
        // console.log(e)
        let name = e.target.name;
        let value = e.target.value;
        setUser({
            ...user,
            [name]: value,//name is daynamic so that we can use different names like email, phone , password by this
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(user)
        console.log(user)
    }

    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <h2 className="heading2">Contact Us Form </h2>
                        <div className="container grid grid-two-cols">

                            <div className="img-image">

                                <img
                                    src="/images/support.png"
                                    alt="a girl in trying to do registration"
                                    width="500px" height="500px" />
                            </div>

                            <form onSubmit={handleSubmit} className="main-heading">
                                <div className="inlable">
                                    <label className="label" htmlFor="userName">username</label>
                                    <input type="text"
                                        name="username"
                                        placeholder="enter your username"
                                        id="username"
                                        required autoComplete="off"
                                        value={user.username}
                                        onChange={handleInput} />

                                    <label className="label" htmlFor="email">email</label>
                                    <input type="email"
                                        name="email"
                                        placeholder="enter your email"
                                        id="email"
                                        required autoComplete="off"
                                        value={user.email}
                                        onChange={handleInput} />

                                  

                                    <label className="label" htmlFor="message">Message</label>
                                    <textarea type="textarea"
                                        name="message"
                                        placeholder="enter your message"
                                        id="message"
                                        required autoComplete="off"
                                        value={user.message}
                                        onChange={handleInput}
                                        coloumn="30" 
                                        rows="5"/>
                                </div>
                                <button type="submit" className="Button">Send message</button>
                            </form>
                        </div>
                    </div>
                </main>
                    <scetion className="mb-3">

                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d336.5018746767327!2d78.47707640558632!3d17.40775027086939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb982d75cdbcd1%3A0x13696b7738cdf34a!2sJani%20Cafe!5e0!3m2!1sen!2sin!4v1717149982324!5m2!1sen!2sin"
                    alt="img not exist"
                     width="600"
                      height="450"
                        allowFullScreen=""
                         loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </scetion>
            </section>
        </>
    )
}
export default Contact