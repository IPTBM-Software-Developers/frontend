import { Routes, Route } from "react-router-dom";
import Home from "../pages/user/Home";

function UserRoutes() {
  return (
      <>
        <Routes>  
          <Route path="/user" element={<Home />} />
        </Routes> 
      </>
      
  );
}

export default UserRoutes;
