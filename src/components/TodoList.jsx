// main object for the left and right handside
import TodoItem from './TodoItem';

function TodoList({title, todos, onAction, actionLabel, isCompletedList}) {
  return (
    // body
    <div style={{
        backgroundColor: '#fffaf0',
        borderRadius: '12px',
        boxShadow: '0 6px 18px rgba(0, 0, 0, 0.08)',
        padding: '1.5rem 1.25rem',
        border: '1px solid #e6d3b3',
        color: '#4b3f33',
      }}
    >
      <h2 style={{fontSize: '1.3rem', marginBottom: '1rem', borderBottom: '1px solid #d2b48c', paddingBottom: '0.4rem'}}>{title}</h2>

      {/* the note container */}
      <div style={{
          maxHeight: '485px',
          overflowY: 'auto',
          paddingRight: '8px',
          border: '2px solid #e6d3b3',
          borderRadius: '12px',
          backgroundColor: '#fefcf6'
        }}
      >
        <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onAction={onAction} actionLabel={actionLabel} isCompleted={isCompletedList}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;