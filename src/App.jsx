import { BrowserRouter as Router } from "react-router-dom";
import LandingRoutes from "./routes/LandingRoutes";
import UserRoutes from "./routes/UserRoutes";

function App() {
  return (
    <Router>
      <LandingRoutes />
      <UserRoutes />
    </Router>
  );
}

export default App;
