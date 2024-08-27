import React, { useState } from "react"
import ContactusRight from "./ContactusRight"
import { useNavigate } from 'react-router-dom';

import { MdConnectWithoutContact } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { MdOutlineTopic } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import logo from '../../images/logo1.png'

import { contact_send } from "../utils/serverRoutes";

export default function Contactus() {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('General Inquiry');
    const [message, setMessage] = useState('');

    const performSubmit = async (event) => {
        event.preventDefault();
        const contact = { fullName: name, email, subject, message}
        console.log(contact)
        if (name == '' || email == '' || message == '') {
            alert("Please fill name, email and message fields")
        } else {
            const data = await contact_send(contact)
            if (data.status === "success") {
                sessionStorage.setItem("contact_info", JSON.stringify(data))
                alert("Contact has been sent")
                window.location.reload()
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
        <div className="flex md:flex-row flex-col justify-center items-center w-full max-w-5xl p-4 mx-2 shadow-lg bg-white rounded-md">
            <div className="border lg:w-2/3 md:w-full w-full sm:w-4/5 mb-4 lg:mb-0 p-4">
                <div className="flex items-center justify-center p-5 space-x-2">
                    <MdConnectWithoutContact fontSize={42}/>
                    <h1 className="text-3xl font-semibold">Contact Us</h1>
                </div>
                <form onSubmit={performSubmit}>
                    <div className="mt-4 flex flex-col items-center">
                        <div className="flex items-center mb-2 space-x-1 w-3/4 justify-start">
                            <GoPerson fontSize={20}/>
                            <label htmlFor="name" className="block text-base font-medium">Name</label> 
                        </div>
                        <input 
                            className="border outline-none rounded-md w-3/4 text-base px-2 py-1 border-blue-500 hover:border-2"
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            required
                            onChange={e => setName(e.target.value)}
                        ></input>
                    </div>
                    <div className="mt-4 flex flex-col items-center">
                        <div className="flex items-center mb-2 space-x-1 w-3/4 justify-start">
                            <MdOutlineAlternateEmail fontSize={20}/>
                            <label htmlFor="email" className="block text-base font-medium">Email</label> 
                        </div>
                        <input 
                            className="border outline-none rounded-md w-3/4 text-base px-2 py-1 border-blue-500 hover:border-2"
                            id="email"
                            type="text"
                            placeholder="Enter your email"
                            required
                            onChange={e => setEmail(e.target.value)}
                        ></input>
                    </div>
                    <div className="mt-4 flex flex-col items-center">
                        <div className="flex items-center mb-2 space-x-1 w-3/4 justify-start">
                            <MdOutlineTopic fontSize={20}/>
                            <label htmlFor="email" className="block text-base font-medium">Subject</label> 
                        </div>
                        <div className="border rounded-md w-3/4 text-base px-2 py-1 border-blue-500 hover:border-2">
                            <select id="subject" className="w-full outline-none" name="subject" 
                            required 
                            onChange={e => setSubject(e.target.value)}
                            defaultValue="General Inquiry">
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Support">Support</option>
                            <option value="Sales">Sales</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-4 flex flex-col items-center">
                        <div className="flex items-center mb-2 space-x-1 w-3/4 justify-start">
                            <FaRegMessage fontSize={20}/>
                            <label htmlFor="message" className="block text-base font-medium">Message</label> 
                        </div>
                        <textarea 
                            className="border outline-none rounded-md w-3/4 resize-none text-base px-2 py-1 border-blue-500 hover:border-2" 
                            id="message" name="message" rows="4" 
                            required
                            onChange={e => setMessage(e.target.value)}>    
                        </textarea>
                    </div>
                    <div className="mt-4 flex flex-col items-center">
                        <button className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-3/4 rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"
                        type="submit">
                        Submit
                        </button>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex items-center justify-center mt-5 text-lg space-x-2">
                            <span>Need an account?</span> 
                            <span 
                                className="text-indigo-700 font-semibold cursor-pointer hover:underline underline-offset-2 hover:font-bold"
                                onClick={() => navigate('/signup')}>Sign Up
                            </span>
                        </div>
                        <div className="flex items-center justify-center mt-5 text-lg space-x-2">
                            <span>Already have an account?</span> 
                            <span 
                                className="text-indigo-700 font-semibold cursor-pointer hover:underline underline-offset-2 hover:font-bold"
                                onClick={() => navigate('/')}>Log in
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            
            {/* Right Panel Section  */}
            <div className="flex flex-col justify-between items-center w-1/3">
                <ContactusRight />
            </div>     
        </div>  
    </div>
  )
};
