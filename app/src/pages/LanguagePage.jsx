import { Globe, ChevronRight } from "lucide-react";

import Card from "../components/Card";
import Button from "../components/Button";

export default function LanguagePage({ onContinue }) {
  const languages = [
    {
      id: "english",
      label: "English",
    },
    {
      id: "sinhala",
      label: "සිංහල",
    },
    {
      id: "tamil",
      label: "தமிழ்",
    },
  ];

  return (
    <div className="page language-page">
      <div className="language-header">
        <div className="language-icon">
          <Globe size={30} />
        </div>

        <p className="eyebrow">
          National Fuel Pass
        </p>

        <h1>
          Choose your language
        </h1>

        <p>
          Select your preferred language to
          continue.
        </p>
      </div>

      <Card>
        <div className="language-options">
          {languages.map((language, index) => (
            <button
              key={language.id}
              className={
                index === 0
                  ? "language-option selected"
                  : "language-option"
              }
            >
              <span>{language.label}</span>

              {index === 0 && (
                <span className="language-check">
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
      </Card>

      <Button
        fullWidth
        onClick={onContinue}
      >
        Continue
        <ChevronRight size={18} />
      </Button>

      <div className="prototype-notice">
        Academic UX Engineering prototype.
      </div>
    </div>
  );
}