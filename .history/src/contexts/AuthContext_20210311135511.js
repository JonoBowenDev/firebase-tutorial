import React, { useContext } from 'react'


export function useAuth() {
    return useContext(AuthContext); 
}

export function AuthProvider({ children }) {
    
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}
