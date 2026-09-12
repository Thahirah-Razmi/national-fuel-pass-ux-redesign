import { useState } from "react";

import {
  ChevronRight,
  QrCode,
  Car,
  Fuel,
  UserRound,
  Phone,
  ClipboardList,
  HelpCircle,
  MessageCircle,
  ShieldAlert,
} from "lucide-react";

import Card from "../components/Card";
import PageHeader from "../components/PageHeader";

import { support } from "../data/mockData";

const topics = [
  {
    id: "registration",
    title: "Registration",
    icon: ClipboardList,
    navigateTo: "registration",
  },
  {
    id: "qr",
    title: "QR Pass",
    icon: QrCode,
    navigateTo: "qr",
  },
  {
    id: "allocation",
    title: "Fuel Allocation",
    icon: Fuel,
    navigateTo: "allocation",
  },
  {
    id: "vehicle",
    title: "Vehicle Information",
    icon: Car,
    navigateTo: "vehicle",
  },
  {
    id: "ownership",
    title: "Ownership Change",
    icon: UserRound,
    navigateTo: "ownership",
  },
  {
    id: "contact",
    title: "Contact Number Change",
    icon: Phone,
    navigateTo: "ownership",
  },
];

const faqs = [
  {
    id: "register",
    title: "How do I register my vehicle?",
    answer:
      "Select Register from the home screen, enter your vehicle registration number, category, and identity details, then submit. Verification may take 1–2 working days.",
  },
  {
    id: "qr-help",
    title: "My QR Pass is not working. What should I do?",
    answer:
      "Ensure your screen brightness is at maximum. If the issue persists, contact support on 076 013 9886.",
  },
  {
    id: "allocation-reset",
    title: "When does my fuel allocation reset?",
    answer:
      "Your weekly fuel allocation resets every Saturday at midnight. Unused allocation does not carry over.",
  },
  {
    id: "ownership-help",
    title: "How do I change my vehicle ownership?",
    answer:
      "Go to Vehicle → Update Vehicle → Ownership Changed. You will need to visit a service centre with the required documents.",
  },
  {
    id: "support-contact",
    title: "Who should I contact for support?",
    answer:
      "Call or WhatsApp 076 013 9886 for support. Official support hours are 8 AM – 5 PM on working days.",
  },
];

export default function HelpPage({
  onBack,
  onNavigate,
}) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="page">

      <PageHeader
        title="Help & Support"
        subtitle=""
        onBack={onBack}
      />

      <section>
        <h2 className="section-title">
          Common Topics
        </h2>

        <Card>
          <div className="help-topic-list">
            {topics.map((topic) => {
              const Icon = topic.icon;

              return (
                <button
                  className="help-topic"
                  key={topic.id}
                  onClick={() =>
                    onNavigate(topic.navigateTo)
                  }
                >
                  <div className="help-topic-icon">
                    <Icon size={20} />
                  </div>

                  <span className="help-topic-title">
                    {topic.title}
                  </span>

                  <ChevronRight size={19} />
                </button>
              );
            })}
          </div>
        </Card>
      </section>

      <section>
        <h2 className="section-title">
          Frequently Asked Questions
        </h2>

        <Card>
          <div className="faq-list">
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.id;

              return (
                <div
                  className={`faq-item ${
                    isOpen ? "faq-item-open" : ""
                  }`}
                  key={faq.id}
                >

                  <button
                    className="faq-question"
                    onClick={() =>
                      setOpenFaq(
                        isOpen ? null : faq.id
                      )
                    }
                    aria-expanded={isOpen}
                  >
                    <div className="faq-icon">
                      <HelpCircle size={19} />
                    </div>

                    <span>
                      {faq.title}
                    </span>

                    <ChevronRight
                      size={19}
                      className={
                        isOpen
                          ? "faq-chevron-open"
                          : ""
                      }
                    />
                  </button>

                  {isOpen && (
                    <div className="faq-answer">
                      {faq.answer}
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </Card>
      </section>

      <section>
        <h2 className="section-title">
          Official Support
        </h2>

        <Card>
          <div className="official-support">

            <div className="support-icon">
              <MessageCircle size={25} />
            </div>

            <div className="official-support-content">

              <strong>
                {support.whatsapp}
              </strong>

              <span>
                WhatsApp & Call · 8 AM – 5 PM
              </span>

            </div>

          </div>
        </Card>
      </section>

      <section>
        <div className="fraud-warning">

          <div className="fraud-warning-icon">
            <ShieldAlert size={20} />
          </div>

          <div>

            <strong>
              Fraud Warning
            </strong>

            <p>
              The National Fuel Pass does not ask
              for passwords, PINs, or payment via
              SMS or phone. Report suspicious
              contacts to{" "}
              <strong>
                {support.whatsapp}
              </strong>.
            </p>

          </div>

        </div>
      </section>

      <div className="prototype-notice">
        ⚠ Academic prototype — not an official
        government application
      </div>

    </div>
  );
}