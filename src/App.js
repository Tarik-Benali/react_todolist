//import logo from './logo.svg';
import ali from './assets/images/ali.jpg';
//import exeperianceAli from './components/TodoList';
import './App.css';
//import TodoList from './components/TodoList';
import MoviesListe from './components/movies/MoviesListe'

function App() {
  return (
    <div className='App'>
        <MoviesListe/>
      <br/>
      <img src={ali} className='App-logo' alt='ali'></img>
    </div>
  );
}

export default App;
