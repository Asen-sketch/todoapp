// common combobox component for the filters
function FilterBox({label, options, value, onChange}) {
  return (
    <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap'}}>
      <label style={{ fontWeight: '600' }}>{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} style={{
          padding: '0.4rem 0.7rem',
          borderRadius: '6px',
          border: '1px solid #d2b48c',
          fontSize: '1rem',
          color: '#4b3f33',
          fontFamily: 'serif',
          cursor: 'pointer',
          boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.05)',
          minWidth: '100px',
        }}
      >
        {/* mapping the filter options from previous code */}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterBox;
