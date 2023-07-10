import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/shared/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import useTitle from "../useTitle";

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useTitle('Register')
  const { createUser, logOut } = useContext(AuthContext);
  const [regUser, setRegUser] = useState(null);
  const [error, setError] = useState("");
  const handleRegister = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    let photo = form.photo.value;

    if (email.length == 0 || password.length == 0) {
      setError("Please provide valid email and password");
      return;
    }
    if (password.length < 6) {
      setError("Password must have at least 6 characters");
      return;
    }
    createUser(email, password)
      .then((res) => {
        setRegUser(res.user);

        logOut()
          .then(() => {})
          .catch((err) => {});
        // console.log(res.user);
        fetch(photo).then(resp => {
          if(resp.url == photo){
            updateProfile(res.user, {
              displayName: name,
              photoURL: photo,
            })
              .then(() => {
              })
              .catch((err) => {
                console.log(err.message);
              });
          }
          else{
            photo= null
            updateProfile(res.user, {
              displayName: name,
              photoURL: photo,
            })
              .then(() => {
              })
              .catch((err) => {
                console.log(err.message);
              });
          }
        })

        
      })
      .catch((error) => {
        if (error.message.includes("email-already-in-use).")) {
          setError("You are already registered");
          form.reset();
          return;
        }
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
          {!regUser ? (
            <div className="mt-10 hero-content w-full gap-10 flex flex-col lg:flex-row">
              <div className="text-center lg:text-left">
                <h1 className="text-amber-400 text-5xl font-bold">
                  Register now!
                </h1>
                <p className="text-white py-6">
                  Beat your hunger with our thousands of <br /> unique recipes.
                  One place for all foodie people!
                </p>
              </div>
              <div className="rounded-lg flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="input input-bordered"
                    />
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
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo Url</span>
                    </label>
                    <input
                      type="text"
                      name="photo"
                      placeholder="Photo Url"
                      className="input input-bordered"
                    />
                  </div>
                  <p className="text-red-600">
                    <small>{error}</small>
                  </p>
                  <div className="form-control mt-6">
                    <button className="my-btn">Register</button>
                  </div>
                  <Link className="btn btn-link normal-case" to="/login">
                    Already registered? Please Login.
                  </Link>
                </form>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-amber-400 text-5xl font-bold mb-6">
                Welcome to chopSticks!
              </h1>
              <Link to="/login">
                <button className="bg-amber-500 px-5 py-2 rounded-md font-medium text-white">
                  {" "}
                  Login Now{" "}
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
