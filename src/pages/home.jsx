import { FaRegArrowAltCircleRight, FaUserPlus } from "react-icons/fa"; // React Icons

export default function Home() {
  return (
    <div className="min-h-screen text-gray-800 font-outfit relative">
      {/* Container */}
      <div className="flex items-center justify-center min-h-screen px-4 py-16">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Hero Section */}
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Welcome to Class Note Protocol
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Streamlining communication with a secure and efficient platform to send and receive notes. Focus on learning while we handle your notes!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
            <a
              href="/send-notes"
              className="inline-block bg-green-400 text-gray-800 text-lg py-3 px-8 rounded-full shadow-lg hover:bg-green-500 transition transform hover:scale-105"
            >
              <FaRegArrowAltCircleRight className="inline mr-2" />
              Get Started
            </a>
            <a
              href="/register"
              className="inline-block bg-yellow-400 text-gray-800 text-lg py-3 px-8 rounded-full shadow-lg hover:bg-yellow-500 transition transform hover:scale-105"
            >
              <FaUserPlus className="inline mr-2" />
              Register
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
