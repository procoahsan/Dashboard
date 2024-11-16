import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import Banner from '../partials/Banner';

import { ActivitySvg , VolumeSvg , GainerSvg , LoserSvg } from '../utils/Svgs';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const data = [
    {
      Title: 'Top 5 Social Activity',
      Icon: ActivitySvg,
      column: ['Token', 'Interactions'],
      data: [
        {
          name: 'Cardano',
          logo: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
          symbol: 'ADA',
          value: '5.06K',
          change: '+49.28%',
          time: "7d"
        },
       
        {
          name: 'Ethereum Classic',
          logo: 'https://cryptologos.cc/logos/ethereum-classic-etc-logo.png',
          symbol: 'ETC',
          value: '12.38K',
          change: '+9.28%',
          time: "7d"
        },
        {
          name: 'VeChain',
          logo: 'https://cryptologos.cc/logos/vechain-vet-logo.png',
          symbol: 'VET',
          value: '8.38K',
          change: '+7.28%',
          time: "7d"
        },
        {
          name: 'Stellar',
          logo: 'https://cryptologos.cc/logos/stellar-xlm-logo.png',
          symbol: 'XLM',
          value: '6.38K',
          change: '+6.28%',
          time: "7d"
        }
      ]
    },

    {
      Title: 'Top 5 Volume',
      Icon: VolumeSvg,
      column: ['Token', 'Volume'],
      data: [
        {
          name: 'Cardano',
          logo: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
          symbol: 'ADA',
          value: '5.06K',
          change: '+49.28%',
          time: "7d"
        },
       
        {
          name: 'Ethereum Classic',
          logo: 'https://cryptologos.cc/logos/ethereum-classic-etc-logo.png',
          symbol: 'ETC',
          value: '12.38K',
          change: '+9.28%',
          time: "7d"
        },
        {
          name: 'VeChain',
          logo: 'https://cryptologos.cc/logos/vechain-vet-logo.png',
          symbol: 'VET',
          value: '8.38K',
          change: '+7.28%',
          time: "7d"
        },
        {
          name: 'Stellar',
          logo: 'https://cryptologos.cc/logos/stellar-xlm-logo.png',
          symbol: 'XLM',
          value: '6.38K',
          change: '+6.28%',
          time: "7d"
        }
      ]
    },

    {
      Title: 'Top 5 Gainers',
      Icon: GainerSvg,
      column: ['Token', 'Total Gain'],
      data: [
        {
          name: 'Cardano',
          logo: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
          symbol: 'ADA',
          value: '5.06K',
          change: '+49.28%',
          time: "7d"
        },
       
        {
          name: 'Ethereum Classic',
          logo: 'https://cryptologos.cc/logos/ethereum-classic-etc-logo.png',
          symbol: 'ETC',
          value: '12.38K',
          change: '+9.28%',
          time: "7d"
        },
        {
          name: 'VeChain',
          logo: 'https://cryptologos.cc/logos/vechain-vet-logo.png',
          symbol: 'VET',
          value: '8.38K',
          change: '+7.28%',
          time: "7d"
        },
        {
          name: 'Stellar',
          logo: 'https://cryptologos.cc/logos/stellar-xlm-logo.png',
          symbol: 'XLM',
          value: '6.38K',
          change: '+6.28%',
          time: "7d"
        }
      ]
    },
      
      {
        Title: 'Top 5 Losers',
        Icon: LoserSvg,
        column: ['Token', 'Total Loss'],
        data: [
          {
            name: 'Cardano',
            logo: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
            symbol: 'ADA',
            value: '5.06K',
            change: '+49.28%',
            time: "7d"
          },
          
          {
            name: 'Ethereum Classic',
            logo: 'https://cryptologos.cc/logos/ethereum-classic-etc-logo.png',
            symbol: 'ETC',
            value: '12.38K',
            change: '+9.28%',
            time: "7d"
          },
          {
            name: 'VeChain',
            logo: 'https://cryptologos.cc/logos/vechain-vet-logo.png',
            symbol: 'VET',
            value: '8.38K',
            change: '+7.28%',
            time: "7d"
          },
          {
            name: 'Stellar',
            logo: 'https://cryptologos.cc/logos/stellar-xlm-logo.png',
            symbol: 'XLM',
            value: '6.38K',
            change: '+6.28%',
            time: "7d"
          }
        ]
      }

  ]

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              <div class="relative rounded-lg bg-[linear-gradient(135deg,var(--tw-gradient-stops))] w-full from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04] rounded-theme_radius p-5 mb-8">
                <div
                  class="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block"
                  aria-hidden="true"
                >
                  <svg
                    width="319"
                    height="198"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <path id="welcome-a" d="M64 0l64 128-64-20-64 20z"></path>
                      <path id="welcome-e" d="M40 0l40 80-40-12.5L0 80z"></path>
                      <path id="welcome-g" d="M40 0l40 80-40-12.5L0 80z"></path>
                      <linearGradient
                        x1="50%"
                        y1="0%"
                        x2="50%"
                        y2="100%"
                        id="welcome-b"
                      >
                        <stop stop-color="#A5B4FC" offset="0%"></stop>
                        <stop stop-color="#818CF8" offset="100%"></stop>
                      </linearGradient>
                      <linearGradient
                        x1="50%"
                        y1="24.537%"
                        x2="50%"
                        y2="100%"
                        id="welcome-c"
                      >
                        <stop stop-color="#4338CA" offset="0%"></stop>
                        <stop
                          stop-color="#6366F1"
                          stop-opacity="0"
                          offset="100%"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div class="flex items-center justify-between p-3">
                  <div className='w-96'>
                    <h1 class="text-md md:text-xl text-slate-800 dark:text-slate-100 font-bold mb-1">
                    Sing Up to AI Broker Tiers and enjoy all the perks
                  </h1>
                  <p class="dark:text-indigo-200 text-xs">
                  Unlock exclusive access to premium content, personalized insights, and unique perks by subscribing to AI Broker tiers now !
                  </p>
                  </div>
                  <button className='h-10 w-44 rounded-md text-sm bg-blue-500 text-white'>Sing Up Now</button>
                </div>
              </div>

              {/* Left: Title */}
              {/* <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Dashboard</h1>
              </div> */}

              {/* Right: Actions */}
              {/* <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"> */}
              {/* Filter button */}
              {/* <FilterButton align="right" /> */}
              {/* Datepicker built with flatpickr */}
              {/* <Datepicker align="right" /> */}
              {/* Add view button */}
              {/* <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                  <svg className="fill-current shrink-0 xs:hidden" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="max-xs:sr-only">Add View</span>
                </button>                 */}
              {/* </div> */}
            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              {/* Line chart (Acme Plus) */}
              {/* <DashboardCard01 /> */}
              {/* Line chart (Acme Advanced) */}
              {/* <DashboardCard02 /> */}
              {/* Line chart (Acme Professional) */}
              {/* <DashboardCard03 /> */}
              {/* Bar chart (Direct vs Indirect) */}
              {/* <DashboardCard04 /> */}
              {/* Line chart (Real Time Value) */}
              {/* <DashboardCard05 /> */}
              {/* Doughnut chart (Top Countries) */}
              {/* <DashboardCard06 /> */}
              {/* Table (Top Channels) */}
              {/* <DashboardCard07 /> */}
              {/* Line chart (Sales Over Time) */}
              {/* <DashboardCard08 /> */}
              {/* Stacked bar chart (Sales VS Refunds) */}
              {/* <DashboardCard09 /> */}
              {/* Card (Customers) */}
              {/* <DashboardCard10 /> */}
              {/* Card (Reasons for Refunds) */}
              {/* <DashboardCard11 /> */}
              {/* Card (Recent Activity) */}
              {/* <DashboardCard12 /> */}
              {/* Card (Income/Expenses) */}
              {data.map((item, index) => (
                <DashboardCard13 key={index} data={item} />
              ))}

              <DashboardCard10 />

            </div>
          </div>
        </main>

        <Banner />
      </div>
    </div>
  );
}

export default Dashboard;