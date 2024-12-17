import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import ActionsPage from './pages/ActionsPage';
import ImpactPage from './pages/ImpactPage';
import RankingsPage from './pages/RankingsPage';
import RewardsPage from './pages/RewardsPage';
import SplashScreen from './components/splash/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/actions" replace />} />
            <Route path="/actions" element={<ActionsPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/rankings" element={<RankingsPage />} />
            <Route path="/rewards" element={<RewardsPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;