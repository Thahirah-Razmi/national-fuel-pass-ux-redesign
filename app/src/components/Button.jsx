export default function Button({
  children,
  onClick,
  variant = "primary",
  fullWidth = false,
  type = "button",
}) {
  return (
    <button
      type={type}
      className={`button button-${variant} ${
        fullWidth ? "button-full" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}