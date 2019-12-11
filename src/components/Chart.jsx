import React from "react";
import moment from "moment";
import {
  LineChart,
  Line,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const Chart = ({ sparklineData }) => {
  const formattedData = sparklineData
    .map((price, idx) => {
      if (idx % 6 === 0) {
        const timeToSubtract = 168 - idx;
        const date = moment()
          .subtract(timeToSubtract, "hours")
          .format("ddd h:mma");
        return { value: price, date };
      } else if (idx === sparklineData.length - 1) {
        const date = moment().format("ddd h:mma");
        return { value: price, date };
      }
      return null;
    })
    .filter(data => data);

  return (
    <div>
      <LineChart width={1100} height={300} data={formattedData}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="date" interval={3} />
        <YAxis />
        <Tooltip />
      </LineChart>
      <AreaChart width={1100} height={300} data={formattedData}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="8%" stopColor="#7784d8" stopOpacity={0.5} />
            <stop offset="92%" stopColor="#7784d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#81cc7d" stopOpacity={0.6} />
            <stop offset="95%" stopColor="#81cc7d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="date" interval={3} />
        <YAxis />
        <Tooltip />
      </AreaChart>
    </div>
  );
};

export default Chart;
