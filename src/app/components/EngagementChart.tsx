import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

interface DataPoint {
  time: string;
  engagement: number;
  attention: number;
}

export function EngagementChart() {
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    // Initialize with some data
    const initialData: DataPoint[] = [];
    const now = new Date();
    
    for (let i = 20; i >= 0; i--) {
      const time = new Date(now.getTime() - i * 3000);
      initialData.push({
        time: time.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
        engagement: Math.random() * 30 + 60,
        attention: Math.random() * 30 + 55,
      });
    }
    
    setData(initialData);

    // Add new data points every 3 seconds
    const interval = setInterval(() => {
      setData((prev) => {
        const newData = [...prev];
        const now = new Date();
        newData.push({
          time: now.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
          engagement: Math.random() * 30 + 60,
          attention: Math.random() * 30 + 55,
        });
        
        // Keep only last 21 points
        if (newData.length > 21) {
          newData.shift();
        }
        
        return newData;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorAttention" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis
          dataKey="time"
          tick={{ fontSize: 12, fill: "#6b7280" }}
          tickFormatter={(value) => {
            const parts = value.split(":");
            return `${parts[0]}:${parts[1]}`;
          }}
        />
        <YAxis
          tick={{ fontSize: 12, fill: "#6b7280" }}
          domain={[0, 100]}
          label={{ value: "Score (%)", angle: -90, position: "insideLeft", style: { fontSize: 12, fill: "#6b7280" } }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #e5e7eb",
            borderRadius: "6px",
            fontSize: "12px",
          }}
          formatter={(value: number) => `${Math.round(value)}%`}
        />
        <Area
          type="monotone"
          dataKey="engagement"
          stroke="#3b82f6"
          strokeWidth={2}
          fill="url(#colorEngagement)"
          name="Engagement"
        />
        <Area
          type="monotone"
          dataKey="attention"
          stroke="#10b981"
          strokeWidth={2}
          fill="url(#colorAttention)"
          name="Attention"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
