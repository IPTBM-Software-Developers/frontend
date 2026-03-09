import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingRoutes from "./routes/LandingRoutes";
import SignInSignUp from "./routes/SignInSignUp";
import AdminRoutes from "./routes/AdminRoutes"

function App() {
  return (
    <Router>
      <SignInSignUp />
      <LandingRoutes />
      <AdminRoutes />
    </Router>
  );
}

export default App;