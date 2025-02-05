import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HiEye, HiEyeOff } from "react-icons/hi";
import axios from "axios";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "username") {
      const usernameRegex = /^[a-z0-9_]+$/;
      if (!usernameRegex.test(value)) {
        setUsernameError(
          "Username can only contain lowercase letters, numbers, and underscores."
        );
      } else {
        setUsernameError("");
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (usernameError || formData.username === "" || formData.password === "") return;

    setLoading(true);

    try {
      const response = await axios.post(
        "https://silent-note-protocol-be.onrender.com/api/login/",
        {
          username: formData.username,
          password: formData.password,
        }
      );

      // Assuming the API responds with tokens
      const { access, refresh } = response.data;

      // Save tokens to localStorage
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);

      setAlertMessage("Successfully logged in!");
      setTimeout(() => setAlertMessage(""), 3000);

      navigate("/inbox");
    } catch (error) {
      console.error("Login failed:", error);
      setAlertMessage(
        error.response?.data?.detail || "Invalid username or password."
      );
      setTimeout(() => setAlertMessage(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white md:bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl px-4"
      >
        <div className="bg-white p-8 rounded md:rounded-lg shadow-none md:shadow-lg w-full">
          <h1 className="text-3xl font-bold text-left mb-12 text-teal-600">
            Welcome back!
          </h1>

          {alertMessage && (
            <motion.div
              className={`text-center font-semibold ${
                alertMessage.includes("Successfully")
                  ? "bg-green-100 text-green-500 border-green-500"
                  : "bg-red-100 text-red-500 border-red-500"
              } text-sm border-l-2 p-2 mb-4`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {alertMessage}
            </motion.div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block text-lg font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="e.g., darealgoat_007"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="mt-2 block w-full rounded-lg outline-none border-gray-300 shadow focus:ring-1 focus:ring-green-500 px-4 py-3"
                  required
                />
                {usernameError && (
                  <p className="text-red-500 text-sm mt-1">{usernameError}</p>
                )}
              </div>

              <div className="relative">
                <label
                  htmlFor="password"
                  className="block text-lg font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="mt-2 block w-full rounded-lg outline-none border-gray-300 shadow focus:ring-1 focus:ring-green-500 px-4 py-3"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-12 right-4 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <HiEyeOff size={24} /> : <HiEye size={24} />}
                </button>
              </div>

              <button
                type="submit"
                className={`w-full py-3 px-4 bg-gradient-to-r from-green-400 to-teal-400 text-white font-semibold text-lg rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Logging in..." : "Log In"}
              </button>
            </div>
          </form>

          <p className="text-center mt-6 text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <a href="/auth/register" className="text-green-600 underline">
              Sign up
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
