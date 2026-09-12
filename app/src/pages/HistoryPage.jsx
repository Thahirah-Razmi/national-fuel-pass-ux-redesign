import {
  CheckCircle,
  Fuel,
} from "lucide-react";

import Card from "../components/Card";
import PageHeader from "../components/PageHeader";

import { history, vehicle } from "../data/mockData";

export default function HistoryPage({
  onBack,
}) {
  return (
    <div className="page">
      <PageHeader
        title="Transaction History"
        subtitle=""
        onBack={onBack}
      />

      <section className="history-summary">
        <div className="history-vehicle">
          <strong>{vehicle.number}</strong>

          <span>
            {history.length}{" "}
            {history.length === 1
              ? "record"
              : "records"}
          </span>
        </div>

        <p>
          Demonstration data only. Transactions shown
          are not real records.
        </p>
      </section>

      <section>
        <Card>
          <div className="history-list">
            {history.map((item) => (
              <div
                className="history-item"
                key={item.id}
              >
                <div className="history-icon">
                  <CheckCircle size={20} />
                </div>

                <div className="history-content">
                  <div className="history-main">
                    <div>
                      <strong className="history-station">
                        {item.station}
                      </strong>

                      <span className="history-date">
                        {item.date}
                      </span>
                    </div>

                    <div className="history-amount">
                      <strong>
                        {item.amount}
                      </strong>

                      <span className="history-status">
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="history-end">
        <strong>
          No further records found.
        </strong>

        <p>
          Future transactions will appear here
          after scanning.
        </p>
      </section>

      <div className="prototype-notice">
        ⚠ Academic prototype — not an official
        government application
      </div>
    </div>
  );
}