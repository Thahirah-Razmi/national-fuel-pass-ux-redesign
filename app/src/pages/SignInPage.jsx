import { useState } from "react";
import { ArrowLeft, LogIn } from "lucide-react";

import Button from "../components/Button";
import Card from "../components/Card";
import Alert from "../components/Alert";

export default function SignInPage({ onBack, onComplete }) {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setError("");

    if (!vehicleNumber.trim() || !phoneNumber.trim()) {
      setError("Please enter both your vehicle number and mobile number.");
      return;
    }

    // Simulated authentication only.
    onComplete();
  }

  return (
    <div className="flow-page">
      <button
        className="back-button"
        onClick={onBack}
        aria-label="Go back"
      >
        <ArrowLeft size={20} />
        Back
      </button>

      <div className="flow-header">
        <span className="prototype-label">
          SIGN IN
        </span>

        <h1>Welcome back</h1>

        <p>
          Enter your registered vehicle and mobile
          number to continue.
        </p>
      </div>

      <Card>
        <form
          className="form"
          onSubmit={handleSubmit}
        >
          {error && (
            <Alert
              type="warning"
              title="Check your details"
            >
              {error}
            </Alert>
          )}

          <div className="form-group">
            <label htmlFor="vehicleNumber">
              Vehicle number
            </label>

            <input
              id="vehicleNumber"
              type="text"
              placeholder="e.g. ABC-1234"
              value={vehicleNumber}
              onChange={(event) =>
                setVehicleNumber(event.target.value)
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">
              Mobile number
            </label>

            <input
              id="phoneNumber"
              type="tel"
              placeholder="Enter your mobile number"
              value={phoneNumber}
              onChange={(event) =>
                setPhoneNumber(event.target.value)
              }
            />
          </div>

          <div className="form-help">
            <strong>Prototype note</strong>

            <p>
              Authentication is simulated for this academic
              prototype. No real phone number or OTP is
              required.
            </p>
          </div>

          <Button
            type="submit"
            fullWidth
          >
            <LogIn size={18} />
            Sign In
          </Button>
        </form>
      </Card>

      <div className="prototype-notice">
        <strong>Academic Prototype</strong>

        <p>
          No real credentials are collected or stored.
        </p>
      </div>
    </div>
  );
}