import {
  ChevronRight,
  Fuel,
  Car,
  QrCode,
  HelpCircle,
} from "lucide-react";

import Card from "../components/Card";
import QRCard from "../components/QRCard";
import { vehicle, allocation } from "../data/mockData";

export default function HomePage({ onNavigate }) {
  const percentage =
    (allocation.used / allocation.total) * 100;

  return (
    <div className="page">
      <div className="home-header">
        <div>
          <p className="eyebrow">
            National Fuel Pass
          </p>

          <h1>Welcome back</h1>

          <p>
            Here is the current status of your vehicle.
          </p>
        </div>
      </div>

      <section>
        <QRCard
          vehicleNumber={vehicle.number}
          onOpen={() => onNavigate("qr")}
        />
      </section>

      <section>
        <Card>
          <div className="section-heading">
            <div>
              <span className="label">
                Vehicle
              </span>

              <h2>{vehicle.number}</h2>
            </div>

            <Car size={24} />
          </div>

          <p>
            {vehicle.category}
          </p>

          <button
            className="text-action"
            onClick={() => onNavigate("vehicle")}
          >
            View vehicle
            <ChevronRight size={18} />
          </button>
        </Card>
      </section>

      <section>
        <Card>
          <div className="section-heading">
            <div>
              <span className="label">
                Fuel allocation
              </span>

              <h2>
                {allocation.total - allocation.used} L remaining
              </h2>
            </div>

            <Fuel size={24} />
          </div>

          <div className="progress-container">
            <div
              className="progress-bar"
              style={{
                width: `${percentage}%`,
              }}
            />
          </div>

          <div className="allocation-meta">
            <span>
              {allocation.used} L used
            </span>

            <span>
              {allocation.total} L total
            </span>
          </div>

          <button
            className="text-action"
            onClick={() => onNavigate("allocation")}
          >
            View allocation
            <ChevronRight size={18} />
          </button>
        </Card>
      </section>

      <section>
        <h2 className="section-title">
          Quick actions
        </h2>

        <div className="quick-actions">
          <button
            onClick={() => onNavigate("qr")}
          >
            <QrCode size={22} />
            <span>QR Pass</span>
          </button>

          <button
            onClick={() => onNavigate("vehicle")}
          >
            <Car size={22} />
            <span>Vehicle</span>
          </button>

          <button
            onClick={() => onNavigate("allocation")}
          >
            <Fuel size={22} />
            <span>Allocation</span>
          </button>

          <button
            onClick={() => onNavigate("help")}
          >
            <HelpCircle size={22} />
            <span>Help</span>
          </button>
        </div>
      </section>

      <div className="prototype-notice">
        Academic UX Engineering prototype.
        Data shown here is synthetic and is not
        connected to the live National Fuel Pass
        service.
      </div>
    </div>
  );
}