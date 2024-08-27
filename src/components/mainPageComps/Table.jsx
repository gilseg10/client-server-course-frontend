import React, { useState, useEffect } from "react"
import DataTable, { createTheme } from "react-data-table-component"
import tableStyle from "../../utils/tableStyles"
import TradingViewWidget from "./TradingViewWidget";

createTheme('dark', {
  background: {
    default: 'transparent',
  },
});

export default function Table({coins, coinsAmount, totalMarketCap}) {
  // const [coins, setCoins] = useState([]);
  // const [coinsAmount, setCoinsAmount] = useState(0);
  // const [totalMarketCap, setTotalMarketCap] = useState('');

  const columns = [
    {
        name: 'Rank',
        selector: row => row.rank,
        center: true,
        hide: 599,
        compact: true
    },
    {
        name: 'Name',
        selector: row => (
          <div className='md:text-base' style={{ display: 'flex', alignItems: 'center' }}>
            <img src={row.logo} alt={`${row.name} logo`} className="md:w-8 w-4 md:mr-8 mr-2"/>
            {`${row.name} (${row.symbol})`}
          </div>
        ),
        sortable: true,
        grow: 2,
        compact: true,
        minWidth: '25%'
    },
    {
        // market_cap field (type number for sorting) and market_cap_toShow (for presenting in cell)
        name: 'MarketCap',
        selector: row => (
          <div className='md:text-base'>
            {`${row.market_cap_toShow}`}
          </div>
        ),
        sortable: true,
        sortFunction: (a, b) => a.market_cap - b.market_cap,
        center: true,
        hide: 599,
        compact: true,
        minWidth: '25%'
    },
    {
        // price field (type number for sorting) and price_toShow (for presenting in cell)
        name: 'Price',
        selector: row => (
          <div className='md:text-base'>
            {`${row.price_toShow}`}
          </div>
        ),
        sortFunction: (a, b) => a.price - b.price,
        sortable: true,
        center: true,
        compact: true
    },
    {
        // today field (type number for sorting) and today_toShow (for presenting in cell)
        name: 'Today',
        selector: row => {
          const color = row.today_toShow.startsWith('+') ? 'green' : 'red';
          return (
              <div className='md:text-base' style={{ color: color }}>
                  {row.today_toShow}
              </div>
          );
        },
        sortFunction: (a, b) => a.today - b.today,
        sortable: true,
        center: true,
        compact: true
    },
    {
        name: (
          <div className="flex flex-col justify-center items-center">
              <span>Price (30 days)</span>
              <span className="text-sm">Graphs from TradingView</span>
          </div>
        ),
        selector: row => {
          return <TradingViewWidget key={row.widgetSymbol} symbol={row.widgetSymbol}/>
        },
        sortable: true,
        center: true,
        hide: 599,
        compact: true,
        minWidth: '25%'
    }
  ]
  
  // useEffect(() => {
  //   const getAllCoins = async () =>{
  //     const { data } = await axios.get(COINS_URL)
  //     setCoins(data.formatCoins)
  //     setCoinsAmount(data.formatCoins.length)
  //     setTotalMarketCap(data.formatTotalMC)
  //   }
  //   getAllCoins()
  // }, []);
  
  return (
    <div>
      <h1 className="text-xl text-center sm:text-lg text-cyan-800 py-2 flex mf:flex-row flex-col items-center justify-center space-x-4">
        <div>
          Crypto Currency:
          <span className="font-bold"> {coinsAmount}</span>
        </div>
        <div>
          Total Market Cap:
          <span className="font-bold"> {totalMarketCap}</span>
        </div>
      </h1>

      <div className="md:p-10 md:px-20 py-12 px-4 md:mx-20">
        <DataTable
          columns={columns}
          customStyles={tableStyle}
          theme="dark"
          data={coins}
          pagination
        ></DataTable>
      </div>
    </div>
  )
};
