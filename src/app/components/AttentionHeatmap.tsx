export function AttentionHeatmap() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const times = ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"];

  // Generate mock data for heatmap
  const data: number[][] = [];
  for (let i = 0; i < times.length; i++) {
    const row: number[] = [];
    for (let j = 0; j < days.length; j++) {
      // Generate random attention scores with patterns
      let score = Math.random() * 40 + 50;
      // Morning classes tend to have higher attention
      if (i < 3) score += 15;
      // Midday classes have lower attention
      if (i >= 4 && i <= 5) score -= 10;
      row.push(Math.min(100, Math.max(0, score)));
    }
    data.push(row);
  }

  const getColor = (value: number) => {
    if (value >= 80) return "bg-green-500";
    if (value >= 70) return "bg-green-400";
    if (value >= 60) return "bg-yellow-400";
    if (value >= 50) return "bg-orange-400";
    return "bg-red-400";
  };

  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full">
        <div className="flex gap-1">
          {/* Time labels */}
          <div className="flex flex-col gap-1 pr-2">
            <div className="h-8" /> {/* Spacer for day labels */}
            {times.map((time) => (
              <div
                key={time}
                className="h-10 flex items-center justify-end text-xs text-gray-600"
              >
                {time}
              </div>
            ))}
          </div>

          {/* Heatmap grid */}
          <div className="flex-1">
            {/* Day labels */}
            <div className="flex gap-1 mb-1">
              {days.map((day) => (
                <div
                  key={day}
                  className="flex-1 h-8 flex items-center justify-center text-sm text-gray-700"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Grid cells */}
            {data.map((row, i) => (
              <div key={i} className="flex gap-1 mb-1">
                {row.map((value, j) => (
                  <div
                    key={j}
                    className={`flex-1 h-10 rounded ${getColor(
                      value
                    )} flex items-center justify-center text-xs text-white font-medium cursor-pointer hover:opacity-80 transition-opacity`}
                    title={`${days[j]} ${times[i]}: ${Math.round(value)}%`}
                  >
                    {Math.round(value)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-4 mt-6 text-xs">
          <span className="text-gray-600">Low</span>
          <div className="flex gap-1">
            <div className="w-8 h-4 rounded bg-red-400" />
            <div className="w-8 h-4 rounded bg-orange-400" />
            <div className="w-8 h-4 rounded bg-yellow-400" />
            <div className="w-8 h-4 rounded bg-green-400" />
            <div className="w-8 h-4 rounded bg-green-500" />
          </div>
          <span className="text-gray-600">High</span>
        </div>
      </div>
    </div>
  );
}
