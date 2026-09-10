import { useState } from "react";
import { ArrowLeft, CheckCircle, AlertTriangle } from "lucide-react";

import Button from "../components/Button";
import Card from "../components/Card";
import Alert from "../components/Alert";

export default function RegistrationPage({ onBack, onComplete }) {
  const [step, setStep] = useState(1);

  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleCategory, setVehicleCategory] = useState("");
  const [identityNumber, setIdentityNumber] = useState("");

  const [error, setError] = useState("");

  function nextStep() {
    setError("");

    if (step === 1) {
      if (!vehicleNumber.trim()) {
        setError("Please enter your vehicle number.");
        return;
      }

      if (!vehicleCategory) {
        setError("Please select your vehicle category.");
        return;
      }
    }

    if (step === 2) {
      if (!identityNumber.trim()) {
        setError("Please enter your identity document number.");
        return;
      }
    }

    setStep(step + 1);
  }

  function previousStep() {
    setError("");

    if (step === 1) {
      onBack();
      return;
    }

    setStep(step - 1);
  }

  function completeRegistration() {
    setStep(4);
  }

  if (step === 4) {
    return (
      <div className="flow-page">
        <div className="success-state">
          <CheckCircle size={64} />

          <h1>Registration submitted</h1>

          <p>
            Your registration has been simulated successfully
            for this prototype.
          </p>
        </div>

        <Card>
          <div className="detail-row">
            <span>Vehicle</span>
            <strong>{vehicleNumber}</strong>
          </div>

          <div className="detail-row">
            <span>Category</span>
            <strong>{vehicleCategory}</strong>
          </div>

          <div className="detail-row">
            <span>Status</span>
            <strong>Active</strong>
          </div>
        </Card>

        <Alert
          type="info"
          title="Prototype simulation"
        >
          No real registration has been created. The data
          shown here is only for demonstrating the proposed
          user experience.
        </Alert>

        <Button fullWidth onClick={onComplete}>
          Continue to Fuel Pass
        </Button>
      </div>
    );
  }

  return (
    <div className="flow-page">
      <button
        className="back-button"
        onClick={previousStep}
      >
        <ArrowLeft size={20} />
        Back
      </button>

      <div className="flow-header">
        <span className="prototype-label">
          REGISTRATION
        </span>

        <h1>Register your vehicle</h1>

        <p>
          Enter the information needed to set up your
          Fuel Pass profile.
        </p>
      </div>

      <div className="step-indicator">
        <span className={step >= 1 ? "active" : ""}>1</span>
        <span className={step >= 2 ? "active" : ""}>2</span>
        <span className={step >= 3 ? "active" : ""}>3</span>
      </div>

      {error && (
        <Alert
          type="warning"
          title="Check your information"
        >
          {error}
        </Alert>
      )}

      {step === 1 && (
        <Card>
          <h2>Vehicle information</h2>

          <div className="form">
            <div className="form-group">
              <label htmlFor="vehicleNumber">
                Vehicle number
              </label>

              <input
                id="vehicleNumber"
                value={vehicleNumber}
                onChange={(e) =>
                  setVehicleNumber(e.target.value)
                }
                placeholder="e.g. ABC-1234"
              />
            </div>

            <div className="form-group">
              <label htmlFor="vehicleCategory">
                Vehicle category
              </label>

              <select
                id="vehicleCategory"
                value={vehicleCategory}
                onChange={(e) =>
                  setVehicleCategory(e.target.value)
                }
              >
                <option value="">
                  Select category
                </option>

                <option value="Motor Car">
                  Motor Car
                </option>

                <option value="Motorcycle">
                  Motorcycle
                </option>

                <option value="Three Wheeler">
                  Three Wheeler
                </option>

                <option value="Van">
                  Van
                </option>

                <option value="Motor Lorry">
                  Motor Lorry
                </option>
              </select>
            </div>

            <Button
              fullWidth
              onClick={nextStep}
            >
              Continue
            </Button>
          </div>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <h2>Identity information</h2>

          <p className="card-description">
            Enter the applicable identity document number
            for this registration.
          </p>

          <div className="form">
            <div className="form-group">
              <label htmlFor="identityNumber">
                Identity document number
              </label>

              <input
                id="identityNumber"
                value={identityNumber}
                onChange={(e) =>
                  setIdentityNumber(e.target.value)
                }
                placeholder="Enter document number"
              />
            </div>

            <div className="privacy-warning">
              <AlertTriangle size={18} />

              <span>
                Use synthetic information only when
                demonstrating this academic prototype.
              </span>
            </div>

            <Button
              fullWidth
              onClick={nextStep}
            >
              Continue
            </Button>
          </div>
        </Card>
      )}

      {step === 3 && (
        <Card>
          <h2>Review registration</h2>

          <div className="review-list">
            <div className="detail-row">
              <span>Vehicle number</span>
              <strong>{vehicleNumber}</strong>
            </div>

            <div className="detail-row">
              <span>Category</span>
              <strong>{vehicleCategory}</strong>
            </div>

            <div className="detail-row">
              <span>Identity document</span>
              <strong>••••••••</strong>
            </div>
          </div>

          <Alert
            type="info"
            title="Before continuing"
          >
            Please check that the information entered is
            correct.
          </Alert>

          <Button
            fullWidth
            onClick={completeRegistration}
          >
            Submit Registration
          </Button>
        </Card>
      )}

      <div className="prototype-notice">
        <strong>Academic Prototype</strong>

        <p>
          Registration is simulated. No real government
          records are accessed or modified.
        </p>
      </div>
    </div>
  );
}