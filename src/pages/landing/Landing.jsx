// Pages
import Home from "./Home";
import About from "./About";
import Announcement from "./Announcement";
import Technologies from "./Technologies";
import Contact from "./Contact";
// Components
import NavBar from "../../components/landing/NavBar";

const Landing = () => {
  return (
    <>
      <main className="">
        <NavBar />
        <Home id="home" />  
        <About id="about"/>
        <Announcement id="announcement"/>
        <Technologies id="technologies"/>
        <Contact id="contact"/>
      </main>
    </>
  );

};

export default Landing;



