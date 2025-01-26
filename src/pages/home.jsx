import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-800 font-outfit relative">
      {/* Container */}
      <div className="flex items-center justify-center min-h-screen px-4 py-16">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Hero Section */}
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Silent-Note Passing Protocol (SNPP)
          </h1>
          {/* <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Streamlining communication with a secure and efficient platform to send and receive notes. Focus on learning while we handle your notes!
          </p> */}
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Psst! Need to share notes with classmates without saying a word?
          </p>



          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
            <a
              href="/auth/register"
              className="inline-block bg-teal-400 text-gray-50 text-lg py-3 px-8 rounded-full shadow-lg hover:bg-teal-500 transition transform hover:scale-105"
            >
              <FaRegArrowAltCircleRight className="inline mr-2" />
              Get Started
            </a>
            {/* <a
              href="/auth/register"
              className="inline-block bg-yellow-400 text-gray-800 text-lg py-3 px-8 rounded-full shadow-lg hover:bg-yellow-500 transition transform hover:scale-105"
            >
              <FaUserPlus className="inline mr-2" />
              Register
            </a> */}
          </div>
        </div>
      </div>

    </div>
  );
}
