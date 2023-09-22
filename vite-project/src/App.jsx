import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home/Home";
import Navbar from './Navbar/Navbar'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

      </Router>

    </>
  )
}

export default App
