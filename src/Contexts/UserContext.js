import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from "firebase/auth";
import app from "../Firebase/firebase.config"

export const AuthContext = createContext();

const UserContext = ({ children }) => {

    const auth = getAuth(app);

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // register new user
    const registerEmailPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserName = name => {
        setLoading(true);
        return updateProfile(auth.currentUser, name);
    }

    // google sign in
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // log in email password
    const loginEmailPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => { })
            .catch(err => console.error(err))
    }

    // effect for auth changed
    useEffect(() => {
        const authChanged = onAuthStateChanged(auth, current => {
            setUser(current);
            setLoading(false);
        })
        return () => authChanged();
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            registerEmailPassword,
            updateUserName,
            googleSignIn,
            loginEmailPassword,
            logOut,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;