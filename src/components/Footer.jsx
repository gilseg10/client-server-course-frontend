import logo from '../../images/logo1.png'
import { useNavigate } from 'react-router-dom';


export default function Footer() {
    const navigate = useNavigate();

  return (
    <div className='w-full flex md:justify-center justify-between items-center flex-col p-4'>
      <div className='flex justify-center items-center flex-col mt-5'>
        <img src={logo} alt='logo' className='w-48'/>
        <span 
            className="text-white font-semibold cursor-pointer hover:underline underline-offset-2 hover:font-bold"
            onClick={() => navigate('/contact-us')}>Contact Us
        </span>
      </div>
      <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5'/>
      <div className='sm:w-[90%] w-full flex justify-between items-center mt-3'>
        <p className='text-white text-sm text-center'>@MarketPath 2024</p>
        <p className='text-white text-sm text-center'>All rights reserved</p>
      </div>
    </div>
  )
};