import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingRoutes from "./routes/LandingRoutes";
import UserRoutes from "./routes/UserRoutes";
import SignInSignUp from "./routes/SignInSignUp";

function App() {
  return (
    <Router>
      <SignInSignUp />
      <LandingRoutes />
      <UserRoutes />
    </Router>

    
  );
}

export default App;
