import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Popup from "./components/Popup";
import Dashboard from "./pages/dashboard";
import Nfts from "./pages/Nfts";
import Swap from "./pages/Swap";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              
              <Dashboard />
              
            </>
          }
        />
        <Route
          path="/Swap"
          element={
            <>
              <Swap />
              <Footer />
            </>
          }
        />
        <Route
          path="/Nfts"
          element={
            <>
              <Nfts />
              <Footer />
            </>
          }
        />
      </Routes>
      {/* <Home /> */}
      {/* <Dashboard /> */}
      {/* <Swap /> */}
      {/* <Nfts /> */}
    </>
  );
}

export default App;
