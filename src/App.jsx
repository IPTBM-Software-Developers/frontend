import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingRoutes from "./routes/LandingRoutes";
import SignInSignUp from "./routes/SignInSignUp";
import AdminRoutes from "./routes/AdminRoutes"

import { Toaster } from "sileo";

function App() {
  return (
   <>
    <Toaster
      position="top-center"
      options={{
        fill: "#171717",
        roundness: 16,
        styles: {
          title: "text-green!",
          description: "text-white/75! text-center!",
          badge: "bg-white/10!",
          button: "bg-white/10! hover:bg-white/15!",
        },
      }}
    />
    <Router>
      <SignInSignUp />
      <LandingRoutes />
      <AdminRoutes />
    </Router>
   </>
  );
}

export default App;