import {
  Globe,
  LogIn,
  UserPlus,
} from "lucide-react";

import Button from "../components/Button";

export default function EntryPage({ onSignIn, onRegister }) {
  return (
    <div className="entry-page-wrapper">
      <div className="entry-page">
        <div className="entry-header">
          <div className="entry-brand">
            <div className="entry-brand-icon">
              <Globe size={28} />
            </div>

            <span>National Fuel Pass</span>
          </div>

          <h1>Welcome</h1>

          <p>
            Access your fuel allocation or register your
            vehicle to get started.
          </p>
        </div>

        <div className="entry-options">
          <section className="entry-option">
            <div className="entry-option-top">
              <div className="entry-icon">
                <LogIn size={22} />
              </div>

              <div className="entry-option-heading">
                <h2>Sign In</h2>

                <span>For registered users</span>
              </div>
            </div>

            <p>
              Already registered? Sign in to view your
              vehicle, QR pass, and fuel allocation.
            </p>

            <Button
              fullWidth
              onClick={onSignIn}
            >
              Sign In
            </Button>
          </section>

          <section className="entry-option">
            <div className="entry-option-top">
              <div className="entry-icon secondary">
                <UserPlus size={22} />
              </div>

              <div className="entry-option-heading">
                <h2>Register</h2>

                <span>For new users</span>
              </div>
            </div>

            <p>
              Register your vehicle and create your Fuel Pass
              profile to get started.
            </p>

            <Button
              fullWidth
              onClick={onRegister}
            >
              Register Vehicle
            </Button>
          </section>
        </div>

        <div className="prototype-notice entry-prototype-notice">
          <strong>Academic Prototype</strong>

          <p>
            This is a simulated UX Engineering prototype.
            It does not connect to the live National Fuel
            Pass system.
          </p>
        </div>
      </div>
    </div>
  );
}