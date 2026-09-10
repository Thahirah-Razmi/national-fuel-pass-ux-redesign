import {
  Search,
  MessageCircle,
  ChevronRight,
  QrCode,
  Car,
  Fuel,
  UserRound,
} from "lucide-react";

import Card from "../components/Card";
import Alert from "../components/Alert";
import PageHeader from "../components/PageHeader";

import { support } from "../data/mockData";

const topics = [
  {
    id: "registration",
    title: "Registration",
    description:
      "Registration and vehicle information",
    icon: Car,
  },
  {
    id: "ownership",
    title: "Ownership or contact change",
    description:
      "What to do when your vehicle or contact information changes",
    icon: UserRound,
  },
  {
    id: "qr",
    title: "QR verification",
    description:
      "Problems presenting or verifying your QR pass",
    icon: QrCode,
  },
  {
    id: "allocation",
    title: "Fuel allocation",
    description:
      "Understand allocation and reset information",
    icon: Fuel,
  },
];

export default function HelpPage({
  onBack,
  onNavigate,
}) {
  return (
    <div className="page">
      <PageHeader
        title="Help & support"
        subtitle="Find guidance or contact official support."
        onBack={onBack}
      />

      <section>
        <div className="search-box">
          <Search size={20} />

          <input
            type="text"
            placeholder="Search help topics"
            aria-label="Search help topics"
          />
        </div>
      </section>

      <section>
        <h2 className="section-title">
          Common topics
        </h2>

        <Card>
          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <button
                className="list-action"
                key={topic.id}
                onClick={() => {
                  if (topic.id === "registration") {
                    onNavigate("registration");
                  } else if (topic.id === "ownership") {
                    onNavigate("ownership");
                  } else if (topic.id === "qr") {
                    onNavigate("qr");
                  } else if (topic.id === "allocation") {
                    onNavigate("allocation");
                  }
                }}
              >
                <div className="list-action-icon">
                  <Icon size={20} />
                </div>

                <div className="list-action-content">
                  <strong>
                    {topic.title}
                  </strong>

                  <span>
                    {topic.description}
                  </span>
                </div>

                <ChevronRight size={20} />
              </button>
            );
          })}
        </Card>
      </section>

      <section>
        <h2 className="section-title">
          Official support
        </h2>

        <Card>
          <div className="support-heading">
            <div className="support-icon">
              <MessageCircle size={25} />
            </div>

            <div>
              <span className="label">
                WhatsApp support
              </span>

              <h2>
                {support.whatsapp}
              </h2>
            </div>
          </div>

          <p>
            Use the currently published support
            channel when you need assistance with
            the service.
          </p>

          <button
            className="button button-primary button-full"
            onClick={() => { }}
          >
            <MessageCircle size={18} />
            Contact support
          </button>
        </Card>
      </section>

      <section>
        <Alert type="warning">
          <strong>
            Protect your information
          </strong>

          <p>
            Do not share passwords, OTPs or other
            sensitive credentials through unofficial
            channels.
          </p>
        </Alert>
      </section>

      <div className="prototype-notice">
        This prototype provides a simplified support
        experience. Internal support workflows and
        escalation systems are not represented because
        they have not been established by the research.
      </div>
    </div>
  );
}