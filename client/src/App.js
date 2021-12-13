import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/login.js";
import SignUp from "./components/signUp/signUp.js";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
