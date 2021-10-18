import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import useAuth from '../hooks/useAuth';
import './Login.css';
import initializeAuthentication from './../Firebase/firebase.init';

initializeAuthentication();
const Login = () => {
    const {singInUsingGoogle} = useAuth();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const auth = getAuth();
    const handelRegistration = e =>{
        console.log(email,password);
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
    }
    const handleEmail = e =>{
        setEmail(e.target.value)
    }
    const handlePassword = e =>{
        setPassword(e.target.value);
    }
    return( 
        <div id="singIn" className="shadow my-5 rounded m-auto text-center p-5">
            <h4>Log In</h4>
            <form onSubmit={handelRegistration}>
                <input onBlur={handleEmail} className="w-100 p-2 my-2 border rounded" type="Email" name="" placeholder="Email" required/><br />
                <input onBlur={handlePassword} className="w-100 p-2 my-2 border rounded" type="password" placeholder="Password" name=""  required/> <br />
                <input className="w-100 btn btn-warning fs-6 fw-bolder text-white my-2" type="submit"  value="Sing In" name="" id="" />
            </form>
             <br />
            <p> <strong>Or</strong> </p>
            <button onClick={singInUsingGoogle} className="w-100 btn btn-warning fs-6 fw-bolder text-white">Google Sing In</button>
        </div>
    );

};

export default Login;