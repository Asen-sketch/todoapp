// common button component
function TodoButton({onClick, label}) {
  return (
    <button onClick={onClick} style={{
        padding: '0.4rem 0.8rem',
        minHeight: '2.35rem',
        backgroundColor: '#f5deb3',
        color: '#5b4636',
        border: '1px solid #d2b48c',
        borderRadius: '6px',
        fontSize: '0.9rem',
        cursor: 'pointer',
        fontFamily: 'serif',
        fontWeight: '600',
        transition: 'background-color 0.3s ease, transform 0.2s ease'
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = '#e6cfa4';
        e.target.style.transform = 'scale(1.05)';
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = '#f5deb3';
        e.target.style.transform = 'scale(1)';
      }}
    >{label}</button>
  );
}

export default TodoButton;