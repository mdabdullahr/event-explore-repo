
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, serLoader] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser =  (email, password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    const updateUser = (updateData) =>{
        return updateProfile(auth.currentUser, updateData);
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return ()=> unSubscribe();
    },[])

    const authData = {
        createUser,
        loginUser,
        updateUser,
        user,
        setUser,
        loader,
        serLoader,
    };

    return(
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;