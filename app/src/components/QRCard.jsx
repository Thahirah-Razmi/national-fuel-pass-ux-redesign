import { QrCode } from "lucide-react";
import Card from "./Card";
import StatusBadge from "./StatusBadge";

export default function QRCard({
  vehicleNumber,
  onOpen,
}) {
  return (
    <Card className="qr-card">
      <div className="qr-preview">
        <QrCode size={110} strokeWidth={1.5} />
      </div>

      <div className="qr-card-info">
        <div>
          <span className="label">
            Vehicle
          </span>

          <strong>
            {vehicleNumber}
          </strong>
        </div>

        <StatusBadge>
          Active
        </StatusBadge>
      </div>

      <button
        className="secondary-action"
        onClick={onOpen}
      >
        Open QR Pass
      </button>
    </Card>
  );
}