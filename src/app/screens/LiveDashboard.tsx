import { useState, useEffect } from "react";
import {
  Video,
  Users,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Lightbulb,
} from "lucide-react";
import { EngagementChart } from "../components/EngagementChart";
import { EmotionDistribution } from "../components/EmotionDistribution";
import { VideoPreview } from "../components/VideoPreview";
import { AlertPanel } from "../components/AlertPanel";
import { TeachingRecommendations } from "../components/TeachingRecommendations";

export function LiveDashboard() {
  const [isLive, setIsLive] = useState(true);
  const [engagementScore, setEngagementScore] = useState(78);
  const [studentCount, setStudentCount] = useState(42);
  const [attentiveCount, setAttentiveCount] = useState(35);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setEngagementScore((prev) => {
        const change = Math.random() * 10 - 5;
        return Math.max(50, Math.min(100, prev + change));
      });
      setAttentiveCount((prev) => {
        const change = Math.floor(Math.random() * 6) - 3;
        return Math.max(20, Math.min(42, prev + change));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getEngagementLevel = () => {
    if (engagementScore >= 75) return { label: "High", color: "green" };
    if (engagementScore >= 60) return { label: "Moderate", color: "yellow" };
    return { label: "Low", color: "red" };
  };

  const engagement = getEngagementLevel();

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-gray-900 mb-1">
            CS301: Advanced Algorithms
          </h1>
          <p className="text-gray-600">Thursday, February 5, 2026 • 10:00 AM - 11:30 AM</p>
        </div>
        <div className="flex items-center gap-3">
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-full ${
              isLive ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-700"
            }`}
          >
            {isLive && <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />}
            <span className="text-sm">{isLive ? "Live" : "Offline"}</span>
          </div>
          <button
            onClick={() => setIsLive(!isLive)}
            className={`px-4 py-2 rounded-lg text-sm transition-colors ${
              isLive
                ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {isLive ? "Stop Recording" : "Start Recording"}
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Column - Video and Metrics */}
        <div className="xl:col-span-2 space-y-6">
          {/* Video Preview */}
          <VideoPreview isLive={isLive} />

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-xs text-gray-500">Detected</span>
              </div>
              <p className="text-3xl text-gray-900 mb-1">{studentCount}</p>
              <p className="text-sm text-gray-600">Students Present</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-xs text-gray-500">Active</span>
              </div>
              <p className="text-3xl text-gray-900 mb-1">{attentiveCount}</p>
              <p className="text-sm text-gray-600">Attentive Students</p>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp
                  className={`w-5 h-5 text-${engagement.color}-600`}
                />
                <span
                  className={`text-xs px-2 py-1 rounded-full bg-${engagement.color}-100 text-${engagement.color}-700`}
                >
                  {engagement.label}
                </span>
              </div>
              <p className="text-3xl text-gray-900 mb-1">
                {Math.round(engagementScore)}%
              </p>
              <p className="text-sm text-gray-600">Overall Engagement</p>
            </div>
          </div>

          {/* Engagement Over Time Chart */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg text-gray-900 mb-4">
              Engagement Over Time
            </h3>
            <EngagementChart />
          </div>
        </div>

        {/* Right Column - Emotion & Alerts */}
        <div className="space-y-6">
          {/* Emotion Distribution */}
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg text-gray-900 mb-4">
              Emotion Distribution
            </h3>
            <EmotionDistribution />
          </div>

          {/* Teaching Recommendations */}
          <TeachingRecommendations engagementScore={engagementScore} />

          {/* Alerts */}
          <AlertPanel engagementScore={engagementScore} />
        </div>
      </div>
    </div>
  );
}
