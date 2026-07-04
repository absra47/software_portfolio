type Field = { label: string; value: string };

export default function FieldStrip({ fields }: { fields: Field[] }) {
  return (
    <div className="field-strip grid grid-cols-2 sm:grid-cols-4">
      {fields.map((field) => (
        <div className="field-cell" key={field.label}>
          <span className="field-label">{field.label}</span>
          <span className="field-value">{field.value}</span>
        </div>
      ))}
    </div>
  );
}
