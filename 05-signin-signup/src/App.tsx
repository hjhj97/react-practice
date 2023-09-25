import { Route, Router, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
