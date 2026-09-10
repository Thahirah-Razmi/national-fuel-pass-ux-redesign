import { Check } from "lucide-react";

const languages = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
  },
  {
    code: "si",
    name: "Sinhala",
    nativeName: "සිංහල",
  },
  {
    code: "ta",
    name: "Tamil",
    nativeName: "தமிழ்",
  },
];

export default function LanguageSelector({
  selectedLanguage,
  onSelect,
}) {
  return (
    <div className="language-selector">
      {languages.map((language) => {
        const selected =
          selectedLanguage === language.code;

        return (
          <button
            key={language.code}
            className={`language-option ${
              selected ? "selected" : ""
            }`}
            onClick={() =>
              onSelect(language.code)
            }
            aria-pressed={selected}
          >
            <div>
              <strong>
                {language.nativeName}
              </strong>

              <span>
                {language.name}
              </span>
            </div>

            {selected && (
              <Check size={20} />
            )}
          </button>
        );
      })}
    </div>
  );
}