import { ArrowLeft } from "lucide-react";

export default function PageHeader({
  title,
  subtitle,
  onBack,
}) {
  return (
    <header className="page-header">
      {onBack && (
        <button
          className="icon-button"
          onClick={onBack}
          aria-label="Go back"
        >
          <ArrowLeft size={22} />
        </button>
      )}

      <div>
        <h1>{title}</h1>

        {subtitle && (
          <p>{subtitle}</p>
        )}
      </div>
    </header>
  );
}