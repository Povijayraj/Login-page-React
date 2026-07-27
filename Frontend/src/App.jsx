import { useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-[#0a0a2e] to-purple-950 overflow-hidden">
      <ParticleBackground />
      
      {!user ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Dashboard user={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App
