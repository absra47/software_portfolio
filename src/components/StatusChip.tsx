export default function StatusChip({ label }: { label: string }) {
  return (
    <span className="status-chip">
      <span className="status-dot" />
      {label}
    </span>
  );
}
