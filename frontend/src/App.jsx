import './App.css'

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";

import DashboardPage from './pages/DashboardPage.jsx';
import WalletCreationPage from './pages/WalletCreationPage.jsx';

function App() {

  return (
    <>
	  <Header />
	  <Routes>
	  	<Route path="/dashboard" element={<DashboardPage/>}/>
	  	<Route path="/wallet-creation" element={<WalletCreationPage/>}/>
	  </Routes>
    </>
  )
}

export default App
