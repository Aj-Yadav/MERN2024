import { createContext , useContext, useState} from "react";// this line is not required if we use React.createContext(); while exporting AuthContext

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [token, setToken] = useState(localStorage.getItem("token"));
    
    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem("token",serverToken);
    };

    
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem('token')
    }
    
    let isLoggedIn =!!token; 
    // console.log("is logged in ",isLoggedIn)
    //if token is "" then it taken false if their is any value in token is true
    return (
        <AuthContext.Provider value={{isLoggedIn, storeTokenInLS, LogoutUser}}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if(!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}