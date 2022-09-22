import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import { Invite, Support, Vote } from "./pages/linkRoutes/links";
import Policy from "./pages/Policy/Policy";
function App() {
  return (
    <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="*" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/policy" element={<Policy/>}></Route>
        {/* ------------- Links Routes ------------------ */}
        <Route path="/support" element={<Support/>} />
        <Route path="/invite" element={<Invite/>} />
        <Route path="vote" element={<Vote/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
