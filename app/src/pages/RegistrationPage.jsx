import { useState } from "react";
import {
  ArrowLeft,
  Check,
  Pencil,
  CircleCheck,
} from "lucide-react";

import Button from "../components/Button";

export default function RegistrationPage({
  onBack,
  onComplete,
}) {
  const [step, setStep] = useState(1);

  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleCategory, setVehicleCategory] = useState("");

  const [identityType, setIdentityType] = useState("NIC");
  const [identityNumber, setIdentityNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const [confirmed, setConfirmed] = useState(false);

  function handleVehicleContinue() {
    if (!vehicleNumber || !vehicleCategory) return;
    setStep(2);
  }

  function handleIdentityContinue() {
    if (!identityNumber || !mobileNumber) return;
    setStep(3);
  }

  function handleSubmit() {
    if (!confirmed) return;
    setStep(4);
  }

  function maskDocumentNumber(value) {
    if (!value) return "—";

    if (identityType === "NIC") {
      if (value.length <= 5) return value;

      return `${value.slice(0, 6)}•••${value.slice(-2)}`;
    }

    if (value.length <= 4) return value;

    return `${value.slice(0, 3)}•••${value.slice(-2)}`;
  }

  function maskMobileNumber(value) {
    if (!value) return "—";

    if (value.length < 7) return value;

    return `${value.slice(0, 3)} •••• ${value.slice(-3)}`;
  }

  if (step === 4) {
    return (
      <div className="registration-page">
        <div className="registration-success">
          <div className="success-icon">
            <CircleCheck size={52} strokeWidth={1.8} />
          </div>

          <h1>Registration Submitted</h1>

          <p>
            Your vehicle registration has been submitted
            successfully.
          </p>

          <section className="registered-vehicle-card">
            <div className="registered-vehicle-header">
              <h2>Registered Vehicle</h2>
            </div>

            <div className="registered-vehicle-details">
              <div className="review-row">
                <span>Registration No.</span>
                <strong>{vehicleNumber || "ABC-1234"}</strong>
              </div>

              <div className="review-row">
                <span>Category</span>
                <strong>
                  {vehicleCategory || "Motor Car"}
                </strong>
              </div>

              <div className="review-row status-row">
                <span>Status</span>

                <span className="pending-status">
                  Pending Verification
                </span>
              </div>
            </div>
          </section>

          <div className="next-steps">
            <strong>Next steps:</strong>

            <p>
              Your fuel pass will be activated once your
              details are verified. You will receive an SMS
              notification. This may take 1–2 working days.
            </p>
          </div>

          <Button
            variant="primary"
            fullWidth
            onClick={onComplete}
          >
            Continue to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="registration-page">
      <button
        className="back-button"
        onClick={() => {
          if (step === 1) {
            onBack();
          } else {
            setStep(step - 1);
          }
        }}
      >
        <ArrowLeft size={18} />
        <span>Back</span>
      </button>

      {step === 1 && (
        <>
          <span className="prototype-label">
            REGISTRATION
          </span>

          <h1>Register Vehicle</h1>

          <p className="registration-description">
            Your vehicle registration number and category are
            required to link your fuel allocation.
          </p>

          <p className="step-title">Step 1 of 3</p>

          <div className="registration-form">
            <div className="form-group">
              <label htmlFor="vehicle-number">
                Vehicle Registration Number
              </label>

              <input
                id="vehicle-number"
                type="text"
                value={vehicleNumber}
                onChange={(e) =>
                  setVehicleNumber(e.target.value.toUpperCase())
                }
                placeholder="Enter registration number"
              />

              <span className="input-help">
                Enter exactly as shown on your registration
                certificate.
              </span>
            </div>

            <div className="form-group">
              <label htmlFor="vehicle-category">
                Vehicle Category
              </label>

              <select
                id="vehicle-category"
                value={vehicleCategory}
                onChange={(e) =>
                  setVehicleCategory(e.target.value)
                }
              >
                <option value="">Select…</option>
                <option value="Motor Car">Motor Car</option>
                <option value="Motorcycle">Motorcycle</option>
                <option value="Van">Van</option>
                <option value="Motor Lorry">
                  Motor Lorry
                </option>
                <option value="Bus">Bus</option>
                <option value="Three Wheeler">
                  Three Wheeler
                </option>
              </select>

              <span className="input-help">
                Select the category that matches your vehicle
                type.
              </span>
            </div>

            <div className="registration-actions">
              <Button
                variant="primary"
                fullWidth
                onClick={handleVehicleContinue}
                disabled={!vehicleNumber || !vehicleCategory}
              >
                Continue
              </Button>

              <Button
                variant="secondary"
                fullWidth
                onClick={onBack}
              >
                Back
              </Button>
            </div>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <span className="prototype-label">
            REGISTRATION
          </span>

          <h1>Identity Information</h1>

          <p className="registration-description">
            Your identity information is required to verify
            vehicle ownership.
          </p>

          <p className="step-title">Step 2 of 3</p>

          <div className="registration-form">
            <div className="form-group">
              <label>Identity Document Type</label>

              <div className="identity-options">
                <button
                  type="button"
                  className={`identity-option ${identityType === "NIC" ? "selected" : ""
                    }`}
                  onClick={() => setIdentityType("NIC")}
                >
                  <span className="identity-radio">
                    {identityType === "NIC" && (
                      <span />
                    )}
                  </span>

                  <strong>NIC</strong>
                </button>

                <button
                  type="button"
                  className={`identity-option ${identityType === "Passport"
                    ? "selected"
                    : ""
                    }`}
                  onClick={() =>
                    setIdentityType("Passport")
                  }
                >
                  <span className="identity-radio">
                    {identityType === "Passport" && (
                      <span />
                    )}
                  </span>

                  <strong>Passport</strong>
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="identity-number">
                {identityType === "NIC"
                  ? "NIC Number"
                  : "Passport Number"}
              </label>

              <input
                id="identity-number"
                type="text"
                value={identityNumber}
                onChange={(e) =>
                  setIdentityNumber(
                    e.target.value.toUpperCase()
                  )
                }
                placeholder={
                  identityType === "NIC"
                    ? "Enter NIC number"
                    : "Enter passport number"
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobile-number">
                Mobile Number
              </label>

              <input
                id="mobile-number"
                type="tel"
                value={mobileNumber}
                onChange={(e) =>
                  setMobileNumber(e.target.value)
                }
                placeholder="Enter mobile number"
              />

              <span className="input-help">
                A mobile number may be used for important
                registration and service notifications.
              </span>
            </div>

            <div className="alert alert-warning">
              <strong>Identity verification</strong>
              <span>
                Please make sure your identity information
                matches your official document.
              </span>
            </div>

            <div className="registration-actions">
              <Button
                variant="primary"
                fullWidth
                onClick={handleIdentityContinue}
                disabled={!identityNumber || !mobileNumber}
              >
                Continue
              </Button>

              <Button
                variant="secondary"
                fullWidth
                onClick={() => setStep(1)}
              >
                Back
              </Button>
            </div>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <span className="prototype-label">
            REGISTRATION
          </span>

          <h1>Review Registration</h1>

          <p className="step-title">Step 3 of 3</p>

          <p className="registration-description">
            Please review your information carefully before
            submitting.
          </p>

          <div className="review-sections">
            <section className="review-section">
              <div className="review-section-header">
                <h2>Vehicle Details</h2>

                <button
                  type="button"
                  className="edit-button"
                  onClick={() => setStep(1)}
                >
                  <Pencil size={15} />
                  Edit
                </button>
              </div>

              <div className="review-details">
                <div className="review-row">
                  <span>Registration No.</span>
                  <strong>{vehicleNumber || "—"}</strong>
                </div>

                <div className="review-row">
                  <span>Category</span>
                  <strong>
                    {vehicleCategory || "—"}
                  </strong>
                </div>
              </div>
            </section>

            <section className="review-section">
              <div className="review-section-header">
                <h2>Identity Information</h2>

                <button
                  type="button"
                  className="edit-button"
                  onClick={() => setStep(2)}
                >
                  <Pencil size={15} />
                  Edit
                </button>
              </div>

              <div className="review-details">
                <div className="review-row">
                  <span>Document Type</span>
                  <strong>{identityType}</strong>
                </div>

                <div className="review-row">
                  <span>
                    {identityType === "NIC"
                      ? "NIC Number"
                      : "Passport Number"}
                  </span>

                  <strong>
                    {maskDocumentNumber(identityNumber)}
                  </strong>
                </div>

                <div className="review-row">
                  <span>Mobile</span>

                  <strong>
                    {maskMobileNumber(mobileNumber)}
                  </strong>
                </div>
              </div>
            </section>
          </div>

          <label className="confirmation-checkbox">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(e) =>
                setConfirmed(e.target.checked)
              }
            />

            <span className="checkbox-custom">
              {confirmed && <Check size={14} />}
            </span>

            <span>
              I confirm that the information provided is
              accurate and belongs to me.
            </span>
          </label>

          <div className="review-actions">
            <Button
              variant="primary"
              fullWidth
              onClick={handleSubmit}
              disabled={!confirmed}
            >
              Submit Registration
            </Button>

            <Button
              variant="secondary"
              fullWidth
              onClick={() => setStep(2)}
            >
              Back
            </Button>
          </div>
        </>
      )}
    </div>
  );
}