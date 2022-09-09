import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Components
import AppContainer from '../components/AppContainer';
import Films from '../films/components/Films';
import Film from '../films/components/Film';
import Caracteres from '../caracteres/components/Caracteres';
import Caractere from '../caracteres/components/Caractere';
import Starships from '../starships/components/Starships';
import Starship from '../starships/components/Starship';
import Vehicles from '../vehicles/components/Vehicles';
import Vehicle from '../vehicles/components/Vehicle';
import Navbar from '../components/Navbar';
import LoginForm from '../auth/components/LoginForm';

const App = () => {
  return (
    <div className='bg-light'>
      <BrowserRouter>
        <Navbar />
        <AppContainer>
          <Routes>
            <Route path='/'>
              <Route index element={<Navigate replace to={'films'} />} />
              <Route path='login' element={<LoginForm />} />
              <Route path='films' element={<Films />} />
              <Route path='films/:id' element={<Film />} />
              <Route path='caracteres' element={<Caracteres />} />
              <Route path='caracteres/:id' element={<Caractere />} />
              <Route path='starships' element={<Starships />} />
              <Route path='starships/:id' element={<Starship />} />
              <Route path='vehicles' element={<Vehicles />} />
              <Route path='vehicles/:id' element={<Vehicle />} />
            </Route>
          </Routes>
        </AppContainer>
      </BrowserRouter>
    </div>
  );
};

export default App;
