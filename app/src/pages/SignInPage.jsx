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
      setError(
        "Please enter both your vehicle number and mobile number."
      );

      return;
    }

    onComplete();
  }

  return (
    <div className="sign-in-page-wrapper">
      <div className="sign-in-page">

        <button
          type="button"
          className="back-button"
          onClick={onBack}
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>

        <div className="sign-in-header">
          <div className="sign-in-icon">
            <LogIn size={30} />
          </div>

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
                Authentication is simulated for this
                academic prototype. No real phone number
                or OTP is required.
              </p>
            </div>

            <div className="sign-in-actions">

              <Button
                type="submit"
                fullWidth
              >
                <LogIn size={18} />
                Sign In
              </Button>

              <button
                type="button"
                className="sign-in-back-button"
                onClick={onBack}
              >
                <ArrowLeft size={18} />
                <span>Back</span>
              </button>

            </div>
          </form>
        </Card>

        <div className="prototype-notice">
          <strong>Academic Prototype</strong>

          <p>
            No real credentials are collected or stored.
          </p>
        </div>

      </div>
    </div>
  );
}