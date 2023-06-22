import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";
import useTitle from "../useTitle";
const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useTitle('Login')
  const [error, setError] = useState("");
  const { user, signInUser, googleLogin, githubLogin } =
    useContext(AuthContext);
  const naviagte = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email,password);
    form.reset();
    if (email.length == 0 || password.length == 0) {
      setError("Please provide valid email and password");
      return;
    }
    signInUser(email, password)
      .then((res) => {
        // console.log(res.user);
        naviagte(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message.includes("wrong-password")) {
          setError("Password is wrong!");
        } else if (error.message.includes("user-not-found")) {
          setError("You are not registered. Please register.");
        }
      });
  };

  const handleGoogleLogin = () => {
    setError("");
    googleLogin()
      .then((result) => {
        setError("");
        // console.log(user);
        naviagte(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        setError("An unexpected error occured!");
      });
  };
  const handleGitHubLogin = () => {
    setError("");
    githubLogin()
      .then((res) => {
        // console.log(user);
        naviagte(from, { replace: true });
      })
      .catch((err) => {
        console.log(err.message);
        setError("An unexpected error occured!");
      });
  };

  return (
    <div>
      <div className="bg-amber-300">
        <Navbar />
      </div>
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content w-full gap-10 flex flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-amber-400 text-5xl font-bold">Login now!</h1>
              <p className="text-white py-6">
                Beat your hunger with our thousands of <br /> unique recipes.
                One place for all foodie people!
              </p>
            </div>
            <div className="rounded-lg flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <p className="text-red-600">
                    <small>{error}</small>
                  </p>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-4">
                  <button className="my-btn text-white">Login</button>
                </div>
              </form>
              <div className="mb-8 -mt-6 flex justify-center text-slate-400 font-medium">
                <p ><small>Or Login with </small></p>
              </div>
              <div className="-mt-6 flex justify-center gap-6 mx-2 lg:mx-0">
                <div className="form-control">
                  <button
                    onClick={handleGoogleLogin}
                    className="my-btn-outline"
                  >
                    <FaGoogle className="inline-flex mb-1 mr-2 text-xl" />
                    Google
                  </button>
                </div>
                <div className="form-control">
                  <button
                    onClick={handleGitHubLogin}
                    className="my-btn-outline"
                  >
                    <FaGithub className="inline-flex mb-1 mr-2 text-xl" />
                    Github
                  </button>
                </div>
              </div>
              <Link className="btn w-full btn-link normal-case" to="/register">
                New here! Please Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
