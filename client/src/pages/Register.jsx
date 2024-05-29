import React,{useState} from "react";
import "./Register.css";
const Register = () => {
    const [user, setUser]=useState({
        username:"",
        email:"",
        phone:"",
        password:"",
    });
    return(
    <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img 
                            src="/images/register.png"
                            alt="a girl in trying to do registration"
                            width="500px" height="500px"/>
                        </div>
                        {/* <div >Registration form</div> */}
                        {/* <br /> */}
                        <form className="main-hedding">
                            <h2 className="heading2">Registration Form</h2>
                            <div className="inlable">
                                <label className="label" htmlFor="userName">username</label>
                                <input  type="text"
                                        name="username"
                                        placeholder="enter your username"
                                        id="username"
                                        required autoComplete="off"/>

                                <label className="label" htmlFor="email">email</label>
                                <input type="email" 
                                        name="email"
                                        placeholder="enter your email"
                                        id="email"
                                        required autoComplete="off"/>

                                <label className="label" htmlFor="phone">phone</label>
                                <input type="number"
                                        name="phone"
                                        placeholder="enter your number"
                                        id="phone"
                                        required autoComplete="off" />

                                <label className="label" htmlFor="password">password</label>
                                <input type="text"
                                        name="password"
                                        placeholder="enter your password"
                                        id="password"
                                        required autoComplete="off" />
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </section>
    </>
)}
export default Register