import {
  Home,
  QrCode,
  Car,
  Fuel,
  HelpCircle,
} from "lucide-react";

const items = [
  {
    id: "home",
    label: "Home",
    icon: Home,
  },
  {
    id: "qr",
    label: "QR",
    icon: QrCode,
  },
  {
    id: "vehicle",
    label: "Vehicle",
    icon: Car,
  },
  {
    id: "allocation",
    label: "Allocation",
    icon: Fuel,
  },
  {
    id: "help",
    label: "Help",
    icon: HelpCircle,
  },
];

export default function BottomNavigation({
  currentPage,
  onNavigate,
}) {
  return (
    <nav className="bottom-navigation">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            className={
              currentPage === item.id
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() => onNavigate(item.id)}
          >
            <Icon size={21} />

            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}