import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ProtectedRoute from "./context/ProtectedRoute";
import PublicRoute from "./context/PublicRoute";

const WeatherApp = React.lazy(() => import("weather/WeatherApp"));

function App() {
  return (
    <BrowserRouter basename="/allinone">
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
        <Route path="/*" element={
          <ProtectedRoute>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/weather" element={<WeatherApp />} />
            </Routes>
          </ProtectedRoute>
        } />
      </Routes>
    </Suspense>
    </BrowserRouter>
  );
}

export default App;
