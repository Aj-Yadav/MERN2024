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
                        <div className="container grid grid-two-cols">
                            <div className="img-image">
                                <img
                                    src="/images/register.png"
                                    alt="a girl in trying to do registration"
                                    width="500px" height="500px" />
                            </div>

                            <form onSubmit={handleSubmit} className="main-heading">
                                <h2 className="heading2">Contact Us Form <hr className="horizontal-line" /></h2>
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
                                    <input type="text"
                                        name="message"
                                        placeholder="enter your message"
                                        id="message"
                                        required autoComplete="off"
                                        value={user.message}
                                        onChange={handleInput} />
                                </div>
                                <button type="submit" className="Button">Send message</button>
                            </form>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}
export default Contact