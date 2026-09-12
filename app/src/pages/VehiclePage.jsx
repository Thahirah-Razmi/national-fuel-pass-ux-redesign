import {
  UserRound,
  Phone,
  ChevronRight,
} from "lucide-react";

import Card from "../components/Card";
import StatusBadge from "../components/StatusBadge";
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
        subtitle=""
        onBack={onBack}
      />

      <section>
        <h2 className="section-title">
          Vehicle Information
        </h2>

        <Card>
          <div className="detail-row">
            <span>
              Registration No.
            </span>

            <strong>
              {vehicle.number}
            </strong>
          </div>

          <div className="detail-row">
            <span>
              Category
            </span>

            <strong>
              {vehicle.category}
            </strong>
          </div>

          <div className="detail-row">
            <span>
              Status
            </span>

            <StatusBadge>
              {vehicle.registrationStatus}
            </StatusBadge>
          </div>
        </Card>
      </section>

      <section>
        <h2 className="section-title">
          Ownership Information
        </h2>

        <Card>
          <div className="detail-row">
            <span>
              Document Type
            </span>

            <strong>
              NIC
            </strong>
          </div>

          <div className="detail-row">
            <span>
              NIC Number
            </span>

            <strong>
              200012•••78
            </strong>
          </div>

          <div className="detail-row">
            <span>
              Mobile
            </span>

            <strong>
              071 •••• 5678
            </strong>
          </div>

          <div className="detail-row">
            <span>
              Registered
            </span>

            <strong>
              Sep 2026
            </strong>
          </div>
        </Card>
      </section>

      <section>
        <h2 className="section-title">
          Update Information
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
                Ownership Change
              </strong>
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
                Change Contact Number
              </strong>
            </div>

            <ChevronRight size={20} />
          </button>
        </Card>
      </section>

      <section className="vehicle-support">
        <p>
          Need help with your vehicle information?
          Contact support on{" "}
          <strong>076 013 9886</strong>{" "}
          or visit the Help section.
        </p>
      </section>

      <div className="prototype-notice">
        ⚠ Academic prototype — not an official
        government application
      </div>
    </div>
  );
}