import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/auth";
import { toast } from "react-toastify";
// import { useAuth } from "../Context/auth";

// import "./Register.css";
// const URL = `http://localhost:5000/api/auth/register`;
const Register = () => {
  const { API } = useAuth();
  const URL = `${API}/api/auth/register`;
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const { storeTokenInLS } = useAuth();
  const navigate = useNavigate();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(user);
      const response = await fetch(URL, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      console.log(response);

      const res_data = await response.json();
      console.log("Register page frontend", res_data);
      if (response.ok) {
        console.log("sent form context to reg", storeTokenInLS(res_data.token));

        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/login");
        storeTokenInLS(res_data.token);
      } else {
        toast.error(res_data.message ? res_data.message : res_data.message);
      }
    } catch (error) {
      console.log("register", error);
    }
  };

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
                  width="500px"
                  height="500px"
                />
              </div>

              <form onSubmit={handleSubmit} className="main-heading">
                <h2 className="heading2">Registration Form </h2>
                <div className="inlable">
                  <label className="label" htmlFor="userName">
                    username
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="enter your username"
                    id="username"
                    required
                    autoComplete="off"
                    value={user.username}
                    onChange={handleInput}
                  />

                  <label className="label" htmlFor="email">
                    email
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="enter your email"
                    id="email"
                    required
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                  />

                  <label className="label" htmlFor="phone">
                    phone
                  </label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="enter your number"
                    id="phone"
                    required
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInput}
                  />

                  <label className="label" htmlFor="password">
                    password
                  </label>
                  <input
                    type="text"
                    name="password"
                    placeholder="enter your password"
                    id="password"
                    required
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>
                <button type="submit" className="Button">
                  Register
                </button>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
export default Register;
