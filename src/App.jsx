import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingRoutes from "./routes/LandingRoutes";
import UserRoutes from "./routes/UserRoutes";
import SignInSignUp from "./routes/SignInSignUp";
import StaffRoutes from "./routes/StaffRoutes";

function App() {
  return (
    <Router>
      <SignInSignUp />
      <LandingRoutes />
      <StaffRoutes />
    </Router>
  );
}

export default App;