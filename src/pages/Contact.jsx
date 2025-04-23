import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  return (
    <div className="container mx-auto py-16 px-4 mt-14">
      <AnimatedSection direction="left">
        <h1 className="text-center text-5xl font-bold mb-16 relative opacity-40">
          <span className="absolute inset-0 flex justify-center items-center">
            <span className="mr-2 w-8 h-1 bg-red-500"></span>
            <span className="text-white">CONTACT ME</span>
            <span className="ml-2 w-8 h-1 bg-red-500"></span>
          </span>
        </h1>

        <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8 pt-16">
          {/* Contact Info Section */}
          <div className="bg-[#112240] p-8 rounded-lg w-full lg:w-1/3">
            <div className="mb-8 wrap">
              <h2 className="text-lg font-bold mb-2 flex items-center">
                <span className="text-red-500 mr-2">|</span> Email
              </h2>
              <p className="break-words text-sm sm:text-base">BhaveshChaudharyxyz**@gmail.com</p>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-bold mb-2 flex items-center">
                <span className="text-red-500 mr-2">|</span> Address
              </h2>
              <p>Banaskantha, Gujarat, India</p>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-bold mb-2 flex items-center">
                <span className="text-red-500 mr-2">|</span> Phone
              </h2>
              <p>+91 78620 *****</p>
            </div>

            <div className="flex space-x-4 mt-4 text-xl">
              <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-[#112240] p-8 rounded-lg w-full lg:w-2/3">
            <h2 className="text-lg font-bold mb-4 flex items-center">
              <span className="text-red-500 mr-2">|</span> Get In Touch
            </h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Name *"
                  className="p-2 bg-[#0a192f] border border-gray-700 rounded"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  className="p-2 bg-[#0a192f] border border-gray-700 rounded"
                />
              </div>
              <input
                type="text"
                placeholder="Subject *"
                className="w-full p-2 mb-4 bg-[#0a192f] border border-gray-700 rounded"
              />
              <textarea
                placeholder="Your message *"
                className="w-full p-2 mb-4 bg-[#0a192f] border border-gray-700 rounded h-32"
              ></textarea>
              <button
                type="submit"
                className="bg-white text-[#0a192f] px-4 py-2 rounded hover:bg-gray-200 transition"
              >
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
