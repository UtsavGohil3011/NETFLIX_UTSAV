import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/AboutUs/About";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import store from "./toolkit/store/store";
import { Provider } from "react-redux";


function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
