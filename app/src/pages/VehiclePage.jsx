import {
  Car,
  Phone,
  UserRound,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";

import Card from "../components/Card";
import StatusBadge from "../components/StatusBadge";
import Alert from "../components/Alert";
import PageHeader from "../components/PageHeader";

import { vehicle } from "../data/mockData";

export default function VehiclePage({
  onBack,
  onNavigate,
}) {
  return (
    <div className="page">
      <PageHeader
        title="Vehicle"
        subtitle="View your registered vehicle information."
        onBack={onBack}
      />

      <section>
        <Card>
          <div className="vehicle-title">
            <div className="vehicle-icon">
              <Car size={28} />
            </div>

            <div>
              <span className="label">
                Vehicle number
              </span>

              <h2>{vehicle.number}</h2>
            </div>
          </div>

          <div className="vehicle-status">
            <span className="label">
              Registration status
            </span>

            <StatusBadge>
              {vehicle.registrationStatus}
            </StatusBadge>
          </div>
        </Card>
      </section>

      <section>
        <h2 className="section-title">
          Vehicle details
        </h2>

        <Card>
          <div className="detail-row">
            <span>
              Vehicle number
            </span>

            <strong>
              {vehicle.number}
            </strong>
          </div>

          <div className="detail-row">
            <span>
              Vehicle category
            </span>

            <strong>
              {vehicle.category}
            </strong>
          </div>

          <div className="detail-row">
            <span>
              Registration status
            </span>

            <StatusBadge>
              {vehicle.registrationStatus}
            </StatusBadge>
          </div>
        </Card>
      </section>

      <section>
        <h2 className="section-title">
          Ownership & contact
        </h2>

        <Card>
          <button
            className="list-action"
            onClick={() => onNavigate("ownership")}
          >
            <div className="list-action-icon">
              <UserRound size={20} />
            </div>

            <div className="list-action-content">
              <strong>
                Ownership change
              </strong>

              <span>
                Guidance for a vehicle ownership change
              </span>
            </div>

            <ChevronRight size={20} />
          </button>

          <button
            className="list-action"
            onClick={() => onNavigate("ownership")}
          >
            <div className="list-action-icon">
              <Phone size={20} />
            </div>

            <div className="list-action-content">
              <strong>
                Contact number change
              </strong>

              <span>
                Guidance when your registered contact
                number changes
              </span>
            </div>

            <ChevronRight size={20} />
          </button>
        </Card>
      </section>

      <section>
        <Alert type="warning">
          <strong>
            Important
          </strong>

          <p>
            Changes to vehicle or ownership information
            may require re-registration or additional
            verification according to the applicable
            service process.
          </p>
        </Alert>
      </section>

      <div className="prototype-notice">
        Vehicle information shown here is synthetic
        prototype data and is not retrieved from the
        Department of Motor Traffic or National Fuel
        Pass systems.
      </div>
    </div>
  );
}