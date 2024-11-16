
import PriceSparkline from "../../components/Curve";


function DashboardCard10() {
  const tokens = [
    {
      icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=023", // Online icon for Bitcoin
      name: "Bitcoin",
      twitterIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQASURBVHgBvZdfaFNXHMe/597bJG2SNv1jim0S65gwBtuUoeuYFbuBNPokwz3sZT50D3sYOtnbBtr3TS2MDbaH/WGwp+HYkBRh61gL61pmVfAPiFjTtNG0mjaJNc2fe/yd3FpMmnvvibb9QLgnl+8993t+53fO71yGGgj8Ed8PTe0GlD0c2MWARg7eTNc0OItyFOMkG1EZG46G/aOy/TI7ge/cbZ/H5TlGL/kQjHdCEg42BV0fmDnk/8FOa2kicD7RxxXlGwbehWdExkxVE2L03nrPSc5xHOsE1/UzM4faT0DGhDDgdrqHGWM7sf5MZLLagYXDzQtP31QqVTT/FzbIgGC321X4SwzU1EQwMvelEGIDodDvctNUV9wz6IwkjjKw77FZcH4wdtAfEc2nIqGcxHOyrUHFVqcipeUMX/vOJX2rJowoVF+GrQ5mu5nsa3VgsrcFo/uaMU7XX3Y34QW3iu6WOhzpdFZ9hnrt8jhyx412ycT8bTMTn7/khkqygRuZqp0F6hX809OMOmWt1dgjHf0XU5ima6qgV3t8Nhbe0qmEfk/stdqMWuoU9He5cPZVLzpca0N94sWGqgYEYmbeD7nMDAg6ApH4fqWosV5YsLjSwbsdTvz6RtOa8IYoD8y4ni7gs6sZWKN2a7Qn7BWbqxmRuzn0b6svtQP1Kk6/4sWnOxpwebFQ+jVp5hnzW3wZ9ih7NDJgWZREgo3M59DT5li91+FSS79wu9PqUcznOOwQ1VhMctBKtMOjlhmohURWt9VQPjYKE14r0U/RLArcfkSVzC3ruEo5IYGPTLCkleLOUhEfX86Ullst/DmXk5WmFQ49ZafK6RzXUlKjWmXw1iM5IePTCuPskp1uLJnHy40aZPl5OkuRK8qJdcwq5OQ/O10qz3FkfLG05OzyQ0zbFzeXIAtjGBE5MSYjFiP7ikI8kSxYGhBm7+fk84dxPlzaaQKRxCz93Vop8NM2/c4WB0K0Sb3u0/AmFSQz/n2Qx7EracSzNRig8+d0uG27UQx09m01kVjno/N5tFMReK1pbU5QvpZe/sH/KbxHEajFgNGBPmCYIbqorudd+UlRXq2e2UlGvFTQRLmYodBHl3Sr4mTJkygY7RUCQ/f76EgcwSZBK+JoNNz2o9FeIdbXOkTHnUFsArQ3nXlioMyEQFtOnyLJJDaWiZlw+fdHmYmpw9sXtGzd2zRL49gAKI8ntWzmQOV908NA8Py90/QJ+AnWywDngw+XH55aoIFC1oRAHIAVOoXz5/gWpVI9RSfrj2J9/iFzjQRBMoNazTDMUvy/o/Cfnaoy+nJpDYQu3HurWGS9jKOHNn1xIgvSPHupkySFO0Vr/5JRi9gYnaL/lu33MTrZeCbmx9kgAAAAAElFTkSuQmCC",
      discordIcon: "data:image/png;base64,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",
      symbol: "BTC",
      price: "$29025.99",
      time24h: "24h",
      priceChange24h: "-2.39%",
      time7h: "7d",
      priceChange7h: "+1.15%",
      marketCap: "$1532B",
      volume: "$30.92B",
      volumeChange24h: "+19.23%",
      discordFollowers: "12.65K",
      discordChange24h: "-29.24%",
      twitterFollowers: "25.75K",
      twitterChange24h: "-46.12%",
      discordInteractions: "25.75K",
      twitterInteractions: "12.65K",
      discordInteractionsChange24h: "-46.12%",
      twitterInteractionsChange24h: "-29.24%",
      circulatingSupply: "19.36M BTC",
      supplyPercent: "90%",
    },
    {
      icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=023", // Online icon for Ethereum
      name: "Ethereum",
      twitterIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQASURBVHgBvZdfaFNXHMe/597bJG2SNv1jim0S65gwBtuUoeuYFbuBNPokwz3sZT50D3sYOtnbBtr3TS2MDbaH/WGwp+HYkBRh61gL61pmVfAPiFjTtNG0mjaJNc2fe/yd3FpMmnvvibb9QLgnl+8993t+53fO71yGGgj8Ed8PTe0GlD0c2MWARg7eTNc0OItyFOMkG1EZG46G/aOy/TI7ge/cbZ/H5TlGL/kQjHdCEg42BV0fmDnk/8FOa2kicD7RxxXlGwbehWdExkxVE2L03nrPSc5xHOsE1/UzM4faT0DGhDDgdrqHGWM7sf5MZLLagYXDzQtP31QqVTT/FzbIgGC321X4SwzU1EQwMvelEGIDodDvctNUV9wz6IwkjjKw77FZcH4wdtAfEc2nIqGcxHOyrUHFVqcipeUMX/vOJX2rJowoVF+GrQ5mu5nsa3VgsrcFo/uaMU7XX3Y34QW3iu6WOhzpdFZ9hnrt8jhyx412ycT8bTMTn7/khkqygRuZqp0F6hX809OMOmWt1dgjHf0XU5ima6qgV3t8Nhbe0qmEfk/stdqMWuoU9He5cPZVLzpca0N94sWGqgYEYmbeD7nMDAg6ApH4fqWosV5YsLjSwbsdTvz6RtOa8IYoD8y4ni7gs6sZWKN2a7Qn7BWbqxmRuzn0b6svtQP1Kk6/4sWnOxpwebFQ+jVp5hnzW3wZ9ih7NDJgWZREgo3M59DT5li91+FSS79wu9PqUcznOOwQ1VhMctBKtMOjlhmohURWt9VQPjYKE14r0U/RLArcfkSVzC3ruEo5IYGPTLCkleLOUhEfX86Ullst/DmXk5WmFQ49ZafK6RzXUlKjWmXw1iM5IePTCuPskp1uLJnHy40aZPl5OkuRK8qJdcwq5OQ/O10qz3FkfLG05OzyQ0zbFzeXIAtjGBE5MSYjFiP7ikI8kSxYGhBm7+fk84dxPlzaaQKRxCz93Vop8NM2/c4WB0K0Sb3u0/AmFSQz/n2Qx7EracSzNRig8+d0uG27UQx09m01kVjno/N5tFMReK1pbU5QvpZe/sH/KbxHEajFgNGBPmCYIbqorudd+UlRXq2e2UlGvFTQRLmYodBHl3Sr4mTJkygY7RUCQ/f76EgcwSZBK+JoNNz2o9FeIdbXOkTHnUFsArQ3nXlioMyEQFtOnyLJJDaWiZlw+fdHmYmpw9sXtGzd2zRL49gAKI8ntWzmQOV908NA8Py90/QJ+AnWywDngw+XH55aoIFC1oRAHIAVOoXz5/gWpVI9RSfrj2J9/iFzjQRBMoNazTDMUvy/o/Cfnaoy+nJpDYQu3HurWGS9jKOHNn1xIgvSPHupkySFO0Vr/5JRi9gYnaL/lu33MTrZeCbmx9kgAAAAAElFTkSuQmCC",
     discordIcon: "data:image/png;base64,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",

      symbol: "ETH",
      price: "$1887.93",
      time24h: "24h",
      priceChange24h: "-3.11%",
      time7h: "7d",
      priceChange7h: "-4.02%",
      marketCap: "$285B",
      volume: "$15.08B",
      volumeChange24h: "+31.94%",
      discordFollowers: "9.43K",
      discordChange24h: "-27.57%",
      twitterFollowers: "13.1K",
      twitterChange24h: "-36.81%",
      discordInteractions: "13.1K",
      twitterInteractions: "9.43K",
      discordInteractionsChange24h: "+36.81%",
      twitterInteractionsChange24h: "-27.57%",
      circulatingSupply: "120.4M BTC",
      supplyPercent: "0%",
    },
  ];

  return (
    <div className="col-span-full xl:col-span-full bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
        <h2 className="font-semibold text-lg text-gray-800 dark:text-gray-100">All Tokens</h2>
      </header>
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="text-xs font-semibold uppercase text-black dark:text-white dark:bg-opacity-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" fill="none"><path fill="#2B7AFF" stroke="#2B7AFF" d="m1.272 6.732.294-.405-.294.405 3.916 2.844-1.496 4.603c-.173.534.438.979.893.648L8.5 11.983l3.915 2.844c.455.33 1.067-.114.893-.648l-1.496-4.603 3.916-2.844c.454-.33.22-1.05-.341-1.05h-4.84L9.052 1.08c-.174-.535-.93-.535-1.104 0L6.453 5.682h-4.84c-.562 0-.795.72-.34 1.05Zm5.087-.76.399.13-.4-.13Z"></path></svg>
                </th>
                <th className="p-2 whitespace-nowrap"></th>
                <th className="p-2 whitespace-nowrap text-left">Token</th>
                <th className="p-2 whitespace-nowrap text-left">Price</th>
                <th className="p-2 whitespace-nowrap text-left">Market Cap</th>
                <th className="p-2 whitespace-nowrap text-center">Volume</th>
                <th className="p-2 whitespace-nowrap text-center">Social Following</th>
                <th className="p-2 whitespace-nowrap"></th>
                <th className="p-2 whitespace-nowrap text-center">Social Interactions</th>
                <th className="p-2 whitespace-nowrap"></th>
                <th className="p-2 whitespace-nowrap text-center">Circulating Supply</th>
                <th className="p-2 whitespace-nowrap text-center">24h Curve</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {tokens.map((token, index) => (
                <tr key={index}>
                  <td className="p-2 whitespace-nowrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none"><path stroke="#2B7AFF" stroke-width="1.5" d="m7.71 2.002-1.439 4.43H1.613c-.804 0-1.138 1.03-.488 1.502l.441-.607-.44.607 3.768 2.738-1.44 4.43c-.248.764.627 1.4 1.278.928L8.5 13.292l3.768 2.738c.65.472 1.526-.164 1.278-.928l-.714.232.714-.232-1.44-4.43 3.769-2.738c.65-.473.316-1.502-.488-1.502h-4.658l-1.44-4.43c-.248-.764-1.33-.764-1.578 0Zm-2.422 8.956.393-.542-.393.542Zm6.668-.75v.001Zm-1.077-3.313-.637.207.637-.207Z"></path></svg>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" fill="none"><path stroke="#2B7AFF" stroke-width="1.5" d="M4.333 8.5h5m-5 3.333h5M11 16H2.667A1.667 1.667 0 0 1 1 14.333V2.667A1.667 1.667 0 0 1 2.667 1h4.655c.22 0 .433.088.589.244l4.512 4.512a.834.834 0 0 1 .244.589v7.988A1.666 1.666 0 0 1 11 16Z"></path></svg>
                  </td>
                  <td className="p-2 whitespace-nowrap flex items-center   gap-3">
                  <img src={token.icon} alt={`${token.name} icon`} className="w-10 h-10 rounded-full" />
                  <div className="flex flex-col">
                      <div className="font-medium text-gray-800 dark:text-white">{token.name}</div>
                    <div className="text-xs text-gray-500">{token.symbol}</div>
                    
                  </div>
                  
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="font-semibold">{token.price}</div>
                    <div className="text-xs">
                      <span className="text-[10px] text-black bg-slate-200 font-normal p-0.5">{token.time24h}</span>{" "}
                      <span className="text-red-500">{token.priceChange24h}</span>{" "}
                      <span className="text-[10px] text-black bg-slate-200 font-normal p-0.5">{token.time7h}</span>{" "}
                      <span className="text-green-500">{token.priceChange7h}</span>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">{token.marketCap}</td>
                  <td className="p-2 whitespace-nowrap text-center ">
                    <div>{token.volume}</div>
                    
                    <div className="text-xs text-green-500"><span className="text-[10px] text-black bg-slate-200 font-normal p-0.5">{token.time24h}</span>{" "}{token.volumeChange24h}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap flex items-center   gap-3">
                  <img src={token.discordIcon} alt={`${token.name} icon`} className="w-10 h-10 rounded-full" />
                  <div className="flex flex-col">
                    <div>{token.discordFollowers}</div>
                    <div className="text-xs text-red-500"><span className="text-[10px] text-black bg-slate-200 font-normal p-0.5">{token.time24h}</span>{" "}{token.discordChange24h}</div>
                  </div>
                  </td>
                  
                  <td className="p-2 whitespace-nowrap text-center">
                    <div className="flex items-center gap-3" >
                      <img src={token.twitterIcon} alt={`${token.name} icon`} className="w-10 h-10 rounded-full" />
                      <div className="flex flex-col items-start">
                    <div>{token.twitterFollowers}</div>
                    <div className="text-xs text-red-500"><span className="text-[10px] text-black bg-slate-200 font-normal p-0.5">{token.time24h}</span>{" "}{token.twitterChange24h}</div>
                    </div>
                    </div>
                    
                  </td>
                  <td className="p-2 whitespace-nowrap text-center">
                  <div className="flex items-center gap-3" >

                  <img src={token.discordIcon} alt={`${token.name} icon`} className="w-10 h-10 rounded-full" />
                  <div className="flex flex-col items-start">

                    <div>{token.discordInteractions}</div>
                    <div className="text-xs text-green-500"><span className="text-[10px] text-black bg-slate-200 font-normal p-0.5">{token.time24h}</span>{" "}{token.discordInteractionsChange24h}</div>
                    </div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap text-center">
                  <div className="flex items-center gap-3" >

                  <img src={token.twitterIcon} alt={`${token.name} icon`} className="w-10 h-10 rounded-full" />
                  <div className="flex flex-col items-start">
                    <div>{token.twitterInteractions}</div>
                    <div className="text-xs text-red-500"><span className="text-[10px] text-black bg-slate-200 font-normal p-0.5">{token.time24h}</span>{" "}{token.twitterInteractionsChange24h}</div>
                    </div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap text-center  ">

                    <div className="flex flex-col">

                   
                    <div className="flex justify-between">
                      <div className=" font-bold" >{token.circulatingSupply}</div>
                      <div className="text-xs">{token.supplyPercent}</div>
                     
                    </div>
                   <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="bg-blue-600 h-1.5 rounded-full" style={{width:token.supplyPercent}}></div>
                  </div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap text-center">
                  <PriceSparkline 
    startPrice={parseFloat(token.price.replace("$", ""))}
    trend={token.priceChange24h.startsWith("-") ? "down" : "up"}
  />
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard10;