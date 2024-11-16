import React from 'react';

function DashboardCard13({data}) {
  return (
    <div className="col-span-full xl:col-span-3 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 flex items-center gap-3 py-4 border-b border-gray-100 dark:border-gray-700/60">

      <data.Icon />
      
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Top 5 Social Activity
        </h2>
      </header>
      <div className="p-3 h-80 overflow-auto">
        <header className="text-xs uppercase flex justify-between text-black dark:text-white  dark:bg-opacity-50 rounded-sm font-semibold p-2">
          {
            data.column.map((column, index) => (
              <span>{column}</span>
            ))
          }
        </header>

        <ul className="my-1">
          {
            data.data.map((item, index) => (
              <li className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <img
                src={item.logo}
                alt="Cardano"
                className="w-8 h-8 rounded-full mr-3"
              />
              <div>
                <div className="font-medium text-gray-800 dark:text-gray-100">
                  {item.name}
                </div>
                <div className="text-xs text-gray-500">{item.symbol}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-gray-800 dark:text-gray-100">
               {item.value}
              </div>
              <span className='gap-2 flex'>
              <span className=" text-[10px] text-black bg-slate-200 font-normal p-0.5">
                {item.time}
              </span>
                <span className="text-xs text-green-500">
                  {item.change}
                </span>
              </span>
              
            </div>
          </li>
             
            ))
          }

        </ul>

          
        {/* <ul className="my-1"> */}
          {/* Cardano */}
          {/* <li className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <img
                src="https://cryptologos.cc/logos/cardano-ada-logo.png"
                alt="Cardano"
                className="w-8 h-8 rounded-full mr-3"
              />
              <div>
                <div className="font-medium text-gray-800 dark:text-gray-100">
                  Cardano
                </div>
                <div className="text-xs text-gray-500">ADA</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-gray-800 dark:text-gray-100">
                5.06K
              </div>
              <span className='gap-2 flex'>
              <span className=" text-[10px] text-black bg-slate-200 font-normal p-0.5">24hr</span>
                <span className="text-xs text-green-500">+49.28%</span>
              </span>
              
            </div>
          </li> */}
         
          {/* Ethereum Classic */}
          {/* <li className="flex justify-between items-center py-1">
            <div className="flex items-center">
              <img
                src="https://cryptologos.cc/logos/ethereum-classic-etc-logo.png"
                alt="Ethereum Classic"
                className="w-8 h-8 rounded-full mr-3"
              />
              <div>
                <div className="font-medium text-gray-800 dark:text-gray-100">
                  Ethereum Classic
                </div>
                <div className="text-xs text-gray-500">ETC</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-gray-800 dark:text-gray-100">
                256
              </div>
              <span className='gap-2 flex'>
              <span className=" text-[10px] text-black bg-slate-200 font-normal p-0.5">24hr</span>
                <span className="text-xs text-green-500">+49.28%</span>
              </span>
            </div>
          </li> */}
          {/* Kava */}
          {/* <li className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <img
                src="https://cryptologos.cc/logos/kava-kava-logo.png"
                alt="Kava"
                className="w-8 h-8 rounded-full mr-3"
              />
              <div>
                <div className="font-medium text-gray-800 dark:text-gray-100">
                  Kava
                </div>
                <div className="text-xs text-gray-500">KAVA</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-gray-800 dark:text-gray-100">
                64
              </div>
              <span className='gap-2 flex'>
              <span className=" text-[10px] text-black bg-slate-200 font-normal p-0.5">24hr</span>
                <span className="text-xs text-green-500">+49.28%</span>
              </span>
            </div>
          </li> */}
          {/* Monero */}
          {/* <li className="flex justify-between items-center py-2">
            <div className="flex items-center">
              <img
                src="https://cryptologos.cc/logos/monero-xmr-logo.png"
                alt="Monero"
                className="w-8 h-8 rounded-full mr-3"
              />
              <div>
                <div className="font-medium text-gray-800 dark:text-gray-100">
                  Monero
                </div>
                <div className="text-xs text-gray-500">XMR</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-gray-800 dark:text-gray-100">
                1.99K
              </div>
              <span className='gap-2 flex'>
              <span className=" text-[10px] text-black bg-slate-200 font-normal p-0.5">24hr</span>
                <span className="text-xs text-green-500">+49.28%</span>
              </span>
            </div>
          </li> */}
        {/* </ul> */}
      </div>
    </div>
  );
}

export default DashboardCard13;
