import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

interface EmotionData {
  name: string;
  value: number;
  color: string;
}

export function EmotionDistribution() {
  const [data, setData] = useState<EmotionData[]>([
    { name: "Attentive", value: 65, color: "#10b981" },
    { name: "Neutral", value: 20, color: "#f59e0b" },
    { name: "Confused", value: 10, color: "#ef4444" },
    { name: "Distracted", value: 5, color: "#6b7280" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        return prev.map((item) => ({
          ...item,
          value: Math.max(5, item.value + (Math.random() * 10 - 5)),
        }));
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => `${Math.round(value)}%`} />
        </PieChart>
      </ResponsiveContainer>

      <div className="space-y-2 mt-4">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-700">{item.name}</span>
            </div>
            <span className="text-sm text-gray-900">
              {Math.round(item.value)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
