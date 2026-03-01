import './App.css'

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";

import LoggedinHomePage from './pages/LoggedinHomePage.jsx';
import WalletCreationPage from './pages/WalletCreationPage.jsx';

function App() {

  return (
    <>
	  <Header />
	  <Routes>
	  	<Route path="/" element={<LoggedinHomePage/>}/>
	  	<Route path="/wallet-creation" element={<WalletCreationPage/>}/>
	  </Routes>
    </>
  )
}

export default App
