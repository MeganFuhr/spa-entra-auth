import { useContext } from 'react';
import { AuthContext  } from './components/context/authContext';
import LoginCard from './components/loginCard/loginCard';
import LoginFailCard from './components/LoginFailCard/LoginFailCard';

import Home from './components/Home/Home';

function App() {
  const { isAuthenticated, isAuthorized, user, loading, error, handleLogin, handleLogout  } = useContext(AuthContext);

  if (!isAuthenticated) {
    return (
      <LoginCard loading={loading} error={error} handleLogin={handleLogin} />
    );
  }

  // Home Page (After successful authentication and authorization)
  if (isAuthenticated && isAuthorized && user) {
    console.log({"user in app": JSON.stringify(user)});
    return (
      <Home user={user} handleLogout={handleLogout} />
    );
  }

  // Authorization Failed
  return (
    <LoginFailCard handleLogout={handleLogout} />
  );
}

export default App;
