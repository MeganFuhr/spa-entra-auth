import { useContext } from 'react';
import { AuthContext } from './components/context/authContext';
import LoginCard from './components/loginCard/loginCard';
import LoginFailCard from './components/LoginFailCard/LoginFailCard';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';


function App() {
  const { isAuthenticated, isAuthorized, user, loading, error, handleLogin, handleLogout } = useContext(AuthContext);
  return (
    <>
      {/* <NavBar /> */}
      {/* Render the appropriate content based on authentication state */}
      {isAuthenticated ? (
        isAuthorized && user ? (
          <Home user={user} handleLogout={handleLogout} />
        ) : (
          <LoginFailCard handleLogout={handleLogout} />
        )
      ) : (
        <LoginCard loading={loading} error={error} handleLogin={handleLogin} />
      )}
      </>
  )
}

export default App;
