import './App.css'

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";

import LoggedinHomePage from './pages/LoggedinHomePage.jsx';
function App() {

  return (
    <>
	  <Header />
	  <Routes>
	  	<Route path="/home" element={<LoggedinHomePage/>}/>
	  </Routes>
    </>
  )
}

export default App
