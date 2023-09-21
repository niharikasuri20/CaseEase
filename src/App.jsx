import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./views/Home";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/footer";
import Features from "./views/Features";
import News from "./views/News";
import Faq from "./views/Faq";
import Contactus from "./views/Contactus";
import Signin from "./views/SignIn";
import Registration from "./views/Registration";

// src/App.jsx
function App() {
  return (
    <div>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/features" element={<Features />} />
      <Route exact path="/news" element={<News />} />
      <Route exact path="/faq" element={<Faq />} />
      <Route exact path="/contactUs" element={<Contactus />} />
      <Route exact path="/Signin" element={<Signin />} />
      <Route exact path="/Registration" element={<Registration />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
