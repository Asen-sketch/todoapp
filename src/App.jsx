// title, header, general elements
import './styles/app.css';
import TodoApp from './pages/Todo';

function App() {
  return ( 
      <div style={{margin: '0 auto', padding: '2rem', backgroundColor: '#ffffff', borderRadius: "16px"}}>
        <header style={{marginBottom: '2rem'}}><h2 style={{fontSize: '2rem', fontWeight: '600', margin: 0}}>Tasklist</h2></header>
        <main><TodoApp /></main>
        <footer style={{marginTop: '2rem', fontSize: '0.8rem', color: '#777'}}>React Project by <a href="https://github.com/Asen-sketch">Asen-sketch</a></footer>
      </div>
  );
}

export default App;