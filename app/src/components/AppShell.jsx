import { Settings } from "lucide-react";

import BottomNavigation from "./BottomNavigation";

export default function AppShell({
  children,
  currentPage,
  onNavigate,
  onSettings,
}) {
  return (
    <div className="app-shell">
      <header className="top-header">
        <div className="app-name">
          National Fuel Pass
        </div>

        <button
          className="settings-button"
          onClick={onSettings}
          aria-label="Open settings"
        >
          <Settings size={20} />
        </button>
      </header>

      <main className="app-content">
        {children}
      </main>

      <BottomNavigation
        currentPage={currentPage}
        onNavigate={onNavigate}
      />
    </div>
  );
}