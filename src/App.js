import './App.css';
import {Route, Routes} from 'react-router-dom'
import Front from './components/Front';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Front/>}/>
      <Route path='/home' element={<Home/>}/>
      </Routes> 
    </div> 
  );
}

export default App;