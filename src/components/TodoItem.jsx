// the to-do note blocks
import TodoButton from "./TodoButton";

function TodoItem({todo, onAction, actionLabel, isCompleted}) {
  return (
    <li style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        marginBottom: '0.75rem',
        borderTop: '1px solid #d2b48c',
        borderBottom: '1px solid #d2b48c',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
        gap: '0.5rem',
      }}
    >
      <span style={{ flex: 1, textAlign: 'left' }}>{todo.title}</span>

      {isCompleted && todo.completedDate && (
        <span className="complete" style={{color: '#888', marginRight: '0.5rem' }}>(✓ {new Date(todo.completedDate).toLocaleDateString()})</span>
      )}

      <TodoButton onClick={() => onAction(todo.id)} label={actionLabel}></TodoButton>
    </li>
  );
}

export default TodoItem;