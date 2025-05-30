import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './navbar/Navbar';
import Form from './login/Form';
import RegisterForm from './register/RegisterForm';
import AllMovies from './movies/AllMovies';
import MovieDetails from './movies/MovieDetails';
import Favourite from './movies/Favourite';
import NotFound from './components/NotFound';
import { useState,useEffect } from 'react';
import { languageContext } from './context/LanguageConetext';
function App() {
  const [contLanguage,setContLanguage] = useState('English')
  // useEffect(() => {
  //   document.documentElement.dir = contLanguage === 'العربية' ? 'ltr' : 'rtl';
  // }, [contLanguage]);
  return (
    <div dir={`${contLanguage == 'English'?'rtl':'ltr'}`}>
    <languageContext.Provider value={{contLanguage,setContLanguage}}>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path='/login' component={Form} exact></Route>
          <Route path='/register/' component={RegisterForm} exact></Route>   
          <Route path='/movies/' component={AllMovies} exact></Route> 
          <Route path='/' component={AllMovies} exact></Route> 
          <Route path='/movie/:id' component={MovieDetails} exact></Route>
          <Route path='/fav/' component={Favourite} exact></Route>
          <Route path='*' component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </languageContext.Provider>
    </div>
  );
}

export default App;
