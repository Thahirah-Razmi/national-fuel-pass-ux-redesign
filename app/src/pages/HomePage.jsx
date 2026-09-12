import {
  QrCode,
  Car,
  Fuel,
  History,
  HelpCircle,
  ArrowRight,
  AlertTriangle,
} from "lucide-react";

import Card from "../components/Card";
import StatusBadge from "../components/StatusBadge";
import { vehicle, allocation, support } from "../data/mockData";

export default function HomePage({ onNavigate }) {
  return (
    <div className="home-page">
      <header className="home-header">
        <span className="home-brand">NATIONAL FUEL PASS</span>

        <h1>Welcome back</h1>

        <p>Academic Prototype · Demo Data</p>
      </header>

      <button
        className="qr-pass-card"
        onClick={() => onNavigate("qr")}
      >
        <div className="qr-pass-icon">
          <QrCode size={28} strokeWidth={1.8} />
        </div>

        <div className="qr-pass-content">
          <strong>View QR Pass</strong>
          <span>Show at the fuel station</span>
        </div>

        <ArrowRight size={20} />
      </button>

      <section className="dashboard-section">
        <div className="section-heading">
          <div>
            <h2>Fuel Allocation</h2>
          </div>

          <StatusBadge status="Active" />
        </div>

        <Card className="allocation-card">
          <div className="allocation-main">
            <span className="allocation-label">
              Remaining this week
            </span>

            <strong className="allocation-value">
              {allocation.remaining} L
            </strong>
          </div>

          <div className="allocation-progress">
            <div
              className="allocation-progress-bar"
              style={{
                width: `${(allocation.used / allocation.total) * 100
                  }%`,
              }}
            />
          </div>

          <div className="allocation-stats">
            <span>
              Used: <strong>{allocation.used} L</strong>
            </span>

            <span>
              Total: <strong>{allocation.total} L</strong>
            </span>
          </div>

          <p className="allocation-reset">
            Resets {allocation.reset}
          </p>

          <button
            className="text-link"
            onClick={() => onNavigate("allocation")}
          >
            View Allocation Details
            <ArrowRight size={16} />
          </button>
        </Card>
      </section>

      <section className="dashboard-section">
        <div className="section-heading">
          <h2>Registered Vehicle</h2>
        </div>

        <Card className="vehicle-summary-card">
          <div className="vehicle-summary-top">
            <div>
              <strong className="vehicle-number">
                {vehicle.number}
              </strong>

              <span className="vehicle-category">
                {vehicle.category}
              </span>
            </div>

            <StatusBadge status="Active" />
          </div>

          <button
            className="text-link"
            onClick={() => onNavigate("vehicle")}
          >
            Vehicle Details
            <ArrowRight size={16} />
          </button>
        </Card>
      </section>

      <section className="dashboard-section">
        <div className="section-heading">
          <h2>Quick Actions</h2>
        </div>

        <div className="quick-actions">
          <button onClick={() => onNavigate("qr")}>
            <QrCode size={21} />
            <span>QR Pass</span>
          </button>

          <button onClick={() => onNavigate("vehicle")}>
            <Car size={21} />
            <span>Vehicle</span>
          </button>

          <button onClick={() => onNavigate("allocation")}>
            <Fuel size={21} />
            <span>Allocation</span>
          </button>

          <button onClick={() => onNavigate("history")}>
            <History size={21} />
            <span>History</span>
          </button>
        </div>
      </section>

      <div className="service-notice">
        <div className="service-notice-icon">
          <HelpCircle size={18} />
        </div>

        <p>
          <strong>Service Notice:</strong> Fuel allocation is
          updated weekly. Contact support on{" "}
          <strong>{support.whatsapp}</strong> if you
          experience issues.
        </p>
      </div>

      <div className="prototype-disclaimer">
        <AlertTriangle size={16} />

        <span>
          Academic prototype — not an official government
          application
        </span>
      </div>
    </div>
  );
}