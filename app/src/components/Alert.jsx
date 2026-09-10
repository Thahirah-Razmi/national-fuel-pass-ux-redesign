import {
  AlertTriangle,
  CheckCircle,
  Info,
} from "lucide-react";

export default function Alert({
  type = "info",
  children,
}) {
  const icons = {
    info: <Info size={20} />,
    warning: <AlertTriangle size={20} />,
    success: <CheckCircle size={20} />,
  };

  return (
    <div className={`alert alert-${type}`}>
      {icons[type]}
      <div>{children}</div>
    </div>
  );
}