import React, { useState } from "react";
import "./Register.css";
const Register = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
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
        // alert(user)
        // console.log(user)
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
                                <h2 className="heading2">Registration Form <hr className="horizontal-line" /></h2>
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

                                    <label className="label" htmlFor="phone">phone</label>
                                    <input type="number"
                                        name="phone"
                                        placeholder="enter your number"
                                        id="phone"
                                        required autoComplete="off"
                                        value={user.phone}
                                        onChange={handleInput} />

                                    <label className="label" htmlFor="password">password</label>
                                    <input type="text"
                                        name="password"
                                        placeholder="enter your password"
                                        id="password"
                                        required autoComplete="off"
                                        value={user.password}
                                        onChange={handleInput} />
                                </div>
                                <button type="submit" className="Button">Register</button>
                            </form>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}
export default Register