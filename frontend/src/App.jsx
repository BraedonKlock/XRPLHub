import './App.css'

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import ShootingStarCursor from "./components/ShootingStarCursor.jsx";

import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import WalletCreationPage from './pages/WalletCreationPage.jsx';

function App() {

  return (
    <>
      <ShootingStarCursor />
	  <Header />
	  <Routes>
	  	<Route path="/" element={<HomePage/>}/>
	  	<Route path="/login" element={<LoginPage/>}/>
	  	<Route path="/dashboard" element={<DashboardPage/>}/>
	  	<Route path="/wallet-creation" element={<WalletCreationPage/>}/>
	  </Routes>
    </>
  )
}

export default App
