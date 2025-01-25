import { useState } from "react";
import { motion } from "framer-motion";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Signed Up:", formData);

    setAlertVisible(true);

    setTimeout(() => {
      setAlertVisible(false);
      navigate("/inbox");
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white md:bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl px-4"
      >
        <div className="bg-white p-6 rounded-none md:rounded-lg shadow-none md:shadow-lg w-full">
          <h1 className="text-3xl font-bold text-left mb-14 text-teal-600 capitalize">
            Redefine the concept of passing notes
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-lg font-medium text-gray-700">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm outline-none focus:ring-2 focus:ring-green-500 px-4 py-3"
                  required
                />
              </div>
              {/* <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm outline-none focus:ring-2 focus:ring-green-500 px-4 py-3"
                  required
                />
              </div> */}
              <div className="relative">
                <label htmlFor="password" className="block text-lg font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm outline-none focus:ring-2 focus:ring-green-500 px-4 py-3"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-10 right-4 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <HiEyeOff size={24} /> : <HiEye size={24} />}
                </button>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-green-400 to-teal-400 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-center mt-6 text-sm text-gray-600">
            Already have an account? <a href="/auth/login" className="text-green-600 underline">Log in</a>
          </p>
        </div>
      </motion.div>

      {alertVisible && (
        <motion.div
          className="absolute top-6 right-4 max-w-xl text-center font-semibold bg-green-100 text-sm text-green-500 border-l-2 border-l-green-500 p-2 mb-4 rounded-lg"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <div className="flex justify-between items-center">
            <p className="text-center">Registration Successful! Redirecting...</p>
            <button
              onClick={() => setAlertVisible(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <HiX size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SignupPage;
