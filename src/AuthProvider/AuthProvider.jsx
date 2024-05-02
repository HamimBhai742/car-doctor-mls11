import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import app from '../FireBaseConfig/FirebaseConfig';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const auth = getAuth(app)
    const sinUpUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userInfo = {
        user,
        sinUpUser,
        logInUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;