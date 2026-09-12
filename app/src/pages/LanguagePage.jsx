import { useState } from "react";
import {
  Globe,
  Check,
  ArrowLeft,
} from "lucide-react";

import Button from "../components/Button";

export default function LanguagePage({
  onContinue,
  onBack,
}) {
  const [selectedLanguage, setSelectedLanguage] =
    useState("english");

  const languages = [
    {
      id: "english",
      label: "English",
      description: "Continue in English",
    },
    {
      id: "sinhala",
      label: "සිංහල",
      description: "සිංහල භාෂාවෙන් ඉදිරියට යන්න",
    },
    {
      id: "tamil",
      label: "தமிழ்",
      description: "தமிழில் தொடரவும்",
    },
  ];

  return (
    <div className="language-page-wrapper">
      <div className="language-page">

        <button
          type="button"
          className="back-button"
          onClick={onBack}
        >
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>

        <div className="language-header">
          <div className="language-icon">
            <Globe size={30} />
          </div>

          <h1>National Fuel Pass</h1>

          <p>
            Select your preferred language to continue.
          </p>
        </div>

        <div className="language-options">
          {languages.map((language) => {
            const selected =
              selectedLanguage === language.id;

            return (
              <button
                key={language.id}
                type="button"
                className={`language-option ${selected ? "selected" : ""
                  }`}
                onClick={() =>
                  setSelectedLanguage(language.id)
                }
              >
                <div className="language-option-content">
                  <strong>{language.label}</strong>

                  <span>
                    {language.description}
                  </span>
                </div>

                {selected && (
                  <div className="language-check">
                    <Check size={17} />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <div className="language-actions">
          <Button onClick={onContinue}>
            Continue
          </Button>

          <button
            type="button"
            className="language-back-button"
            onClick={onBack}
          >
            <span>Back</span>
          </button>
        </div>

        <div className="prototype-notice">
          <strong>Academic Prototype</strong>

          <p>
            This is an academic UX Engineering prototype
            and is not an official government application.
          </p>
        </div>
      </div>
    </div>
  );
}