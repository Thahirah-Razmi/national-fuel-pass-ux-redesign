import { useState } from "react";
import { Settings } from "lucide-react";

import AppShell from "./components/AppShell";

import EntryPage from "./pages/EntryPage";
import SignInPage from "./pages/SignInPage";
import LanguagePage from "./pages/LanguagePage";
import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage";
import QRPage from "./pages/QRPage";
import VehiclePage from "./pages/VehiclePage";
import AllocationPage from "./pages/AllocationPage";
import HistoryPage from "./pages/HistoryPage";
import OwnershipPage from "./pages/OwnershipPage";
import HelpPage from "./pages/HelpPage";
import SettingsPage from "./pages/SettingsPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("entry");
  const [showSettings, setShowSettings] = useState(false);

  function navigate(page) {
    setCurrentPage(page);
    setShowSettings(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function renderPage() {
    if (showSettings) {
      return (
        <SettingsPage
          onBack={() => setShowSettings(false)}
        />
      );
    }

    switch (currentPage) {
      case "entry":
        return (
          <EntryPage
            onSignIn={() => navigate("signin")}
            onRegister={() => navigate("language")}
          />
        );

      case "signin":
        return (
          <SignInPage
            onBack={() => navigate("entry")}
            onComplete={() => navigate("home")}
          />
        );

      case "language":
        return (
          <LanguagePage
            onContinue={() => navigate("registration")}
          />
        );

      case "registration":
        return (
          <RegistrationPage
            onBack={() => navigate("language")}
            onComplete={() => navigate("home")}
          />
        );

      case "home":
        return (
          <HomePage
            onNavigate={navigate}
          />
        );

      case "qr":
        return (
          <QRPage
            onBack={() => navigate("home")}
            onNavigate={navigate}
          />
        );

      case "vehicle":
        return (
          <VehiclePage
            onBack={() => navigate("home")}
            onNavigate={navigate}
          />
        );

      case "allocation":
        return (
          <AllocationPage
            onBack={() => navigate("home")}
            onNavigate={navigate}
          />
        );

      case "history":
        return (
          <HistoryPage
            onBack={() => navigate("allocation")}
          />
        );

      case "ownership":
        return (
          <OwnershipPage
            onBack={() => navigate("vehicle")}
            onComplete={() => navigate("home")}
            onNavigate={navigate}
          />
        );

      case "help":
        return (
          <HelpPage
            onBack={() => navigate("home")}
            onNavigate={navigate}
          />
        );

      default:
        return (
          <LanguagePage
            onContinue={() => navigate("registration")}
          />
        );
    }
  }

  const hideNavigation =
    currentPage === "entry" ||
    currentPage === "signin" ||
    currentPage === "language" ||
    currentPage === "registration";

  return (
    <div className="app">
      {!hideNavigation && (
        <button
          className="settings-button"
          onClick={() => setShowSettings(true)}
          aria-label="Open settings"
        >
          <Settings size={21} />
        </button>
      )}

      {hideNavigation ? (
        <main className="app-content">
          {renderPage()}
        </main>
      ) : (
        <AppShell
          currentPage={
            showSettings ? null : currentPage
          }
          onNavigate={navigate}
        >
          {renderPage()}
        </AppShell>
      )}
    </div>
  );
}