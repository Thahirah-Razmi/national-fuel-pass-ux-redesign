import { LogIn, UserPlus } from "lucide-react";

import Button from "../components/Button";
import Card from "../components/Card";

export default function EntryPage({ onSignIn, onRegister }) {
  return (
    <div className="flow-page">
      <div className="flow-header">
        <span className="prototype-label">
          NATIONAL FUEL PASS
        </span>

        <h1>Welcome</h1>

        <p>
          Access your fuel allocation or register your
          vehicle to get started.
        </p>
      </div>

      <div className="entry-options">
        <Card>
          <div className="entry-icon">
            <LogIn size={28} />
          </div>

          <h2>Sign In</h2>

          <p>
            Already registered? Sign in to view your
            vehicle, QR pass and fuel allocation.
          </p>

          <Button
            fullWidth
            onClick={onSignIn}
          >
            Sign In
          </Button>
        </Card>

        <Card>
          <div className="entry-icon secondary">
            <UserPlus size={28} />
          </div>

          <h2>Register</h2>

          <p>
            Register a vehicle and create your Fuel Pass
            profile.
          </p>

          <Button
            fullWidth
            variant="secondary"
            onClick={onRegister}
          >
            Register Vehicle
          </Button>
        </Card>
      </div>

      <div className="prototype-notice">
        <strong>Academic Prototype</strong>
        <p>
          This is a simulated UX Engineering prototype.
          It does not connect to the live National Fuel
          Pass system.
        </p>
      </div>
    </div>
  );
}