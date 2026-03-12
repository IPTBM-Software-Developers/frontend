import { Routes, Route } from "react-router-dom";

import LogIn from "@/pages/SignInSignUp/LogIn";
import SignUp from "@/pages/SignInSignUp/SignUp";
import SampleLog from "@/pages/SignInSignUp/SampleLog";
import ForgotPassword from "@/pages/SignInSignUp/ForgotPassword";
import ResetPassword from "@/pages/SignInSignUp/ResetPassword";
import PasswordSuccess from "@/pages/SignInSignUp/PasswordSucces";

const SignInSignUp = () => {
  return(
    <>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/samplelog" element={<SampleLog />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/passwordsuccess" element={<PasswordSuccess />} />
      </Routes>
    </>
  );
};

export default SignInSignUp;