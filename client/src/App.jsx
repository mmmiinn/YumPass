import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";

function App() {
  return (
    <div>
      <Login />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={Login}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
