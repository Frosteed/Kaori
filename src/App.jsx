import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="*" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
