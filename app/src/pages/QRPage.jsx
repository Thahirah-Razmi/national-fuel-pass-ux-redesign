import { useState } from "react";
import {
  ArrowLeft,
  CheckCircle,
  HelpCircle,
  QrCode,
  RotateCcw,
  ShieldCheck,
  XCircle,
} from "lucide-react";

import Button from "../components/Button";
import Card from "../components/Card";
import Alert from "../components/Alert";
import StatusBadge from "../components/StatusBadge";

export default function QRPage({ onBack, onNavigate }) {
  const [verificationState, setVerificationState] = useState("idle");

  function simulateVerification() {
    setVerificationState("success");
  }

  function simulateFailure() {
    setVerificationState("failure");
  }

  function resetVerification() {
    setVerificationState("idle");
  }

  if (verificationState === "success") {
    return (
      <div className="page">
        <button
          className="back-button"
          onClick={onBack}
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <div className="verification-result success">
          <div className="verification-icon">
            <CheckCircle size={56} />
          </div>

          <h1>Verification successful</h1>

          <p>
            The QR verification simulation was successful.
          </p>
        </div>

        <Card>
          <div className="detail-row">
            <span>Vehicle</span>
            <strong>ABC-1234</strong>
          </div>

          <div className="detail-row">
            <span>Status</span>
            <StatusBadge type="success">
              Verified
            </StatusBadge>
          </div>
        </Card>

        <Alert
          type="success"
          title="Ready to continue"
        >
          This prototype represents a successful verification
          state. It does not connect to a real fuel station.
        </Alert>

        <Button
          fullWidth
          variant="secondary"
          onClick={resetVerification}
        >
          <RotateCcw size={18} />
          Back to QR Pass
        </Button>
      </div>
    );
  }

  if (verificationState === "failure") {
    return (
      <div className="page">
        <button
          className="back-button"
          onClick={onBack}
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
          Back
        </button>

        <div className="verification-result failure">
          <div className="verification-icon">
            <XCircle size={56} />
          </div>

          <h1>Verification could not be completed</h1>

          <p>
            The QR verification simulation returned a
            failure state.
          </p>
        </div>

        <Card>
          <h2>What can you try?</h2>

          <div className="recovery-list">
            <div className="recovery-item">
              <QrCode size={20} />

              <div>
                <strong>Show the QR again</strong>
                <p>
                  Return to your QR Pass and try the
                  verification again.
                </p>
              </div>
            </div>

            <div className="recovery-item">
              <ShieldCheck size={20} />

              <div>
                <strong>Check your pass status</strong>
                <p>
                  Make sure the vehicle shown on the pass
                  is the correct vehicle.
                </p>
              </div>
            </div>

            <div className="recovery-item">
              <HelpCircle size={20} />

              <div>
                <strong>Get support</strong>
                <p>
                  Contact the official support channel if
                  the issue continues.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="verification-actions">
          <Button
            fullWidth
            onClick={resetVerification}
          >
            <RotateCcw size={18} />
            Try Again
          </Button>

          <Button
            fullWidth
            variant="secondary"
            onClick={() => onNavigate("help")}
          >
            <HelpCircle size={18} />
            Get Help
          </Button>
        </div>

        <div className="prototype-notice">
          <strong>Prototype Simulation</strong>

          <p>
            This failure state is simulated for UX testing.
            It does not represent a measured failure rate or
            a confirmed technical cause.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <button
        className="back-button"
        onClick={onBack}
        aria-label="Go back"
      >
        <ArrowLeft size={20} />
        Back
      </button>

      <div className="page-header">
        <div>
          <span className="prototype-label">
            FUEL PASS
          </span>

          <h1>QR Pass</h1>

          <p>
            Present this QR pass when verification is
            required.
          </p>
        </div>
      </div>

      <Card>
        <div className="qr-card">
          <div className="qr-placeholder">
            <QrCode size={150} strokeWidth={1.5} />
          </div>

          <StatusBadge type="success">
            Active
          </StatusBadge>

          <h2>ABC-1234</h2>

          <p>Motor Car</p>
        </div>
      </Card>

      <Alert
        type="info"
        title="Prototype QR"
      >
        This QR is a visual simulation for the academic
        prototype. It is not a live National Fuel Pass
        credential.
      </Alert>

      <Card>
        <h2>Verification</h2>

        <p className="card-description">
          Use the buttons below to demonstrate different
          verification states during prototype testing.
        </p>

        <div className="verification-actions">
          <Button
            fullWidth
            onClick={simulateVerification}
          >
            <CheckCircle size={18} />
            Simulate Successful Verification
          </Button>

          <Button
            fullWidth
            variant="secondary"
            onClick={simulateFailure}
          >
            <XCircle size={18} />
            Simulate Verification Failure
          </Button>
        </div>
      </Card>

      <div className="prototype-notice">
        <strong>Academic Prototype</strong>

        <p>
          Verification behavior is simulated. Actual
          station hardware, connectivity, scanning behavior,
          and transaction processing have not been established
          by this prototype.
        </p>
      </div>
    </div>
  );
}