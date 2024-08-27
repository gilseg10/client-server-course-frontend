import React, { useState, useEffect } from "react"
import Navbar from "./mainPageComps/Navbar"
import Header from "./mainPageComps/Header"
import Table from "./mainPageComps/Table"

import { useNavigate } from 'react-router-dom';
import { verify_user, getAllCoinsFromServer } from "../utils/serverRoutes";
import TableLoader from "./mainPageComps/TableLoader";
import Footer from "./Footer"

export default function MainPage() {
  const [coins, setCoins] = useState([]);
  const [coinsAmount, setCoinsAmount] = useState(0);
  const [totalMarketCap, setTotalMarketCap] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    const checkToken = async () => {
      // check if token exist   
      const token = sessionStorage.getItem("token")
      try {
          const resp = await verify_user(token)
          // if user is not verified then - 1) No token provided; or 2) Invalid token
          if (resp.message !== "verified") {
              window.alert(resp.message)
              navigate('/')
          } 
      } catch (e) {
          console.log(e.message)
      }
    }
    checkToken()
  }, []);

  useEffect(() => {
    const getAllCoins = async () =>{
      const data = await getAllCoinsFromServer()
      setCoins(data.formatCoins)
      setCoinsAmount(data.formatCoins.length)
      setTotalMarketCap(data.formatTotalMC)
    }
    getAllCoins()
  }, []);

  return (
    <div className="gradient-bg">
      { coins.length != 0 ? 
        <div>
          <Navbar />
          <Header />
          <Table coins={coins} coinsAmount={coinsAmount} totalMarketCap={totalMarketCap} />
          <Footer />
        </div>
        :
        <div className="gradient-bg w-full h-screen flex items-center justify-center">
          <TableLoader />
        </div> 
      }
    </div>
  )
};
