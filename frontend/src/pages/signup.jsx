import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";


const SignUp = () => {

  const [formData, setFormData] = useState({ email: "", password: "", mobile: "", dob: "", sex: "" });

  const submitFormData = async (e) => {
    e.preventDefault();
    const registerUser = await axios.post('/api/hello', formData);
    toast.success(registerUser?.data?.message);
  }



  return (
    <div className="flex h-screen min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gradient-to-r from-yellow-50 to-slate-200">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-4" onSubmit={submitFormData} action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="string"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone No.
              </label>
            </div>
            <div className="mt-2">
              <input
                id="mobile"
                name="mobile"
                type="string"
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="flex gap-8 items-center justify-between">
            <div className="w-[45%]">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Date of Birth
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                  id="dob"
                  name="dob"
                  type="date"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="w-[45%]">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Sex
                </label>
              </div>
              <div className="mt-2 w-full">
                <select onChange={(e) => setFormData({ ...formData, sex: e.target.value })}
                  id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2">
                  <option selected>Choose your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">others</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?{" "}
          <a
            href="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login here!
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
