import './index.css'
import { Route, Routes } from 'react-router-dom';
import { LandingPage } from './Components/Landing/LandingPage';
import { Home } from './Components/Home/Home';
import { ModalCharacter } from './Components/ModalCharacter/ModalCharacter';
import { MoviesCard } from './Components/MoviesCard/MoviesCard'


function App() {
  return (
  <Routes>
    <Route path='/' element={ <LandingPage/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/movies' element={<MoviesCard/>} />
      <Route path='/:name' element={<ModalCharacter/>}/>  
  </Routes>
  );
}

export default App;
