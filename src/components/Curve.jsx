"use client"

import React from 'react';
import { Line, LineChart, ResponsiveContainer } from "recharts";

// Generate 24 hours of dummy price data
const generateDummyData = (startPrice, volatility) => {
  const data = [];
  let currentPrice = startPrice;

  console.log("startPrice", startPrice);
  
  for (let i = 0; i < 24; i++) {
    // Add some random price movement
    currentPrice = currentPrice * (1 + (Math.random() - 0.5) * volatility);
    data.push({
      hour: i,
      price: currentPrice
    });
  }
  return data;
};

const PriceSparkline = ({ 
  startPrice = 29000, 
  volatility = 0.01,
  trend = "neutral" // "up" | "down" | "neutral"
}) => {
  const data = generateDummyData(startPrice, volatility);
  
  // Adjust data points to match trend
  if (trend === "up") {
    data[data.length - 1].price = data[0].price * 1.05; // End 5% higher
  } else if (trend === "down") {
    data[data.length - 1].price = data[0].price * 0.95; // End 5% lower
  }

  const getStrokeColor = () => {
    switch(trend) {
      case "up":
        return "#22c55e"; // green-500
      case "down":
        return "#ef4444"; // red-500
      default:
        return "#3b82f6"; // blue-500
    }
  };

  return (
    <div style={{ width: '120px', height: '40px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="price"
            stroke={getStrokeColor()}
            dot={false}
            strokeWidth={1.5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceSparkline;