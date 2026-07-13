import MyCounter from "./Counter";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import { Add, Sub, Mul, NotFound } from "./Math";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/counter" element={<MyCounter />} />
        <Route path="/Add" element={<Add />} />
        <Route path="/Mul" element={<Mul />} />
        <Route path="/Sub" element={<Sub />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;