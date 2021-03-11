import React from 'react'

export function AuthProvider({ children }) {

    export function useAuth() {
        return useContext(AuthContext); 
    }
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}
