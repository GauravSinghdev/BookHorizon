import React, { useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";

const Signup = () => {
  const [error, setError] = useState(false);
  const [spin, setSpin] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setSpin(true);
    console.log(data);
  };

  const handlebtn = (e) => {
    e.preventDefault();
    setSpin(true);
  };

  const handleEye = (e) => {
    e.preventDefault();
    setShowPass((prev) => !prev);
  };

  const handleGoogleSignIn = () => {};

  return (
    <div className="h-[calc(100vh-120px)] mt-20 flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-[#FAFDFF] shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Signup Yourself
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
              autoComplete="false"
            />
          </div>
          <div className="mb-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          <div className="mb-5 relative">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type={!showPass ? "password" : "text"}
              name="password"
              id="password"
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />

            <button onClick={handleEye} className="absolute right-4 top-9">
              {!showPass ? (
                <FaRegEyeSlash className="w-5 h-5" />
              ) : (
                <FaRegEye className="w-5 h-5" />
              )}
            </button>
          </div>
          {error && (
            <p className="text-red-500 mb-2 text-sm">SomeThing Went Wrong</p>
          )}
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 py-2 rounded-sm focus:outline-none w-full text-center flex items-center justify-center"
            >
              <span className="text-center">
                {!spin ? "Signup" : <Spinner />}
              </span>
            </button>
          </div>
        </form>

        <p className="align-baseline text-center font-medium mt-4 text-base">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:text-blue-700">
            Login
          </Link>
        </p>

        {/* google sign in */}
        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex flex-wrap gap-1 items-center justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            <FcGoogle className="mr-2" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
