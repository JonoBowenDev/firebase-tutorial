import React from 'react'

export function AuthProvider({ children }) {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}
