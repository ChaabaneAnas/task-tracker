import About from "./components/About";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes,Route  } from "react-router-dom";


function App() {
 
  return (
    <Router>
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  </Router>
  );
}

export default App;
