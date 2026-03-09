import { useState } from "react";
import { Camera, Bell, Shield, Sliders, Save, Info } from "lucide-react";

export function SettingsScreen() {
  const [settings, setSettings] = useState({
    camera: "main-classroom-cam",
    recordingEnabled: true,
    detectionSensitivity: 75,
    alertThreshold: 60,
    emotionDetection: true,
    faceBlurring: false,
    dataRetention: 30,
    emailNotifications: true,
    realTimeAlerts: true,
    weeklyReports: true,
  });

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-gray-900 mb-1">Settings</h1>
          <p className="text-gray-600">
            Configure your Edu-Sense system preferences
          </p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Save className="w-4 h-4" />
          Save Changes
        </button>
      </div>

      {saved && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
          <Info className="w-5 h-5" />
          <span>Settings saved successfully!</span>
        </div>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Camera Settings */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <Camera className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg text-gray-900">Camera Settings</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Select Camera
              </label>
              <select
                value={settings.camera}
                onChange={(e) =>
                  setSettings({ ...settings, camera: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="main-classroom-cam">
                  Main Classroom Camera
                </option>
                <option value="rear-classroom-cam">Rear Classroom Camera</option>
                <option value="side-view-cam">Side View Camera</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-700">Enable Recording</p>
                <p className="text-xs text-gray-500">
                  Automatically record lectures
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.recordingEnabled}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      recordingEnabled: e.target.checked,
                    })
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Detection Settings */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <Sliders className="w-5 h-5 text-purple-600" />
            <h2 className="text-lg text-gray-900">Detection Settings</h2>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm text-gray-700">
                  Detection Sensitivity
                </label>
                <span className="text-sm text-gray-900">
                  {settings.detectionSensitivity}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={settings.detectionSensitivity}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    detectionSensitivity: parseInt(e.target.value),
                  })
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <p className="text-xs text-gray-500 mt-1">
                Adjust how sensitive face detection should be
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-700">Emotion Detection</p>
                <p className="text-xs text-gray-500">
                  Analyze student emotions
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.emotionDetection}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      emotionDetection: e.target.checked,
                    })
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Alert Settings */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="w-5 h-5 text-orange-600" />
            <h2 className="text-lg text-gray-900">Alert Settings</h2>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm text-gray-700">
                  Low Engagement Threshold
                </label>
                <span className="text-sm text-gray-900">
                  {settings.alertThreshold}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={settings.alertThreshold}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    alertThreshold: parseInt(e.target.value),
                  })
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
              />
              <p className="text-xs text-gray-500 mt-1">
                Trigger alerts when engagement drops below this level
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-700">Real-Time Alerts</p>
                <p className="text-xs text-gray-500">Show live notifications</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.realTimeAlerts}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      realTimeAlerts: e.target.checked,
                    })
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-700">Email Notifications</p>
                <p className="text-xs text-gray-500">Send alerts via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.emailNotifications}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      emailNotifications: e.target.checked,
                    })
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-700">Weekly Reports</p>
                <p className="text-xs text-gray-500">
                  Receive summary emails
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.weeklyReports}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      weeklyReports: e.target.checked,
                    })
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Privacy & Data Settings */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-green-600" />
            <h2 className="text-lg text-gray-900">Privacy & Data</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-700">Face Blurring</p>
                <p className="text-xs text-gray-500">
                  Blur faces in recordings
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.faceBlurring}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      faceBlurring: e.target.checked,
                    })
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Data Retention Period
              </label>
              <select
                value={settings.dataRetention}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    dataRetention: parseInt(e.target.value),
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={7}>7 days</option>
                <option value={30}>30 days</option>
                <option value={90}>90 days</option>
                <option value={180}>6 months</option>
                <option value={365}>1 year</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">
                How long to keep engagement data
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-blue-900 mb-1">
                    Privacy Notice
                  </p>
                  <p className="text-xs text-blue-700">
                    All data is processed in compliance with GDPR and
                    institutional privacy policies. Student consent is required
                    for engagement tracking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Information */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-lg text-gray-900 mb-4">System Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-gray-500 mb-1">Version</p>
            <p className="text-gray-900">Edu-Sense v2.1.0</p>
          </div>
          <div>
            <p className="text-gray-500 mb-1">Last Updated</p>
            <p className="text-gray-900">February 1, 2026</p>
          </div>
          <div>
            <p className="text-gray-500 mb-1">License</p>
            <p className="text-gray-900">Educational Institution</p>
          </div>
        </div>
      </div>
    </div>
  );
}
