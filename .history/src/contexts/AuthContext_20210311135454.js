import React from 'react'

export function useAuth() {
    return useContext(AuthContext); 
}

export function AuthProvider({ children }) {

    const 

    
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}
