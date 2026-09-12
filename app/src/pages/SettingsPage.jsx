import { useState } from "react";

export default function SettingsPage({ onBack }) {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  return (
    <div className="settings-page">
      <header className="settings-header">
        <button
          type="button"
          className="back-button"
          onClick={onBack}
        >
          Back
        </button>

        <h1>Settings</h1>
      </header>

      <section className="settings-section">
        <div className="settings-section-title">
          <h2>Language</h2>
        </div>

        <div className="language-options">
          <button
            type="button"
            className={`language-option ${
              selectedLanguage === "English" ? "selected" : ""
            }`}
            onClick={() => setSelectedLanguage("English")}
          >
            <strong>English</strong>
          </button>

          <button
            type="button"
            className={`language-option ${
              selectedLanguage === "Sinhala" ? "selected" : ""
            }`}
            onClick={() => setSelectedLanguage("Sinhala")}
          >
            <strong>සිංහල</strong>
          </button>

          <button
            type="button"
            className={`language-option ${
              selectedLanguage === "Tamil" ? "selected" : ""
            }`}
            onClick={() => setSelectedLanguage("Tamil")}
          >
            <strong>தமிழ்</strong>
          </button>
        </div>
      </section>

      <section className="settings-section">
        <div className="settings-section-title">
          <h2>Accessibility</h2>
        </div>

        <div className="settings-item">
          <div>
            <strong>Text Size</strong>

            <div className="text-size-options">
              <button className="text-size-option selected">
                Normal
              </button>

              <button className="text-size-option">
                Large
              </button>

              <button className="text-size-option">
                Extra Large
              </button>
            </div>
          </div>
        </div>

        <div className="settings-toggle-row">
          <div>
            <strong>High Contrast</strong>
            <span>
              Increase text and border contrast
            </span>
          </div>

          <button
            type="button"
            className="settings-toggle"
            aria-label="Toggle high contrast"
          >
            <span />
          </button>
        </div>
      </section>

      <section className="settings-section">
        <div className="settings-section-title">
          <h2>Notifications</h2>
        </div>

        <div className="settings-toggle-row">
          <div>
            <strong>Allocation Reminders</strong>
            <span>
              Notify when allocation is low
            </span>
          </div>

          <button
            type="button"
            className="settings-toggle"
            aria-label="Toggle allocation reminders"
          >
            <span />
          </button>
        </div>
      </section>

      <section className="settings-section about-section">
        <div className="settings-section-title">
          <h2>About This Prototype</h2>
        </div>

        <p>
          This is an academic UX Engineering prototype
          created to explore a redesign of the National Fuel
          Pass service.
        </p>

        <p>
          It is not an official government application.
          All data is synthetic and for demonstration
          purposes only.
        </p>

        <div className="version-row">
          <span>Version</span>
          <strong>Prototype 0.1</strong>
        </div>
      </section>
    </div>
  );
}