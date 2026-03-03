import './App.css'

import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import { AuthProvider, useAuth } from "./context/AuthContext.jsx";

import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import WalletCreationPage from './pages/WalletCreationPage.jsx';

function ProtectedRoute({ children }) {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <AuthProvider>
<Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        <Route path="/wallet-creation" element={<ProtectedRoute><WalletCreationPage /></ProtectedRoute>} />
      </Routes>
    </AuthProvider>
  )
}

export default App
