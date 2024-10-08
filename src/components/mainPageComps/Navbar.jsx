import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

import logo from '../../../images/logo1.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const NavbarItem = ({ title, classProps }) => {
  const navigate = useNavigate();

  let route = '/'
  if (title === "Contact Us") {
    route = '/contact-us'
  }
  return (
  <li className={`bg-[#178182] py-2 px-7 mx-4 font-medium rounded-full cursor-pointer hover:bg-[#1a9698] ${classProps}`}
  onClick={() => navigate(route)}>
    {title}
  </li>
  )
}

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='w-full flex md:justify-center justify-between items-center p-4 px-0'>
      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
        <img src={logo} alt="logo" className='w-64'/>
      </div>
      <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
        {["Contact Us", "Log Out"].map((item, index) => {
          return <NavbarItem key={item+index} title={item} />
        })}
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
              flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in 
            "
          >
            <li className='text-xl w-full my-2'>
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["Contact Us", "Log Out"].map(
              (item, index) => <NavbarItem key={item+index} title={item} classProps="my-2 text-lg" />
            )}
          </ul>
        )}
      </div>
    </nav>
  )
};
