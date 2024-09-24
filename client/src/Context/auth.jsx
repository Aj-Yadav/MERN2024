import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [service, setService] = useState([]);
  const AuthorizationToken = `Bearer ${token}`;
  // const API = "http://localhost:5000";
  const API = "https://mern-shield.onrender.com";

  const storeTokenInLS = (serviceToken) => {
    setToken(serviceToken);
    return localStorage.setItem("token", serviceToken);
  };

  let isLoggedIn = !!token;
  // console.log("is logged in ",isLoggedIn)
  //if token is "" then it taken false if their is any value in token is true

  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };
  useEffect(() => {
    userAuthentication();
    // console.log("i am form use Effect")
  }, []);
  const userAuthentication = async () => {
    try {
      const response = await fetch(`${API}/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: AuthorizationToken,
        },
      });
      // console.log("I am from useAuth",response)

      if (response.ok) {
        // console.log("response is ok");
        const data = await response.json();
        // console.log("user data of useAuthentication",data.userData);
        setUser(data.userData);
        setIsLoading(false);
      } else {
        console.log("error fetching user data");
        setIsLoading(false);
      }
    } catch (error) {
      console.log("usecontext", error);
    }
  };

  // console.log("form store",user)

  //serviceices List
  const getData = async () => {
    try {
      const response = await fetch(`${API}/api/data/service`, {
        method: "GET",
      });
      // if (Array.isArray(response.data)) {
      if (response.ok) {
        // console.log("ok started")
        // setLists(response.data);
        // console.log("ok ended")
        const data = await response.json();
        // console.log("data from auth",data)
        const message = data.msg;
        // console.log("resp of message",message)
        setService(message);
        // console.log("message data from auth after setservice",message)
      } else {
        console.error("unexpected response data", response.data);
      }
    } catch (error) {
      console.log(" serviceice list", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenInLS,
        LogoutUser,
        user,
        service,
        AuthorizationToken,
        API,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
