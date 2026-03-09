import { useState } from "react";
import { Download, Calendar, TrendingUp, Users, Clock } from "lucide-react";
import { HistoricalEngagementChart } from "../components/HistoricalEngagementChart";
import { EmotionTrendsChart } from "../components/EmotionTrendsChart";
import { SessionComparison } from "../components/SessionComparison";
import { AttentionHeatmap } from "../components/AttentionHeatmap";

export function AnalyticsScreen() {
  const [timeRange, setTimeRange] = useState("week");

  const handleExport = (format: "pdf" | "csv") => {
    // Simulate export
    alert(`Exporting report as ${format.toUpperCase()}...`);
  };

  const stats = {
    avgEngagement: 74,
    totalSessions: 12,
    avgDuration: 85,
    peakAttention: 88,
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-gray-900 mb-1">Engagement Analytics</h1>
          <p className="text-gray-600">
            Detailed analysis of student engagement patterns
          </p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            <option value="week">Last 7 Days</option>
            <option value="month">Last 30 Days</option>
            <option value="semester">This Semester</option>
          </select>
          <button
            onClick={() => handleExport("pdf")}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            <Download className="w-4 h-4" />
            Export PDF
          </button>
          <button
            onClick={() => handleExport("csv")}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
          >
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-3xl text-gray-900 mb-1">{stats.avgEngagement}%</p>
          <p className="text-sm text-gray-600">Average Engagement</p>
          <p className="text-xs text-green-600 mt-2">+5% from last period</p>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <Calendar className="w-5 h-5 text-purple-600" />
          </div>
          <p className="text-3xl text-gray-900 mb-1">{stats.totalSessions}</p>
          <p className="text-sm text-gray-600">Total Sessions</p>
          <p className="text-xs text-gray-500 mt-2">In selected period</p>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-5 h-5 text-orange-600" />
          </div>
          <p className="text-3xl text-gray-900 mb-1">{stats.avgDuration}min</p>
          <p className="text-sm text-gray-600">Avg Session Duration</p>
          <p className="text-xs text-gray-500 mt-2">Per lecture</p>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-3xl text-gray-900 mb-1">{stats.peakAttention}%</p>
          <p className="text-sm text-gray-600">Peak Attention</p>
          <p className="text-xs text-green-600 mt-2">Best performance</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Historical Engagement */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg text-gray-900 mb-4">
            Engagement Trends
          </h3>
          <HistoricalEngagementChart />
        </div>

        {/* Emotion Trends */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg text-gray-900 mb-4">
            Emotion Trends Over Time
          </h3>
          <EmotionTrendsChart />
        </div>
      </div>

      {/* Session Comparison */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg text-gray-900 mb-4">
          Session Comparison
        </h3>
        <SessionComparison />
      </div>

      {/* Attention Heatmap */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg text-gray-900 mb-4">
          Attention Heatmap by Time of Day
        </h3>
        <AttentionHeatmap />
      </div>
    </div>
  );
}
