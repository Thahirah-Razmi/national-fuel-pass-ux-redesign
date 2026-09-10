import BottomNavigation from "./BottomNavigation";

export default function AppShell({
  children,
  currentPage,
  onNavigate,
}) {
  return (
    <div className="app-shell">
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