import React from 'react'
import { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Banner from '../partials/Banner';
import TradingBotCard from '../components/TrainingBotCard';
import { ETHsvg, BTCsvg , USDTsvg } from '../utils/Svgs';


export default function Bot() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const bots = [
      {
        id: "1",
        tradingPair: "ETH/USDT",
        fill1: "#627EEA",
        fill2: "#26A17B",
        figure1: ETHsvg,
        figure2: USDTsvg,
        date: "21 Apr-2023 | 04:51",
        tradeRatio: {
          success: 30.6,
          failure: 69.4,
        },
        profitGained: 34.12,
        workingTime: "5h 23m",
        totalBalance: 4308.12,
        numberOfTrades: 373,
        percentageGain: 14.56,
        status: "Active",
        orders: 36,
        isOn: true,
        profitChartData: [
          { value: 30 },
          { value: 32 },
          { value: 31 },
          { value: 34 },
          { value: 33 },
          { value: 35 },
          { value: 34.12 },
        ],
        percentageChartData: [
          { value: 10 },
          { value: 12 },
          { value: 13 },
          { value: 11 },
          { value: 15 },
          { value: 14 },
          { value: 14.56 },
        ],
        market: [
          { dailyActiveUsers: 1200, fullyDilutedMarket: 1600 },
          { dailyActiveUsers: 1250, fullyDilutedMarket: 1850 },
          { dailyActiveUsers: 1300, fullyDilutedMarket: 1500 },
          { dailyActiveUsers: 1350, fullyDilutedMarket: 1550 },
          { dailyActiveUsers: 1400, fullyDilutedMarket: 1800 },
          { dailyActiveUsers: 1450, fullyDilutedMarket: 1750 },
          { dailyActiveUsers: 1500, fullyDilutedMarket: 1200 },
        ],
      },
      {
        id: "2",
        tradingPair: "ETH/BTC",
        fill1: "#627EEA",
        fill2: "#F7931A",
        figure1: ETHsvg,
        figure2: BTCsvg,
        date: "21 Apr-2023 | 05:10",
        tradeRatio: {
          success: 40.2,
          failure: 59.8,
        },
        profitGained: 42.56,
        workingTime: "6h 05m",
        totalBalance: 5150.23,
        numberOfTrades: 450,
        percentageGain: 17.65,
        status: "Active",
        orders: 48,
        isOn: true,
        profitChartData: [
          { value: 32 },
          { value: 34 },
          { value: 33 },
          { value: 36 },
          { value: 35 },
          { value: 37 },
          { value: 42.56 },
        ],
        percentageChartData: [
          { value: 12 },
          { value: 13 },
          { value: 14 },
          { value: 13 },
          { value: 16 },
          { value: 17 },
          { value: 17.65 },
        ],
        market: [
          { dailyActiveUsers: 1250, fullyDilutedMarket: 1700 },
          { dailyActiveUsers: 1300, fullyDilutedMarket: 1600 },
          { dailyActiveUsers: 1350, fullyDilutedMarket: 1800 },
          { dailyActiveUsers: 1400, fullyDilutedMarket: 1900 },
          { dailyActiveUsers: 1450, fullyDilutedMarket: 2000 },
          { dailyActiveUsers: 1500, fullyDilutedMarket: 2100 },
          { dailyActiveUsers: 1550, fullyDilutedMarket: 2200 },
        ],
      }
    ];
    
  return (
    <div className="flex h-screen overflow-hidden">
    {/* Sidebar */}
    <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

    {/* Content area */}
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      {/*  Site header */}
      <Header title="AI Trading Bots" sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <main className="grow p-6">
        <div className='flex items-center justify-between' >
          <span className='text-xl font-semibold' >AI Trading Strategies</span>
          <div className='flex items-center gap-3'>
            <button className='bg-white h-10 font-light rounded-lg hover:bg-blue-500 hover:text-white w-24' >All Bots</button>
            <button className=' h-10 font-light rounded-lg bg-blue-500 text-white w-32' >Add Strategy</button>

          </div>
        </div>
        
        <div className='flex items-center flex-col justify-center py-6 gap-3 '>
          {bots.map((bot) => (
            <TradingBotCard key={bot.id} bot={bot} />
          ))}

        </div>
        
      </main>

     
    </div>
    </div>
  )
}
