import { createBrowserRouter } from "react-router";
import { LoginScreen } from "./screens/LoginScreen";
import { DashboardLayout } from "./components/DashboardLayout";
import { LiveDashboard } from "./screens/LiveDashboard";
import { AnalyticsScreen } from "./screens/AnalyticsScreen";
import { SettingsScreen } from "./screens/SettingsScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginScreen,
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      { index: true, Component: LiveDashboard },
      { path: "analytics", Component: AnalyticsScreen },
      { path: "settings", Component: SettingsScreen },
    ],
  },
]);
