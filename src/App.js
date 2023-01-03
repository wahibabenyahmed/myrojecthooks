
import Navbar  from './components/navbar';
import './App.css';
import Details from './components/details';
import MovieList from './components/MovieList';
import {films} from './components/data'
import {  Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1 className='title'>MOVIES</h1>
     
     
  
     <Routes>

     <Route path="/details/:id"  element={<Details films={films}  />}/>
<Route path='/' element={<MovieList/>}/>

     </Routes>
    </div>
  );
}

export default App;
