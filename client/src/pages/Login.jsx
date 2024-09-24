import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/auth";
import { toast } from "react-toastify";
// import { useAuth } from "../Context/auth";

// import "./Login.css";
// const URL = `http://localhost:5000/api/auth/login`;
const Login = () => {
  const { API } = useAuth();
  const URL = `${API}/api/auth/login`;
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    // console.log(e)
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
      const response = await fetch(URL, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const res_login = await response.json();
      console.log("login", res_login);

      if (response.ok) {
        storeTokenInLS(res_login.token);

        setUser({
          email: "",
          password: "",
        });
        navigate("/");
      } else {
        toast.error(res_login.message);
      }
    } catch (error) {
      console.log("client/login", error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-login">
            <div className="container grid grid-two-cols">
              <div className="login-image">
                <img
                  src="/images/register.png"
                  alt="a girl in trying to do login"
                  width="500px"
                  height="500px"
                />
              </div>

              <form onSubmit={handleSubmit} className="main-heading">
                <h2 className="heading2">Login Form </h2>

                <div className="inlable">
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
                  Login now
                </button>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
export default Login;
