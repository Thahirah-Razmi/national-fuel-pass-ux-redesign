export default function StatusBadge({
  children,
  type = "success",
}) {
  return (
    <span className={`status-badge status-${type}`}>
      {children}
    </span>
  );
}