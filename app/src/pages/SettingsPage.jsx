import {
  Globe,
  Accessibility,
  Info,
  Check,
} from "lucide-react";

import Card from "../components/Card";
import PageHeader from "../components/PageHeader";

export default function SettingsPage({ onBack }) {
  return (
    <div className="page">
      <PageHeader
        title="Settings"
        subtitle="Personalise your prototype experience."
        onBack={onBack}
      />

      <section>
        <Card>
          <div className="settings-section-header">
            <Globe size={22} />

            <div>
              <h2>
                Language
              </h2>

              <p>
                Choose your preferred interface language.
              </p>
            </div>
          </div>

          <div className="language-options">
            <button className="language-option selected">
              <span>
                English
              </span>

              <Check size={19} />
            </button>

            <button className="language-option">
              <span>
                සිංහල
              </span>
            </button>

            <button className="language-option">
              <span>
                தமிழ்
              </span>
            </button>
          </div>
        </Card>
      </section>

      <section>
        <Card>
          <div className="settings-section-header">
            <Accessibility size={22} />

            <div>
              <h2>
                Accessibility
              </h2>

              <p>
                Accessibility options planned for
                the prototype.
              </p>
            </div>
          </div>

          <div className="settings-option">
            <div>
              <strong>
                Larger text
              </strong>

              <span>
                Increase text size for easier reading.
              </span>
            </div>

            <button
              className="toggle"
              aria-label="Toggle larger text"
            >
              <span />
            </button>
          </div>

          <div className="settings-option">
            <div>
              <strong>
                Reduced motion
              </strong>

              <span>
                Reduce interface animations.
              </span>
            </div>

            <button
              className="toggle"
              aria-label="Toggle reduced motion"
            >
              <span />
            </button>
          </div>
        </Card>
      </section>

      <section>
        <Card>
          <div className="settings-section-header">
            <Info size={22} />

            <div>
              <h2>
                About this prototype
              </h2>

              <p>
                National Fuel Pass UX Redesign
              </p>
            </div>
          </div>

          <div className="about-content">
            <p>
              This is an academic UX Engineering
              prototype exploring improvements to
              clarity, reliability, recovery,
              accessibility and trust.
            </p>

            <p>
              It is not an official replacement for
              the National Fuel Pass service.
            </p>

            <p>
              All account and transaction information
              displayed in the prototype is synthetic.
            </p>
          </div>
        </Card>
      </section>
    </div>
  );
}