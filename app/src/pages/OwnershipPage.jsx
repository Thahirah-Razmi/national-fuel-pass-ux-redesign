import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle,
  FileText,
  Smartphone,
} from "lucide-react";

import Button from "../components/Button";
import Card from "../components/Card";
import Alert from "../components/Alert";

export default function OwnershipPage({
  onBack,
  onComplete,
}) {
  const [changeType, setChangeType] = useState("");
  const [completed, setCompleted] = useState(false);

  function continueFlow() {
    if (!changeType) return;

    setCompleted(true);
  }

  if (completed) {
    const isOwnership = changeType === "ownership";

    return (
      <div className="page">
        <button
          className="back-button"
          onClick={onBack}
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <div className="success-state">
          <CheckCircle size={60} />

          <h1>
            {isOwnership
              ? "Ownership change"
              : "Contact number change"}
          </h1>

          <p>
            Your selected recovery path has been
            demonstrated in this prototype.
          </p>
        </div>

        <Card>
          <h2>Next steps</h2>

          {isOwnership ? (
            <div className="recovery-list">
              <div className="recovery-item">
                <FileText size={20} />

                <div>
                  <strong>
                    Confirm your updated vehicle details
                  </strong>

                  <p>
                    Use the applicable registration and
                    ownership information required by the
                    service.
                  </p>
                </div>
              </div>

              <div className="recovery-item">
                <CheckCircle size={20} />

                <div>
                  <strong>
                    Continue with re-registration
                  </strong>

                  <p>
                    The prototype represents the updated
                    registration path before returning to
                    the Fuel Pass.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="recovery-list">
              <div className="recovery-item">
                <Smartphone size={20} />

                <div>
                  <strong>
                    Verify your new contact number
                  </strong>

                  <p>
                    Follow the applicable verification
                    process for your updated number.
                  </p>
                </div>
              </div>

              <div className="recovery-item">
                <CheckCircle size={20} />

                <div>
                  <strong>
                    Continue with account recovery
                  </strong>

                  <p>
                    Complete the required steps before
                    returning to your Fuel Pass.
                  </p>
                </div>
              </div>
            </div>
          )}
        </Card>

        <Alert
          type="info"
          title="Prototype guidance"
        >
          The exact backend validation and recovery
          workflow are not implemented in this prototype.
        </Alert>

        <Button
          fullWidth
          onClick={onComplete}
        >
          Return to Fuel Pass
        </Button>
      </div>
    );
  }

  return (
    <div className="page">
      <button
        className="back-button"
        onClick={onBack}
      >
        <ArrowLeft size={20} />
        Back
      </button>

      <div className="page-header">
        <span className="prototype-label">
          RECOVERY
        </span>

        <h1>What has changed?</h1>

        <p>
          Choose the situation that best describes your
          account.
        </p>
      </div>

      <div className="selection-list">
        <button
          className={`selection-card ${
            changeType === "ownership"
              ? "selected"
              : ""
          }`}
          onClick={() => setChangeType("ownership")}
        >
          <FileText size={24} />

          <div>
            <strong>Ownership changed</strong>

            <p>
              The vehicle has a new owner.
            </p>
          </div>
        </button>

        <button
          className={`selection-card ${
            changeType === "contact"
              ? "selected"
              : ""
          }`}
          onClick={() => setChangeType("contact")}
        >
          <Smartphone size={24} />

          <div>
            <strong>Contact number changed</strong>

            <p>
              You no longer use the number linked to
              the service.
            </p>
          </div>
        </button>
      </div>

      <Button
        fullWidth
        onClick={continueFlow}
      >
        Continue
      </Button>

      <div className="prototype-notice">
        <strong>Academic Prototype</strong>

        <p>
          This flow demonstrates proposed recovery
          interactions. It does not change real ownership
          or account information.
        </p>
      </div>
    </div>
  );
}