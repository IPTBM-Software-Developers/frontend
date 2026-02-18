import { Routes, Route } from "react-router-dom";

import LogIn from "@/pages/SignInSignUp/LogIn";


const SignInSignUp = () => {
  return(
    <>
      <Routes>
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </>
  );
};

export default SignInSignUp;