import React, { useEffect, useState } from "react";
import "./Contact.css";
import { useAuth } from "../Context/auth";
const URL = "http://localhost:5000/api/form/contact";

const Contact = () => {
         const defaultContactFormData = {
             username: "",
             email: "",
             message: "",
           };
        const [contacts, setContacts] = useState(defaultContactFormData);
    const [userdata, setuserData ] = useState(true);
    const  {user}  = useAuth();
    // console.log("data",data)
    // console.log("user",user)
 useEffect(() =>{
     if(userdata && user){
         // console.log("started")
         setContacts({
             username:user.username,
             email:user.email,
             message:"",
         });
         // console.log("dataSeted ",data)
         setuserData(false)
     }

 },[contacts])
    // console.log("data",data)


    const handleInput = (e) => {
        // console.log(e)
        let name = e.target.name;
        let value = e.target.value;
        setContacts({
            ...contacts,
            [name]: value,//name is daynamic so that we can use different names like email, phone , password by this
        });
      const contactData = contacts;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("this is user",contacts);
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"},
                body: JSON.stringify(contacts)
            })
            console.log("from contact response",response)
            if (response.ok){
            console.log('response is OK');
            //    setContacts(defaultContactFormData);
            // handleInput()
            // setDefaultContact(contactData)
            setContacts({
                username:user.username,
                email:user.email,
                message:"",
            });

            
            }else{
                console.log("some thing went wrong")
                // alert("some thing went wrong")
            }
          
            
        } catch (error) {
            console.log("contact front end error".error);
        }
       
    }
    // const handleContactForm= async (e) => {
    //     epreventDefault();
    // }
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
                                    <label className="label" htmlFor="username">username</label>
                                    <input type="text"
                                        name="username"
                                        placeholder="enter your username"
                                        id="username"
                                        required autoComplete="off"
                                        value={contacts.username}
                                        onChange={handleInput} />

                                    <label className="label" htmlFor="email">email</label>
                                    <input type="email"
                                        name="email"
                                        placeholder="enter your email"
                                        id="email"
                                        required autoComplete="off"
                                        value={contacts.email}
                                        onChange={handleInput} />

                                  

                                    <label className="label" htmlFor="message">Message</label>
                                    <textarea type="textarea"
                                        name="message"
                                        placeholder="enter your message"
                                        id="message"
                                        required autoComplete="off"
                                        value={contacts.message}
                                        onChange={handleInput}
                                        coloumn="30" 
                                        rows="5"/>
                                </div>
                                <button type="submit" className="Button">Send message</button>
                            </form>
                        </div>
                    </div>
                </main>
                    <section className="mb-3">

                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d336.5018746767327!2d78.47707640558632!3d17.40775027086939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb982d75cdbcd1%3A0x13696b7738cdf34a!2sJani%20Cafe!5e0!3m2!1sen!2sin!4v1717149982324!5m2!1sen!2sin"
                    alt="img not exist"
                     width="600"
                      height="450"
                        allowFullScreen=""
                         loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </section>
            </section>
        </>
    )
}
export default Contact; 