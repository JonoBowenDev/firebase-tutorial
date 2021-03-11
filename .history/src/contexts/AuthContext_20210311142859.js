import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext(); 

export function useAuth() {
    return useContext(AuthContext); 
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(); 
    const [loading, setLoading] = useState(true); 

    const signUp = (email, password) => {
        auth.createUserWithEmailAndPassword(email, password); 
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setLoading(false); 
            setCurrentUser(user); 
        })

        return unsubscribe; 
    }, [])
    

    const value = {
        currentUser,
        signUp
    }
    
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
