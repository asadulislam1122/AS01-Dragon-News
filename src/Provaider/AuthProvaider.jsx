import React, { Children, createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Fairbase/Fairbase.init";
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(loading, user);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // update user
  const updateUser = (updateddata) => {
    return updateProfile(auth.currentUser, updateddata);
  };
  // sign in
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // log out

  const logOut = () => {
    return signOut(auth);
  };
  // onAuthStangeChange
  useEffect(() => {
    const unsubscrible = onAuthStateChanged(auth, (createUser) => {
      setUser(createUser);
      setLoading(false);
    });
    return () => {
      unsubscrible();
    };
  }, []);
  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    loading,
    setLoading,
    updateUser,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvaider;
