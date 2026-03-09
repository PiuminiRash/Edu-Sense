import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { date: "Jan 29", attentive: 65, neutral: 20, confused: 10, distracted: 5 },
  { date: "Jan 30", attentive: 68, neutral: 18, confused: 9, distracted: 5 },
  { date: "Jan 31", attentive: 62, neutral: 22, confused: 12, distracted: 4 },
  { date: "Feb 1", attentive: 72, neutral: 16, confused: 8, distracted: 4 },
  { date: "Feb 2", attentive: 70, neutral: 18, confused: 8, distracted: 4 },
  { date: "Feb 3", attentive: 75, neutral: 15, confused: 7, distracted: 3 },
  { date: "Feb 4", attentive: 68, neutral: 19, confused: 9, distracted: 4 },
];

export function EmotionTrendsChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#6b7280" }} />
        <YAxis
          tick={{ fontSize: 12, fill: "#6b7280" }}
          label={{
            value: "Percentage (%)",
            angle: -90,
            position: "insideLeft",
            style: { fontSize: 12, fill: "#6b7280" },
          }}
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
        <Legend />
        <Area
          type="monotone"
          dataKey="attentive"
          stackId="1"
          stroke="#10b981"
          fill="#10b981"
          name="Attentive"
        />
        <Area
          type="monotone"
          dataKey="neutral"
          stackId="1"
          stroke="#f59e0b"
          fill="#f59e0b"
          name="Neutral"
        />
        <Area
          type="monotone"
          dataKey="confused"
          stackId="1"
          stroke="#ef4444"
          fill="#ef4444"
          name="Confused"
        />
        <Area
          type="monotone"
          dataKey="distracted"
          stackId="1"
          stroke="#6b7280"
          fill="#6b7280"
          name="Distracted"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
