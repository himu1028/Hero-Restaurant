import React, { useEffect, useState } from 'react';


import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../src/Firebase/firebase.init';
import { AuthContext } from './AuthContext';
// import { auth } from '../firebase.init';



const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        })
        return()=>{
            unSubscribe();
        }
    })

const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

const SignInUser = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

const signOutUser = ()=>{
    return signOut(auth)
}

const provider = new GoogleAuthProvider();
const googleSignIn =()=>{
   return signInWithPopup(auth,provider)
}





    
const userInfo = {
    createUser,
    SignInUser,
    user,
    signOutUser,
    googleSignIn,
}






    return (
        <>
          <AuthContext value={userInfo}>
            {children}
            </AuthContext>  
        </>
    );
};

export default AuthProvider;