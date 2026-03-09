import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { session: "Lecture 1", engagement: 72, participation: 65 },
  { session: "Lecture 2", engagement: 75, participation: 70 },
  { session: "Lecture 3", engagement: 70, participation: 62 },
  { session: "Lecture 4", engagement: 78, participation: 75 },
  { session: "Lecture 5", engagement: 76, participation: 72 },
  { session: "Lecture 6", engagement: 80, participation: 78 },
];

export function SessionComparison() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="session" tick={{ fontSize: 12, fill: "#6b7280" }} />
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
        <Bar dataKey="engagement" fill="#3b82f6" name="Engagement" radius={[4, 4, 0, 0]} />
        <Bar dataKey="participation" fill="#10b981" name="Participation" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
