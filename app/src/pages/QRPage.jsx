import {
  QrCode,
  ShieldCheck,
  AlertTriangle,
  HelpCircle,
} from "lucide-react";

import Card from "../components/Card";
import Alert from "../components/Alert";
import StatusBadge from "../components/StatusBadge";
import PageHeader from "../components/PageHeader";

import { vehicle } from "../data/mockData";

export default function QRPage({
  onBack,
  onNavigate,
}) {
  return (
    <div className="page">
      <PageHeader
        title="QR Pass"
        subtitle="Present this QR code when required."
        onBack={onBack}
      />

      <section>
        <Card className="qr-main-card">
          <div className="qr-main-container">
            <div className="qr-large">
              <QrCode
                size={190}
                strokeWidth={1.2}
              />
            </div>

            <p className="qr-label">
              Vehicle QR Pass
            </p>

            <h2>{vehicle.number}</h2>

            <StatusBadge>
              Active
            </StatusBadge>
          </div>
        </Card>
      </section>

      <section>
        <Alert type="info">
          <strong>
            Prototype QR code
          </strong>

          <p>
            This is a synthetic QR representation
            for the academic prototype. It is not
            a real fuel allocation credential.
          </p>
        </Alert>
      </section>

      <section>
        <Card>
          <div className="info-row">
            <ShieldCheck size={22} />

            <div>
              <strong>
                Keep your vehicle details visible
              </strong>

              <p>
                Make sure the vehicle information
                shown with the QR pass matches the
                vehicle you are using.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <Card>
          <div className="info-row">
            <AlertTriangle size={22} />

            <div>
              <strong>
                Verification problem?
              </strong>

              <p>
                If your QR pass cannot be verified,
                check the displayed information and
                follow the available recovery or
                support guidance.
              </p>
            </div>
          </div>

          <button
            className="text-action"
            onClick={() => onNavigate("help")}
          >
            <HelpCircle size={18} />
            QR verification help
          </button>
        </Card>
      </section>

      <div className="prototype-notice">
        Academic UX Engineering prototype.
        QR verification is simulated and does not
        connect to a live station system.
      </div>
    </div>
  );
}