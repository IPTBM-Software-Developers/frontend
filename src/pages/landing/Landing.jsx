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
      <main className="h-auto">
        <NavBar />
        <Home />  
        <About />
        <Announcement />
        <Technologies />
        <Contact />
      </main>
    </>
  );

};

export default Landing;



