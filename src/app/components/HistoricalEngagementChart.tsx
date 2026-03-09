import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { date: "Jan 29", engagement: 72, attention: 68 },
  { date: "Jan 30", engagement: 75, attention: 71 },
  { date: "Jan 31", engagement: 70, attention: 65 },
  { date: "Feb 1", engagement: 78, attention: 75 },
  { date: "Feb 2", engagement: 76, attention: 73 },
  { date: "Feb 3", engagement: 80, attention: 78 },
  { date: "Feb 4", engagement: 74, attention: 70 },
];

export function HistoricalEngagementChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#6b7280" }} />
        <YAxis
          tick={{ fontSize: 12, fill: "#6b7280" }}
          domain={[0, 100]}
          label={{
            value: "Score (%)",
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
        <Line
          type="monotone"
          dataKey="engagement"
          stroke="#3b82f6"
          strokeWidth={2}
          name="Engagement"
          dot={{ r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="attention"
          stroke="#10b981"
          strokeWidth={2}
          name="Attention"
          dot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
