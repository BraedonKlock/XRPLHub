import './App.css'

import { Routes, Route } from "react-router-dom";

import LoggedinHomePage from './pages/LoggedinHomePage.jsx';
function App() {

  return (
    <>
	  <Routes>
	  	<Route path="/home" element={<LoggedinHomePage/>}/>
	  </Routes>
    </>
  )
}

export default App
