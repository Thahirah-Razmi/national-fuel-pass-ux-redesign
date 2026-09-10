import {
  CheckCircle,
  CalendarDays,
  MapPin,
} from "lucide-react";

import Card from "../components/Card";
import PageHeader from "../components/PageHeader";

import { history } from "../data/mockData";

export default function HistoryPage({
  onBack,
}) {
  return (
    <div className="page">
      <PageHeader
        title="Activity"
        subtitle="View previous prototype transactions."
        onBack={onBack}
      />

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
                <div className="history-title">
                  <strong>
                    {item.amount}
                  </strong>

                  <span className="history-status">
                    {item.status}
                  </span>
                </div>

                <div className="history-detail">
                  <CalendarDays size={15} />

                  <span>
                    {item.date}
                  </span>
                </div>

                <div className="history-detail">
                  <MapPin size={15} />

                  <span>
                    {item.station}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="prototype-notice">
        Activity data shown here is synthetic
        demonstration data. It does not represent
        actual fuel transactions.
      </div>
    </div>
  );
}