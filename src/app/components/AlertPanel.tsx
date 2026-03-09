import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";

interface AlertPanelProps {
  engagementScore: number;
}

export function AlertPanel({ engagementScore }: AlertPanelProps) {
  const getAlerts = () => {
    const alerts = [];

    if (engagementScore < 60) {
      alerts.push({
        type: "critical",
        icon: AlertTriangle,
        message: "Low engagement detected",
        time: "Just now",
      });
    } else if (engagementScore < 75) {
      alerts.push({
        type: "warning",
        icon: AlertCircle,
        message: "Engagement declining",
        time: "2 minutes ago",
      });
    } else {
      alerts.push({
        type: "success",
        icon: CheckCircle,
        message: "Class is highly engaged",
        time: "Ongoing",
      });
    }

    return alerts;
  };

  const alerts = getAlerts();

  const getAlertStyles = (type: string) => {
    switch (type) {
      case "critical":
        return "bg-red-50 border-red-200 text-red-700";
      case "warning":
        return "bg-yellow-50 border-yellow-200 text-yellow-700";
      case "success":
        return "bg-green-50 border-green-200 text-green-700";
      default:
        return "bg-gray-50 border-gray-200 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <h3 className="text-lg text-gray-900 mb-4">Real-Time Alerts</h3>
      <div className="space-y-3">
        {alerts.map((alert, index) => {
          const Icon = alert.icon;
          return (
            <div
              key={index}
              className={`flex items-start gap-3 p-3 rounded-lg border ${getAlertStyles(
                alert.type
              )}`}
            >
              <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm">{alert.message}</p>
                <p className="text-xs opacity-70 mt-1">{alert.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
