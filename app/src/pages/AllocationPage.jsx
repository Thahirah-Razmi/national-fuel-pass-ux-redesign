import {
  Fuel,
  Clock3,
  History,
} from "lucide-react";

import Card from "../components/Card";
import PageHeader from "../components/PageHeader";

import {
  vehicle,
  allocation,
} from "../data/mockData";

export default function AllocationPage({
  onBack,
  onNavigate,
}) {
  const remaining =
    allocation.total - allocation.used;

  const percentage =
    (allocation.used / allocation.total) * 100;

  return (
    <div className="page">
      <PageHeader
        title="Fuel Allocation"
        subtitle=""
        onBack={onBack}
      />

      <section>
        <div className="vehicle-status">
          <strong>{vehicle.number}</strong>

          <span className="status-badge">
            Active
          </span>
        </div>
      </section>

      <section>
        <Card className="allocation-main-card">
          <span className="label">
            Remaining Allocation
          </span>

          <div className="allocation-number">
            {remaining}
            <span>L</span>
          </div>

          <div className="allocation-summary">
            <span>
              {allocation.used} L used
            </span>

            <span>
              {allocation.total} L total
            </span>
          </div>

          <div className="progress-container large">
            <div
              className="progress-bar"
              style={{
                width: `${percentage}%`,
              }}
            />
          </div>
        </Card>
      </section>

      <section>
        <h2 className="section-title">
          Allocation Details
        </h2>

        <Card>
          <div className="detail-row">
            <span>Total Allocation</span>

            <strong>
              {allocation.total} L
            </strong>
          </div>

          <div className="detail-row">
            <span>Used This Cycle</span>

            <strong>
              {allocation.used} L
            </strong>
          </div>

          <div className="detail-row">
            <span>Remaining</span>

            <strong>
              {remaining} L
            </strong>
          </div>

          <div className="detail-row">
            <span>Allocation Reset</span>

            <strong>
              {allocation.reset}
            </strong>
          </div>

          <div className="detail-row">
            <span>Vehicle Category</span>

            <strong>
              {vehicle.category}
            </strong>
          </div>
        </Card>
      </section>

      <section>
        <Card className="allocation-info-card">
          <div className="info-row">
            <Clock3 size={22} />

            <div>
              <strong>
                How allocation works
              </strong>

              <p>
                Your weekly fuel allocation resets
                every Saturday at midnight. Unused
                allocation does not carry over to
                the next cycle.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <Card>
          <button
            className="list-action"
            onClick={() => onNavigate("history")}
          >
            <div className="list-action-icon">
              <History size={20} />
            </div>

            <div className="list-action-content">
              <strong>
                View Transaction History
              </strong>
            </div>
          </button>
        </Card>
      </section>

      <div className="prototype-notice">
        ⚠ Academic prototype — not an official
        government application
      </div>
    </div>
  );
}