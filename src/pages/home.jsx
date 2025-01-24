                                                                                                                                              import { FaRegArrowAltCircleRight, FaUserPlus } from "react-icons/fa"; // React Icons

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-blue-500 to-indigo-600 text-white font-outfit">
      {/* Container */}
      <div className="flex items-center justify-center min-h-screen px-4 py-16">
        <div className="text-center space-y-8">
          {/* Hero Section */}
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Welcome to Class Note Protocol
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Streamlining communication with a secure and efficient platform to send and receive notes.
            Focus on learning while we handle your notes!
          </p>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-6 mt-8">
            <a
              href="/send-notes"
              className="inline-block bg-yellow-400 text-gray-800 text-lg py-3 px-8 rounded-full shadow-lg hover:bg-yellow-500 transition transform hover:scale-105"
            >
              <FaRegArrowAltCircleRight className="inline mr-2" />
              Get Started
            </a>
            <a
              href="/register"
              className="inline-block bg-green-400 text-gray-800 text-lg py-3 px-8 rounded-full shadow-lg hover:bg-green-500 transition transform hover:scale-105"
            >
              <FaUserPlus className="inline mr-2" />
              Register
            </a>
          </div>
        </div>
      </div>

      {/* Aesthetic Waves/Gradient Effects */}
      <div className="absolute bottom-0 left-0 right-0 z-0 h-32 bg-gradient-to-t from-purple-600 to-transparent"></div>
    </div>
  );
}
