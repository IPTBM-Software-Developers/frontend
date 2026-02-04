// Components
import NavBar from "../../components/landing/NavBar";

const About = () => {
  return (
    <>
      <NavBar />
      <main className="flex flex-col justify-center items-center bg-gray-50 h-screen w-full">
        <h1 className="text-blue-600 font-bold text-4xl">Why Choose IPTBM?</h1>
        <p className="flex text-gray-500 max-w-xl leading-relaxed">Our platform offers comprehensive tools and services to help you protect, manage, and monetize your intellectual property assets.</p>
      </main>

    </>
  )
}

export default About