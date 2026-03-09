import { Lightbulb, MessageSquare, Gauge, Users } from "lucide-react";

interface TeachingRecommendationsProps {
  engagementScore: number;
}

export function TeachingRecommendations({
  engagementScore,
}: TeachingRecommendationsProps) {
  const getRecommendations = () => {
    if (engagementScore < 60) {
      return [
        {
          icon: MessageSquare,
          text: "Pause and ask a question",
          priority: "high",
        },
        {
          icon: Users,
          text: "Increase student interaction",
          priority: "high",
        },
        {
          icon: Gauge,
          text: "Consider changing pace",
          priority: "medium",
        },
      ];
    } else if (engagementScore < 75) {
      return [
        {
          icon: MessageSquare,
          text: "Consider a brief Q&A session",
          priority: "medium",
        },
        {
          icon: Users,
          text: "Try a quick poll or activity",
          priority: "medium",
        },
      ];
    } else {
      return [
        {
          icon: Lightbulb,
          text: "Engagement is excellent!",
          priority: "low",
        },
        {
          icon: MessageSquare,
          text: "Continue current approach",
          priority: "low",
        },
      ];
    }
  };

  const recommendations = getRecommendations();

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-600 bg-red-50";
      case "medium":
        return "text-yellow-600 bg-yellow-50";
      default:
        return "text-green-600 bg-green-50";
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg text-gray-900">Teaching Recommendations</h3>
      </div>
      <div className="space-y-3">
        {recommendations.map((rec, index) => {
          const Icon = rec.icon;
          return (
            <div
              key={index}
              className={`flex items-center gap-3 p-3 rounded-lg ${getPriorityColor(
                rec.priority
              )}`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm">{rec.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
