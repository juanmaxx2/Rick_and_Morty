import './App.css';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About.jsx'
import Nav from './components/Nav/Nav.jsx';
import Usuario from './components/Usuario/Usuario.jsx';
import Detail from './components/Detail/Detail.jsx';
import Favorites from './components/Favorite/favorite';
import style from './App.module.css';
import { useEffect, useState } from 'react';
import { Route, Router, Routes, useLocation, useNavigate } from 'react-router-dom'

function App () {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigator = useNavigate();

  useEffect(()=>{
    !access && navigator("/");
  }, [access]);

  const username = "juan@mail.com";
  const password = "123456";

  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "f37a021a0160.606559fe5e66ad57e249";

    fetch (`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name && !characters.find((char)=>char.id === data.id)) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        alert('Error');
      }
    });
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char)=>char.id !== id));
  };

  const login = (userData) => {
    if(userData.username === username && userData.password === password){
      setAccess(true);
      navigator("/home");
    } else {
      alert ("Credenciales incorrectas")
    }
  };
  
  return (
    <div className='App' style={{ padding: '25px' }}>
      {pathname !=='/' && <Nav onSearch={onSearch}/>}
      <Routes>
        <Route path='/' element={<Usuario login={login}/>} />
        <Route path='/home' element = {<Cards characters={characters} onClose = {onClose} />} />
        <Route path='/about' element= {<About/>} />
        <Route path='/favorites' element= {<Favorites/>} />
        <Route path='/detail/:detailId' element= {<Detail/>} />
      </Routes>

    </div>
  );
}

export default App


/* <div>
  <Card
    name={Rick.name}
    species={Rick.species}
    gender={Rick.gender}
    image={Rick.image}
    onClose={() => window.alert('Emulamos que se cierra la card')}
  />
</div> */
