import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';

import logo from '../../images/logo1.png'
import { FaUserEdit } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { signup_send } from "../utils/serverRoutes";


export default function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(true);

    const navigate = useNavigate();

    const showHidePassword = () => {
        setIsShowPassword(!isShowPassword)
        let password = document.getElementById("password")
        password.type == 'password' ? password.type = 'text' : password.type = 'password'
    }

    const perform_signup = async () => {
        if (username == '' || email == '' || password == '') {
            alert("Please fill email and password fields")
        } else {
            const data = await signup_send({username, password, email})
            if (data.status === "success") {
                sessionStorage.setItem("token", data.token)
                sessionStorage.setItem("username", data.username)
                sessionStorage.setItem("email", data.email)
                navigate('/mainPage')
            } else {
                console.log({status: data.status, message: data.error})
                alert(data.error)
            }
        }
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen gradient-bg">
            <div>
                <img src={logo} alt="logo" className='w-72'/>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-96 p-6 shadow-lg bg-white rounded-md">
                    <div className="flex items-center justify-center p-5 space-x-2">
                        <FaUserEdit fontSize={28}/>
                        <h1 className="text-3xl font-semibold">Sign up</h1>
                    </div>
                    <div className="mt-3">
                        <div className="flex items-center mb-2 space-x-1">
                            <FaUserCircle fontSize={20}/>
                            <label htmlFor="username" className="block text-base font-medium">Username</label> 
                        </div>
                        <input 
                            className="border outline-none rounded-md w-full text-base px-2 py-1 border-blue-500 hover:border-2"
                            id="username"
                            type="text"
                            placeholder="Enter Username"
                            onChange={e => setUsername(e.target.value)}
                        ></input>
                    </div>
                    <div className="mt-3">
                        <div className="flex items-center mb-2 space-x-1">
                            <MdOutlineAlternateEmail fontSize={20}/>
                            <label htmlFor="email" className="block text-base font-medium">Email</label> 
                        </div>
                        <input 
                            className="border outline-none rounded-md w-full text-base px-2 py-1 border-blue-500 hover:border-2"
                            id="email"
                            type="text"
                            placeholder="Enter Email"
                            onChange={e => setEmail(e.target.value)}
                        ></input>
                    </div>
                    <div className="mt-3">
                        <div className="flex items-center mb-2 space-x-1">
                            <RiLockPasswordFill fontSize={20}/>
                            <label htmlFor="password" className="block text-base font-medium">Password</label> 
                        </div>
                        <div className="flex items-center border justify-between rounded-md w-full text-base px-2 py-1 transition ease-in-out delay-150 border-blue-500 hover:border-2 duration-300">
                            <input
                                className="w-full outline-none" 
                                id="password"
                                type="password"
                                placeholder="Enter Password"
                                onChange={e => setPassword(e.target.value)}
                            ></input>
                            { isShowPassword ? <IoMdEyeOff className="cursor-pointer" onClick={showHidePassword} fontSize={18}/>
                             : <IoMdEye className="cursor-pointer" onClick={showHidePassword} fontSize={18} color="red"/>
                            }
                        </div>
                    </div>
                    <div>
                        <div className="flex mt-3">
                            <span 
                                className="text-indigo-700 font-semibold cursor-pointer hover:underline underline-offset-2 hover:font-bold"
                                onClick={() => navigate('/contact-us')}>Contact Us
                            </span>
                        </div>
                        <div className="flex justify-center mt-5">
                            <button 
                                className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"
                                type="submit"
                                onClick={perform_signup}
                            >Sign Up</button>
                        </div>
                        <div className="flex items-center justify-center mt-5 text-lg space-x-2">
                            <span>Already have an account?</span> 
                            <span 
                                className="text-indigo-700 font-semibold cursor-pointer hover:underline underline-offset-2 hover:font-bold"
                                onClick={() => navigate('/')}>Log in
                            </span>
                        </div>
                    </div>
                </div>        
            </div>
        </div>
      )
};
