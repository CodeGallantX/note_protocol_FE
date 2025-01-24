"use client";
import { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { FaAngleLeft } from "react-icons/fa6";

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    if (!formData.agree) newErrors.agree = "You must agree to the terms.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
      router.push('/email-verification')
    }
  };

  return (
    <div className='lg:grid lg:grid-cols-2 light:bg-gray-200 dark:bg-gray-800 w-full min-h-screen'>
      <div className="relative flex flex-col px-10 md:px-16 lg:px-10 xl:px-32 pb-10 pt-14">
        <h1 className='text-3xl font-bold text-left light:text-gray-800 dark:text-white'>
          Register To Start Your Journey To EduConnect Today
        </h1>

        <Link href="/">
          <FaAngleLeft className="absolute left-8 top-5 p-2 light:bg-gray-500 dark:bg-gray-700 rounded-full text-4xl light:text-gray-500 dark:text-white font-bold" />
        </Link>

        <form onSubmit={handleSubmit} className='flex flex-col light:text-gray-800 dark:text-white space-y-4 mt-4'>
          <fieldset className="flex flex-col w-full items-start justify-center space-y-1">
            <label htmlFor="name">Name</label>
            <input
              className="w-full border border-solid p-4 rounded-lg light:bg-gray-200 dark:bg-gray-800 border-gray-500 outline-none light:focus:border-primary dark:focus:border-300-gray transition-all duration-300 ease-in-out light:text-gray-800 dark:text-white"
              type="text"
              name="name"
              id="name"
              placeholder='Enter your name'
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <small className="text-red-500">{errors.name}</small>}
          </fieldset>

          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label htmlFor="email">Email Address</label>
            <input
              className="w-full border border-solid p-4 rounded-lg border-gray-500 light:bg-gray-200 dark:bg-gray-800 outline-none light:focus:border-primary dark:focus:border-300-gray transition-all duration-300 ease-in-out light:text-gray-800 dark:text-white"
              type="email"
              name="email"
              id="email"
              placeholder='Enter your email address'
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <small className="text-red-500">{errors.email}</small>}
          </fieldset>

          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label htmlFor="password">Password</label>
            <input
              className="w-full placeholder:text-2xl font-light border border-solid p-4 rounded-lg light:bg-gray-200 dark:bg-gray-800 border-gray-500 outline-none light:focus:border-primary dark:focus:border-300-gray transition-all duration-300 ease-in-out light:text-gray-800 dark:text-white"
              type="password"
              name="password"
              id="password"
              placeholder='⁎⁎⁎⁎⁎⁎⁎⁎'
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <small className="text-red-500">{errors.password}</small>}
          </fieldset>

          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="w-full placeholder:text-2xl font-light border border-solid p-4 rounded-lg light:bg-gray-200 dark:bg-gray-800 border-gray-500 outline-none light:focus:border-primary dark:focus:border-300-gray transition-all duration-300 ease-in-out light:text-gray-800 dark:text-white"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder='⁎⁎⁎⁎⁎⁎⁎⁎'
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmPassword && <small className="text-red-500">{errors.confirmPassword}</small>}
          </fieldset>

          <div className="flex flex-row items-center space-x-2">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            <label htmlFor="agree" className="light:text-gray-800 dark:text-white">
              I agree to all the <a className="font-bold underline">terms and conditions</a>.
            </label>
          </div>
          {errors.agree && <small className="text-red-500">{errors.agree}</small>}

          <button
            className='w-full bg-primary text-white transition duration-300 ease-out py-3 rounded-lg mt-3'
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
