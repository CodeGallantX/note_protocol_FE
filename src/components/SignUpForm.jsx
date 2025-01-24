"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agree: false,
  });


  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert('You must agree to the terms and conditions to proceed.');
      return;
    }

    console.log('Form submitted successfully:', formData);
    alert('Registration successful! Login to the access the community.');
    router.push('/login')
  };

  return (
    <div className="lg:grid lg:grid-cols-2 bg-gray-800 w-full min-h-screen">
      <div className="w-full flex flex-col text-white space-y-3 px-10 md:px-16 lg:px-10 xl:px-32 py-10 lg:py-8">
        <h1 className="text-4xl font-bold text-center">Create Account</h1>
        <p className="text-gray-300 text-center">Join the community and unlock your learning potential</p>

        <div className="mt-4">
          <div className="flex flex-col items-center justify-center space-y-4">
            <a
              href="#"
              className="w-full flex flex-row items-center justify-center space-x-2 hover:bg-gray-800 px-2 py-3 rounded-full bg-transparent border border-solid border-blue-500"
            >
              <img
                src="https://ik.imagekit.io/mshcgnjju/EkoStudy/Google-icon.png"
                alt="Google Icon"
                className="w-5 h-5"
              />
              <span>Sign up with Google</span>
            </a>
          </div>
          <div className="flex flex-row space-x-5 items-center justify-center my-2">
            <span className="w-full h-[1px] bg-white"></span>
            <span className="text-lg font-semibold text-white">Or</span>
            <span className="w-full h-[1px] bg-white"></span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 lg:space-y-4">
          <fieldset className="flex flex-col w-full items-start justify-center space-y-1">
            <label className="text-white" htmlFor="name">
              Name
            </label>
            <input
              className="w-full border border-solid py-4 px-6 rounded-full bg-gray-800 border-gray-500 outline-none focus:ring-1 focus:ring-gray-300 focus:border-none transition-all duration-300 ease-in-out text-white"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </fieldset>

          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label className="text-white" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full border border-solid py-4 px-6 rounded-full border-gray-500 bg-gray-800 outline-none focus:ring-1 focus:ring-gray-300 focus:border-none transition-all duration-300 ease-in-out text-white"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </fieldset>
          <fieldset className="flex flex-col items-start justify-center space-y-1">
            <label className="text-white" htmlFor="password">
              Password
            </label>
            <input
              className="w-full placeholder:text-2xl font-light border border-solid py-4 px-6 rounded-full bg-gray-800 border-gray-500 outline-none focus:ring-1 focus:ring-gray-300 focus:border-none transition-all duration-300 ease-in-out text-white"
              type="password"
              name="password"
              id="password"
              placeholder="⁎⁎⁎⁎⁎⁎⁎⁎"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </fieldset>

          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-2">
              <input
                type="checkbox"
                name="agree"
                id="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              <label htmlFor="agree" className="text-white">
                I agree to all the <a className="font-bold underline">terms and conditions</a>.
              </label>
            </div>
          </div>

          <button
            className="mt-6 w-full bg-primary text-white transition duration-300 ease-out py-3 rounded-[36px]"
            type="submit"
          >
            Sign Up
          </button>
          <p className="text-white">
            Already have an account?{' '}
            <a href="/login" className="font-bold underline transition duration-300 ease-in-out">
              Log in
            </a>
          </p>
        </form>
      </div>

      <div className="p-3">
        <div className="hidden rounded-lg overflow-hidden lg:block ml-auto lg:w-5/6 xl:w-11/12 relative h-full bg-gradient-to-tr from-cyan-800 to-purple-900">
          <div className="absolute bottom-0 w-full opacity-70 h-2/5 bg-black blur"></div>
          <img
            src="https://assets.lummi.ai/assets/QmXuxZu9J6Nxum9JTPPNd52SQgdBAm1UknGxJFq9gq4fKN?auto=format&w=1500"
            alt="Students studying"
            className="w-full h-full object-cover"
          />
          <div className="absolute text-white w-full bottom-10 xl:bottom-1/4 translate-y-0 xl:translate-y-14 left-1/2 -translate-x-1/2">
            <div className="flex flex-col space-y-5 items-center text-center px-6">
              <h1 className="text-3xl xl:text-4xl text-white font-medium">Ask Questions with Ease</h1>
              <blockquote className="text-lg xl:text-xl">
                Post questions in any subject and get clear, reliable answers from students and contributors.
                Learning starts with a single question.
              </blockquote>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;
