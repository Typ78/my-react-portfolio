import { motion } from "framer-motion";
import Projects from "./Projects";
import Blogs from "./Blogs";
import Skills from "./Skills";
import AnimatedSection from "./AnimatedSection";
import Contact from "./Contact";
import Footer from "../components/Footer";
import { Typewriter } from "react-simple-typewriter";



export default function Home() {
  return (
    <>
      <motion.div
        className="flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <AnimatedSection direction="left">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between py-16 gap-10 lg:pl-8 lg:mt-16">
              {/* Left Text Section */}
              <div className="lg:w-1/2 w-full">
                <div className="w-full">
                  <h6 className="font-semibold text-xl mb-2 text-center lg:text-left">
                    Hi There, I'm
                  </h6>
                  <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl mb-4 text-center lg:text-left">
                    Bhavesh <br /> Chaudhary
                  </h1>
                  <div className="h-1 w-[100px] bg-red-700 mx-auto lg:mx-0 mb-6" />
                  <h2 className="font-bold text-2xl sm:text-3xl mb-4 text-center lg:text-left">
                    <span className="text-red-500">
                      <Typewriter
                        words={["Web Developer", "Frontend Developer"]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </span>
                  </h2>
                  <p className="text-gray-600 font-medium text-center lg:text-left">
                    The dynamics of how users interact with interactive elements
                    within a user interface flow chart based on container
                    proportion.
                  </p>
                  <div className="mt-8 flex justify-center lg:justify-start">
                    <a
                      href="#contact"
                      className="font-bold relative inline-block px-6 py-3 text-green-800 border border-red-800 rounded-md overflow-hidden group"
                    >
                      <span className="absolute left-0 top-0 h-full w-0 bg-red-800 transition-all duration-300 ease-out group-hover:w-full z-0"></span>
                      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                        Contact Me
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Avatar Section */}
              <div className="lg:w-1/2 w-full flex justify-center items-center">
                <div className="home-avatar-box px-6 py-10 border-8 border-blue-800 rounded-tl-full rounded-tr-full rounded-bl-full">
                  <div className="border-red-800 border-[10px] rounded-full shadow-[0px_10px_10px_rgba(255,0,0,0.4)] hover:shadow-[0px_10px_10px_rgba(0,0,255,0.4)] hover:border-blue-800 transition duration-300">
                    <img
                      src="/bg.jpg"
                      alt="Bhavesh"
                      className="w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </motion.div>

      {/* Other Sections */}
      <Projects />
      <Blogs />
      <Skills />
    
    </>
  );
}
