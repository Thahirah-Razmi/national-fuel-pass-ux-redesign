import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Car,
  CheckCircle,
} from "lucide-react";

import Card from "../components/Card";
import Alert from "../components/Alert";
import Button from "../components/Button";

export default function RegistrationPage({
  onBack,
  onComplete,
}) {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    vehicleNumber: "",
    vehicleCategory: "",
    identityNumber: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function updateField(field, value) {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  function nextStep() {
    if (step === 1) {
      if (
        !formData.vehicleNumber.trim() ||
        !formData.vehicleCategory
      ) {
        return;
      }

      setStep(2);
      return;
    }

    if (step === 2) {
      if (!formData.identityNumber.trim()) {
        return;
      }

      setStep(3);
      return;
    }

    setSubmitted(true);
  }

  function previousStep() {
    if (step > 1) {
      setStep(step - 1);
    } else {
      onBack();
    }
  }

  function finish() {
    onComplete();
  }

  if (submitted) {
    return (
      <div className="page">
        <div className="success-page">
          <div className="success-icon">
            <CheckCircle size={42} />
          </div>

          <p className="eyebrow">
            Registration
          </p>

          <h1>
            Registration submitted
          </h1>

          <p>
            Your prototype registration has been
            completed successfully.
          </p>

          <Alert type="info">
            <strong>
              Prototype result
            </strong>

            <p>
              This result is simulated. No
              information has been submitted to
              a government system.
            </p>
          </Alert>

          <Button
            fullWidth
            onClick={finish}
          >
            Continue to home
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
          onClick={previousStep}
          aria-label="Go back"
        >
          <ArrowLeft size={21} />
        </button>

        <div>
          <span className="label">
            Step {step} of 3
          </span>

          <div className="step-progress">
            <div
              style={{
                width: `${(step / 3) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>

      {step === 1 && (
        <StepOne
          formData={formData}
          updateField={updateField}
        />
      )}

      {step === 2 && (
        <StepTwo
          formData={formData}
          updateField={updateField}
        />
      )}

      {step === 3 && (
        <StepThree
          formData={formData}
        />
      )}

      <div className="flow-actions">
        <Button
          fullWidth
          onClick={nextStep}
        >
          {step === 3
            ? "Submit registration"
            : "Continue"}

          <ArrowRight size={18} />
        </Button>
      </div>
    </div>
  );
}


function StepOne({
  formData,
  updateField,
}) {
  return (
    <>
      <div className="flow-title">
        <div className="flow-icon">
          <Car size={28} />
        </div>

        <h1>
          Add your vehicle
        </h1>

        <p>
          Enter the vehicle information required
          by this prototype.
        </p>
      </div>

      <Card>
        <label className="form-label">
          Vehicle number
        </label>

        <input
          className="form-input"
          value={formData.vehicleNumber}
          onChange={(event) =>
            updateField(
              "vehicleNumber",
              event.target.value
            )
          }
          placeholder="Example: ABC-1234"
        />

        <label className="form-label">
          Vehicle category
        </label>

        <select
          className="form-input"
          value={formData.vehicleCategory}
          onChange={(event) =>
            updateField(
              "vehicleCategory",
              event.target.value
            )
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

          <option value="Van">
            Van
          </option>

          <option value="Three Wheeler">
            Three Wheeler
          </option>

          <option value="Motor Lorry">
            Motor Lorry
          </option>
        </select>
      </Card>
    </>
  );
}


function StepTwo({
  formData,
  updateField,
}) {
  return (
    <>
      <div className="flow-title">
        <h1>
          Verification details
        </h1>

        <p>
          Provide the applicable identity
          information for this prototype.
        </p>
      </div>

      <Card>
        <label className="form-label">
          Identity document number
        </label>

        <input
          className="form-input"
          value={formData.identityNumber}
          onChange={(event) =>
            updateField(
              "identityNumber",
              event.target.value
            )
          }
          placeholder="Enter document number"
        />

        <p className="field-help">
          Use synthetic information when
          demonstrating this prototype.
        </p>
      </Card>

      <Alert type="warning">
        <strong>
          Privacy
        </strong>

        <p>
          Do not enter your real NIC, passport,
          OTP, phone number or other sensitive
          information into this academic prototype.
        </p>
      </Alert>
    </>
  );
}


function StepThree({ formData }) {
  return (
    <>
      <div className="flow-title">
        <h1>
          Review your information
        </h1>

        <p>
          Check the information before submitting.
        </p>
      </div>

      <Card>
        <div className="detail-row">
          <span>
            Vehicle number
          </span>

          <strong>
            {formData.vehicleNumber ||
              "Not provided"}
          </strong>
        </div>

        <div className="detail-row">
          <span>
            Vehicle category
          </span>

          <strong>
            {formData.vehicleCategory ||
              "Not provided"}
          </strong>
        </div>

        <div className="detail-row">
          <span>
            Identity information
          </span>

          <strong>
            {formData.identityNumber
              ? "Provided"
              : "Not provided"}
          </strong>
        </div>
      </Card>

      <Alert type="info">
        <strong>
          Prototype submission
        </strong>

        <p>
          Selecting submit will only simulate a
          successful registration result.
        </p>
      </Alert>
    </>
  );
}