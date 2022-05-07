import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
// import { About } from "./Components/";
// import { Error } from "./Components/";
import { Routes, Route, Navigate } from "react-router-dom";
import Posts from "./Components/Posts";
import Slider from "./Components/Slider";
import Footer from "./Components/Footer";
import Details from "./Components/Details";
import Form from "./Components/Form";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <Header></Header>
      <Slider></Slider>
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Posts />} />
        <Route path="/home/details/:id" element={<Details />} />
        <Route path="/home/form" element={<Form />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} /> */}
      </Routes>

      <Footer></Footer>
    </>
  );
}

export default App;
