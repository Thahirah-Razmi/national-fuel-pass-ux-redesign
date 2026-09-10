import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  UserRound,
  Phone,
  CheckCircle,
  HelpCircle,
} from "lucide-react";

import Card from "../components/Card";
import Alert from "../components/Alert";
import Button from "../components/Button";

export default function OwnershipPage({
  onBack,
  onComplete,
  onNavigate,
}) {
  const [selectedAction, setSelectedAction] =
    useState(null);

  const [submitted, setSubmitted] =
    useState(false);

  const actions = [
    {
      id: "ownership",
      title: "Ownership changed",
      description:
        "The vehicle has been transferred to a new owner.",
      icon: UserRound,
    },
    {
      id: "contact",
      title: "Contact number changed",
      description:
        "The contact number previously associated with the service is no longer available.",
      icon: Phone,
    },
  ];

  function continueFlow() {
    if (!selectedAction) return;

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="page">
        <div className="success-page">
          <div className="success-icon">
            <CheckCircle size={42} />
          </div>

          <h1>
            Next steps
          </h1>

          <p>
            Based on your selected situation, the
            prototype recommends following the
            applicable re-registration or support
            guidance.
          </p>

          <Alert type="info">
            <strong>
              Prototype guidance
            </strong>

            <p>
              The internal resolution process is not
              represented because it has not been
              established through primary research.
            </p>
          </Alert>

          <Button
            fullWidth
            onClick={onComplete}
          >
            Return to home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="flow-header">
        <button
          className="icon-button"
          onClick={onBack}
          aria-label="Go back"
        >
          <ArrowLeft size={21} />
        </button>

        <div>
          <span className="label">
            Vehicle & registration
          </span>
        </div>
      </div>

      <div className="flow-title">
        <h1>
          What has changed?
        </h1>

        <p>
          Select the situation that best describes
          your problem.
        </p>
      </div>

      <section>
        <Card>
          <div className="selection-list">
            {actions.map((action) => {
              const Icon = action.icon;

              const selected =
                selectedAction === action.id;

              return (
                <button
                  key={action.id}
                  className={
                    selected
                      ? "selection-card selected"
                      : "selection-card"
                  }
                  onClick={() =>
                    setSelectedAction(action.id)
                  }
                >
                  <div className="selection-icon">
                    <Icon size={22} />
                  </div>

                  <div>
                    <strong>
                      {action.title}
                    </strong>

                    <span>
                      {action.description}
                    </span>
                  </div>

                  <span className="selection-radio">
                    {selected ? "✓" : ""}
                  </span>
                </button>
              );
            })}
          </div>
        </Card>
      </section>

      <section>
        <Alert type="info">
          <strong>
            Need more help?
          </strong>

          <p>
            If you cannot determine which option
            applies to you, use the support guidance
            instead of repeatedly submitting
            information.
          </p>

          <button
            className="text-action"
            onClick={() => onNavigate("help")}
          >
            <HelpCircle size={18} />
            View support guidance
          </button>
        </Alert>
      </section>

      <div className="flow-actions">
        <Button
          fullWidth
          onClick={continueFlow}
        >
          Continue
          <ArrowRight size={18} />
        </Button>
      </div>
    </div>
  );
}