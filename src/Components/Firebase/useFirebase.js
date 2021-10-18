import { getAuth, signInWithPopup, GoogleAuthProvider , signOut,onAuthStateChanged, } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './firebase.init';


initializeAuthentication();
const useFirebase = () =>{
    const auth = getAuth();
    const [users,setUsers] = useState({});
    const singInUsingGoogle=()=>{
        // const auth = getAuth();
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUsers(result.user);
        })
    }
    useEffect(()=>{
        const auth = getAuth();
        const unsbscribed = onAuthStateChanged(auth,user=>{
            if(user){
                setUsers(user)
            }
            else{
                setUsers({})
            }
        })
        return () => unsbscribed(); 
    },[])
   /*  const singInUsingEmailAndPassword=()=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
    } */
    const logOut = () =>{
        signOut(auth)
        .then(()=>{})
    }
    return{
        users,
        singInUsingGoogle,
        logOut
    }
}
export default useFirebase;