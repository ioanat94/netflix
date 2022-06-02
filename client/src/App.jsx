import Home from './pages/Home';
import Register from './pages/Register';
import Watch from './pages/Watch';
import Login from './pages/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './authContext/AuthContext';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path='/'
          element={user ? <Home /> : <Navigate replace to='/register' />}
        />
        <Route
          path='/register'
          element={!user ? <Register /> : <Navigate replace to='/' />}
        />
        <Route
          path='/login'
          element={!user ? <Login /> : <Navigate replace to='/' />}
        />
        {user && (
          <>
            <Route path='/movies' element={<Home type='movie' />} />
            <Route path='/series' element={<Home type='series' />} />
            <Route path='/watch' element={<Watch />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
