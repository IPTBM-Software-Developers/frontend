import { Routes, Route } from "react-router-dom";

import LogIn from "@/pages/SignInSignUp/LogIn";
import SignUp from "@/pages/SignInSignUp/SignUp";
import SampleLog from "@/pages/SignInSignUp/SampleLog";

const SignInSignUp = () => {
  return(
    <>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/samplelog" element={<SampleLog />} />
      </Routes>
    </>
  );
};

export default SignInSignUp;