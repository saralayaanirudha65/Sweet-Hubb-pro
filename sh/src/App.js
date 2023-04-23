
import Dsp from "./components/Dsp";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";


import Shops from "./components/Shops";
import Navbar from "./components/Navbar";
import Krish from "./Details/krish";
import 'bootstrap/dist/css/bootstrap.min.css';




export default function App() {

  return (
    <div className="App">
     
     
     <BrowserRouter>
      <Navbar />
  <Routes>
    
    <Route exact path='/' element={<Dsp />}></Route>
    <Route exact path='/Shops' element={<Shops/>}></Route>
    <Route exact path='/krish' element={<Krish/>}></Route>
    
  

  </Routes>
  </BrowserRouter>
  <Footer />
      
    </div>
  );
}




