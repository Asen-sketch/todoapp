// main page file, all components come together to make the page
import {useEffect, useState} from 'react';
import TodoList from '../components/TodoList';
import FiltersBar from '../components/FiltersBar';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [completeTasks, setCompleteTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");
  const [completeSortOrder, setCompleteSortOrder] = useState("desc");

  const userIDlist = [...new Set([...tasks, ...completeTasks].map(todo => todo.userId))];

  // fetch the placeholder api
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => {
        const completed = data.filter(todo => todo.completed);
        const uncompleted = data.filter(todo => !todo.completed);
        setTasks(uncompleted);
        setCompleteTasks(completed);
        setLoading(false);
      })
      .catch(err => {
        console.error("oops:", err);
        setLoading(false);
      });
  }, []);

  // funcs for when user un/completes a note
  const handleComplete = (todoId) => {
    const todo = tasks.find(t => t.id === todoId);
    setTasks(tasks.filter(t => t.id !== todoId));
    setCompleteTasks([...completeTasks, {...todo, completed: true, completedDate: new Date().toISOString()}]);
  };

  const handleUndo = (todoId) => {
    const todo = completeTasks.find(t => t.id === todoId);
    setCompleteTasks(completeTasks.filter(t => t.id !== todoId));
    setTasks([...tasks, {...todo, completed: false}]);
  };

  // filter funcs
  const filterPending = tasks
    .filter(todo => selectedUser === "all" || todo.userId === Number(selectedUser))
    .sort((a, b) => sortOrder === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title));

  const filterDone = completeTasks
    .filter(todo => selectedUser === "all" || todo.userId === Number(selectedUser))
    .sort((a, b) => {
      const dateA = new Date(a.completedDate || 0);
      const dateB = new Date(b.completedDate || 0);
      return completeSortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

  if (loading) return <p>Loading ...</p>;

  // the attributes of some elements aren't written in one line like filtersbar because there's too many to
  // fit in one line and keep readability - same for some of the longer functions above
  return (
    <>
      <FiltersBar
        allUserIds={userIDlist}
        selectedUser={selectedUser}
        onUserChange={setSelectedUser}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
        completedSortOrder={completeSortOrder}
        onCompletedSortUpdate={setCompleteSortOrder}
      />

      <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', paddingTop: '1rem', justifyContent: 'center'}}>
        <div style={{ flex: 1, minWidth: '280px' }}>
          <TodoList title="Pending" todos={filterPending} onAction={handleComplete} actionLabel="✓" isCompletedList={false}/>
        </div>
        
        <div style={{ flex: 1, minWidth: '280px' }}>
          <TodoList title="Done" todos={filterDone} onAction={handleUndo} actionLabel="X" isCompletedList={true}/>
        </div>
      </div>
    </>
  );
}

export default TodoApp;