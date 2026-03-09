import { Outlet, useNavigate, useLocation } from "react-router";
import {
  LayoutDashboard,
  BarChart3,
  Settings,
  LogOut,
  GraduationCap,
} from "lucide-react";

export function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/");
  };

  const navItems = [
    { path: "/dashboard", label: "Live Dashboard", icon: LayoutDashboard },
    { path: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
    { path: "/dashboard/settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-xl text-gray-900">Edu-Sense</h1>
              <p className="text-xs text-gray-500">Engagement Analysis</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* User info & logout */}
        <div className="p-4 border-t border-gray-200">
          <div className="mb-3 px-4">
            <p className="text-sm text-gray-900">Dr. Sarah Johnson</p>
            <p className="text-xs text-gray-500">Computer Science Dept.</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
