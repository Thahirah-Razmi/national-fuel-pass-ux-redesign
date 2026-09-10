import {
  Fuel,
  Clock3,
  Info,
  History,
} from "lucide-react";

import Card from "../components/Card";
import Alert from "../components/Alert";
import PageHeader from "../components/PageHeader";

import {
  vehicle,
  allocation,
} from "../data/mockData";

export default function AllocationPage({
  onBack,
  onNavigate,
}) {
  const percentage =
    (allocation.used / allocation.total) * 100;

  return (
    <div className="page">
      <PageHeader
        title="Fuel allocation"
        subtitle="Understand your current allocation."
        onBack={onBack}
      />

      <section>
        <Card className="allocation-main-card">
          <div className="allocation-icon">
            <Fuel size={30} />
          </div>

          <span className="label">
            Remaining allocation
          </span>

          <div className="allocation-number">
            {allocation.total - allocation.used}
            <span>L</span>
          </div>

          <p>
            out of {allocation.total} L
          </p>

          <div className="progress-container large">
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
        </Card>
      </section>

      <section>
        <Card>
          <div className="info-row">
            <Clock3 size={22} />

            <div>
              <span className="label">
                Allocation reset
              </span>

              <strong>
                {allocation.reset}
              </strong>

              <p>
                The current prototype reflects the
                published reset timing used for the
                current service.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section>
        <h2 className="section-title">
          Vehicle
        </h2>

        <Card>
          <div className="detail-row">
            <span>
              Vehicle
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
                Allocation history
              </strong>

              <span>
                View previous prototype transactions
              </span>
            </div>
          </button>
        </Card>
      </section>

      <section>
        <Alert type="info">
          <strong>
            About your allocation
          </strong>

          <p>
            Allocation values displayed in this
            prototype are synthetic demonstration
            data. They do not represent your actual
            account balance.
          </p>
        </Alert>
      </section>

      <div className="prototype-notice">
        Academic UX Engineering prototype.
        Allocation information is simulated and
        does not connect to a live government system.
      </div>
    </div>
  );
}