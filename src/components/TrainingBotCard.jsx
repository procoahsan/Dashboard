import React from "react";
import { useState } from "react";
import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";

export default function TradingBotCard({ bot }) {
  const [isOn, setIsOn] = useState(true); // State for the toggle

  
  

 

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 p-2 rounded shadow">
          <p className="text-sm">{`${payload[0].value.toFixed(2)}%`}</p>
        </div>
      );
    }
    return null;
  };

  const Tooltipline = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white text-xs h-12 border flex flex-col border-gray-200 p-2 rounded shadow">
          <span>Daily Active User: {payload[0].value}</span>
          <span>Fully Diluted Market: {payload[1].value}</span>

        </div>
      );
    }
    return null;
  };

  const CustomSwitch = ({ checked, onToggle }) => (
    <div
      className={`w-20 h-8 flex items-center rounded-md p-1 cursor-pointer ${
        checked ? "bg-green-500" : "bg-red-500"
      }`}
      onClick={onToggle} // Handle the toggle click
    >
      {checked ? (
        <>
          <span className="text-xs font-bold text-white p-2">ON</span>
          <div
            className="bg-white w-6 h-6 rounded-md shadow-md transform duration-1000 ease-in-out ml-auto"
          />
        </>
      ) : (
        <>
          <div
            className="bg-white w-6 h-6 rounded-md shadow-md transform duration-1000 ease-in-out mr-auto"
          />
          <span className="text-xs font-bold text-gray-500 ml-auto p-2">OFF</span>
        </>
      )}
    </div>
  );
  
  
  

  return (
    <div className="w-full max-w-full bg-white dark:bg-slate-700 shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4 px-2">
          <div>
            <h2 className="text-xl font-semibold dark:text-white">Bot {bot.id}</h2>
            {/* <div className="flex flex-col items-start space-x-0">
              <div className="flex ">
                <div className="h-6 w-6 rounded-full bg-blue-500" />
                <div className="h-6 w-6 rounded-full bg-green-500" />
                <span className="text-sm text-gray-600 px-1">{bot.tradingPair}</span>

              </div>
              <div>
              <span className="text-xs text-gray-400">{bot.date}</span>
              </div>
              
            </div> */}
          </div>
          {/* <CustomSwitch checked={bot.isOn} /> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          <div>
            <div className="flex flex-col gap-5 items-start px-2">
              <div className="flex flex-col ">
                <div className="flex flex-row">
                <bot.figure1 />
                <bot.figure2 />
                <span className="text-sm text-gray-600 px-1 dark:text-white">
                  {bot.tradingPair}
                </span>
                </div>
                
               
                <div>
                <span className="text-xs text-gray-400 dark:text-white">{bot.date}</span>
              </div>
              </div>
              
              <ResponsiveContainer width="100%" height={30}>
                <LineChart data={bot.market}>
                  <Line
                    type="monotone"
                    dataKey="dailyActiveUsers"
                    stroke={bot.fill1}
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="fullyDilutedMarket"
                    stroke={bot.fill2}
                    strokeWidth={2}
                    dot={false}
                  />
                  <Tooltip content={<Tooltipline />} />
                </LineChart>
                {/* <LineChart data={bot.fullyDilutedMarket}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#ef4444"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Tooltip content={<CustomTooltip />} />
                </LineChart> */}
              </ResponsiveContainer>
            </div>
          </div>

          <div className="flex gap-2  flex-col">
            <h3 className="text-sm text-gray-500 dark:text-white">Trade Ratio</h3>
            <div className="flex justify-between">
              <span className="text-xs  text-green-500">
                {bot.tradeRatio.success}%
              </span>
              <span className="text-xs  text-red-500">
                {bot.tradeRatio.failure}%
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <div className="h-1 flex-grow rounded-full overflow-hidden bg-red-500">
                <div
                  className="h-full bg-green-500"
                  style={{ width: `${bot.tradeRatio.success}%` }}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm text-gray-500 dark:text-white">Number of trades</h3>
              <p className="text-sm font-medium dark:text-white">{bot.numberOfTrades}</p>
            </div>
          </div>

          <div className="flex gap-2  flex-col">
            <h3 className="text-sm text-gray-500 dark:text-white">Profit gained</h3>
            <div className="flex items-start space-x-2">
              <span className="text-sm font-medium text-green-500">
                +{bot.profitGained}%
              </span>
              <ResponsiveContainer width="50%" height={32}>
                <LineChart data={bot.profitChartData}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#22c55e"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Tooltip content={<CustomTooltip />} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <h3 className="text-sm text-gray-500 dark:text-white">Percentage gain</h3>
            <div className="flex items-start space-x-2">
              <span className="text-sm font-medium text-red-500">
                -{bot.percentageGain}%
              </span>
              <ResponsiveContainer width="50%" height={32}>
                <LineChart data={bot.percentageChartData}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#ef4444"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Tooltip content={<CustomTooltip />} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="flex gap-2  flex-col">
            <h3 className="text-sm text-gray-500 dark:text-white">Working time</h3>
            <p className="text-sm font-normal dark:text-white">{bot.workingTime}</p>

            <h3 className="text-sm text-gray-500 dark:text-white">Status</h3>
            <span className=" text-xs font-semibold w-fit text-green-500  rounded-full">
              {bot.status}
            </span>
          </div>

          <div className="flex gap-2  flex-col">
            <h3 className="text-sm text-gray-500 dark:text-white">Total Balance</h3>
            <p className="text-sm font-normal dark:text-white">{bot.totalBalance}</p>

            <h3 className="text-sm text-gray-500 dark:text-white">Orders</h3>
            <p className="text-sm font-normal dark:text-white">{bot.orders}</p>

           
          </div>

          <div className="flex justify-between  flex-col">
          <CustomSwitch
              checked={isOn}
              onToggle={() => setIsOn(!isOn)} // Toggle the state
            />

            <div className="flex flex-col gap-1">
              <span className="text-sm dark:text-white">Exchanges</span>
              <div className="flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-6 w-6"><g fill="none"><circle cx="16" cy="16" r="16" fill="#E756CC"></circle><path fill="#FFF" d="M12.77 16.533c.095.225.19.448.29.67.091.211.188.42.281.63l.214.488c.074.167.152.334.228.5l.187.42.286.644c.168.37.33.742.495 1.113.2.439.386.883.59 1.32.248.499.428 1.021.653 1.528.225-.61.471-1.2.743-1.791.169-.372.33-.747.5-1.12.133-.294.259-.593.39-.89.13-.292.265-.583.39-.876l.13-.281c.073-.164.145-.328.219-.491.074-.167.146-.335.221-.501.115-.253.227-.508.34-.763a14.4 14.4 0 0 0 .258-.599c-2.138-.003-4.277-.003-6.415 0zm7.718-2.84H11.5l.938 2.253h7.017l1.032-2.254zm6.642-2.105c.22.533.394 1.083.532 1.642a10.487 10.487 0 0 0-1.867-.139c-.477-.008-.962.045-1.436 0l-.04-.163c.16-.217.367-.382.594-.526.666-.42 1.432-.724 2.217-.814m-15.216-6.5c1.352.433 2.778.67 4.114 1.146.19.09.41.105.418.358-1.113.177-2.197.182-3.318.268-1.199.08-2.364.198-3.567.038-.375-.03-.755-.122-1.13-.11a12.496 12.496 0 0 1 3.001-1.778c.176-.035.317.031.482.078zm9.13 12.104c-.083.187-.168.372-.253.557-.094.208-.19.418-.286.625-.09.197-.176.395-.266.591-.154.332-.308.664-.457.999-.157.341-.31.684-.47 1.024l-.575 1.258c-.144.308-.282.618-.423.927-.233.523-.477 1.041-.715 1.562-.222.513-.462 1.018-.692 1.526-.264.58-.528 1.161-.798 1.739-.106 0-.212 0-.318-.002-.298-.663-.606-1.322-.901-1.986-.21-.472-.43-.939-.64-1.41-.191-.43-.39-.856-.582-1.286l-.465-1.024c-.21-.482-.437-.957-.651-1.438-.19-.424-.385-.846-.573-1.271-.075-.165-.149-.33-.225-.494-.131-.3-.27-.593-.405-.891-.096-.214-.196-.426-.292-.641l-.216-.48c-.08-.183-.163-.364-.25-.544-2.197-.005-4.394.005-6.591-.004v-.61c2.102-.004 4.203.005 6.304-.004a9.544 9.544 0 0 0-.22-.527c-.125-.264-.24-.53-.361-.795-.107-.234-.21-.47-.32-.703-.15-.322-.291-.649-.442-.972-.18-.388-.346-.784-.533-1.169-1 .162-1.934.54-2.73 1.165l-.017.012c-.343.247-.648.57-.942.876a6.717 6.717 0 0 0-.648.819 11.784 11.784 0 0 1 1.948-5.219c.454.395 1.007.65 1.62.618-.259-.574-.534-1.141-.775-1.722.467-.55.991-1.049 1.547-1.51.405.977.854 1.937 1.277 2.906.055.152.192.136.324.185.343.079.584.28.894.432.353.181.767.273 1.157.343.164.033.33.052.497.07l.043.1c-.748.203-1.494.215-2.261.251.064.259.174.497.286.738 3.548.007 7.096-.004 10.644.005.234-.465.43-.948.655-1.417-.655.227-1.308.441-1.994.557-.113.014-.232.014-.346.014.161-.1.328-.187.499-.27.747-.353 1.476-.76 2.153-1.232.196-.133.242-.326.338-.528.324-.718.641-1.44.967-2.156.941.767 1.77 1.667 2.44 2.677-.44-.182-.872-.223-1.345-.181l-.792 1.733c-.155.347-.319.69-.474 1.037l-.492 1.077c-.117.262-.245.52-.353.785-.134.253-.24.52-.364.779-.12.259-.23.521-.353.78-.072.145-.14.293-.207.441 2.125.01 4.25.001 6.375.005.003.205-.001.409-.008.612-2.21.004-4.421-.002-6.631.004-.116.213-.216.437-.317.657z"></path></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="h-6 w-6"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#E84142" fill-rule="nonzero"></circle><path fill="#FFF" d="M11.518 22.75H8.49c-.636 0-.95 0-1.142-.123A.77.77 0 0 1 7 22.025c-.012-.226.145-.503.46-1.055l7.472-13.193c.318-.56.48-.84.682-.944a.77.77 0 0 1 .698 0c.203.104.364.384.682.944l1.536 2.686.008.014c.343.6.517.906.593 1.226a2.26 2.26 0 0 1 0 1.066c-.076.323-.249.63-.597 1.24l-3.926 6.95-.01.017c-.346.606-.52.913-.764 1.145a2.284 2.284 0 0 1-.93.54c-.319.089-.675.089-1.387.089zm7.643 0h4.336c.64 0 .962 0 1.154-.126a.768.768 0 0 0 .348-.607c.011-.219-.142-.484-.443-1.005l-.032-.054-2.172-3.722-.025-.042c-.305-.517-.46-.778-.657-.879a.762.762 0 0 0-.693 0c-.2.104-.36.377-.678.925l-2.165 3.722-.007.013c-.317.548-.476.821-.464 1.046a.777.777 0 0 0 .348.606c.188.123.51.123 1.15.123z"></path></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"  className="h-6 w-6"><g fill="none"><circle cx="16" cy="16" r="16" fill="#000"></circle><path fill="#FFF" d="M27.986 14.669v.064c-1.387.868-2.784 1.726-4.177 2.592a.18.18 0 0 0-.06.075c.372.1.757.175 1.11.337.326.145.66.334.844.651.176.322.22.7.122 1.053-.053.264-.164.512-.264.763-.418 1.002-.838 2.001-1.253 3.007a.585.585 0 0 1-.08.139c-.137-.003-.268-.053-.402-.084-.676-.167-1.356-.331-2.032-.5-.22-.062-.446-.098-.663-.17.006-.137.084-.254.13-.377l.928-2.221c.07-.154.111-.346.011-.496-.125-.214-.376-.295-.598-.356-.816-.21-1.638-.404-2.456-.607-.117-.025-.231-.078-.354-.062-.072.126-.114.268-.172.404-.348.816-.682 1.637-1.028 2.453-.05.114-.08.24-.156.34-.136 0-.264-.053-.395-.084-.699-.172-1.398-.348-2.1-.518-.197-.053-.403-.086-.598-.153a.469.469 0 0 1 .036-.161l3.533-8.47a.181.181 0 0 1 .056-.072c.123.008.24.058.36.086.595.142 1.191.295 1.787.44.309.08.626.142.933.234.016.058-.012.117-.034.172-.24.546-.46 1.1-.693 1.646l-.721 1.732c-.081.203-.187.398-.243.612.104-.036.193-.097.284-.159l4.706-2.95c.086-.054.164-.126.262-.151.144-.011.28.044.417.075.48.103.952.24 1.428.35.516.115 1.022.257 1.532.366zM16.882 12.97c.025.504-.167.983-.364 1.434-.532 1.278-1.07 2.553-1.599 3.831-.192.451-.359.922-.654 1.32-.21.296-.502.524-.84.654a2.884 2.884 0 0 1-1.318.095c-.76-.095-1.5-.3-2.244-.479-1.01-.253-2.027-.498-3.037-.752-.671-.161-1.348-.334-1.972-.64a1.654 1.654 0 0 1-.662-.582 1.114 1.114 0 0 1-.159-.69c.053-.443.217-.864.395-1.27l1.63-3.915c.13-.3.244-.61.411-.893a2.43 2.43 0 0 1 .56-.688c.268-.204.583-.335.916-.382.245-.022.49-.01.735-.005a19.32 19.32 0 0 1 2.247.47c1.036.25 2.069.513 3.104.763.476.117.95.237 1.415.396.311.114.629.23.902.428.31.201.508.536.534.905zm-3.62.891c.02-.147-.085-.273-.208-.337-.25-.136-.535-.186-.807-.256-.722-.18-1.444-.358-2.17-.534a1.442 1.442 0 0 0-.634-.04c-.245.07-.368.318-.451.535-.41.975-.81 1.952-1.222 2.924-.045.114-.09.228-.1.35 0 .14.097.262.216.32.179.092.374.143.563.193l2.255.554c.262.061.537.128.805.07.225-.073.34-.304.423-.507l1.105-2.651c.087-.2.198-.398.226-.62z"></path></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"  className="h-6 w-6"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#6cde07"></circle><path fill="#fff" d="M22.5 19.154c0 2.57-2.086 4.276-5.166 4.533V26h-2.11v-2.336A11.495 11.495 0 0 1 9.5 21.35l1.552-2.126c1.383 1.075 2.692 1.776 4.269 2.01v-4.58c-3.541-.888-5.19-2.173-5.19-4.813 0-2.523 2.061-4.252 5.093-4.486V6h2.11v1.402a9.49 9.49 0 0 1 4.56 1.776l-1.359 2.196c-1.067-.771-2.158-1.262-3.298-1.495v4.439c3.687.888 5.263 2.313 5.263 4.836zm-7.18-5.327V9.715c-1.527.117-2.327.935-2.327 1.963 0 .98.46 1.612 2.328 2.15zm4.318 5.49c0-1.05-.51-1.681-2.401-2.219v4.23c1.528-.118 2.401-.889 2.401-2.01z"></path></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"  className="h-6 w-6"><g fill="none"><circle cx="16" cy="16" r="16" fill="#23292F"></circle><path fill="#FFF" d="M23.07 8h2.89l-6.015 5.957a5.621 5.621 0 0 1-7.89 0L6.035 8H8.93l4.57 4.523a3.556 3.556 0 0 0 4.996 0zM8.895 24.563H6l6.055-5.993a5.621 5.621 0 0 1 7.89 0L26 24.562h-2.895L18.5 20a3.556 3.556 0 0 0-4.996 0l-4.61 4.563z"></path></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"  className="h-6 w-6"><g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#F7931A"></circle><path fill="#FFF" fill-rule="nonzero" d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11m.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733"></path></g></svg>









              </div>
       
      </div>

           
          </div>
        </div>
      </div>
    </div>
  );
}
