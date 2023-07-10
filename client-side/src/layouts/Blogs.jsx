import React, { useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import Pdf from "react-to-pdf";
import ReactToPdf from "react-to-pdf";
import { useRef } from "react";
import useTitle from "../useTitle";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useTitle("Blogs")
  const ref = useRef();
  return (
    <div>
      <div className="bg-amber-300">
        <Navbar />
      </div>
      <div  className="my-container">
        <h1 className="text-3xl lg:text-4xl text-amber-500 font-bold text-center my-6 py-4 rounded-md">
          Welcome to our blogs
        </h1>
        <div className="lg:flex lg:items-center lg:gap-4">
          <div className="sm:w-full lg:w-1/2 ">
            <img
              src="https://img.freepik.com/free-vector/thoughtful-woman-with-laptop-looking-big-question-mark_1150-39362.jpg?w=740&t=st=1683160139~exp=1683160739~hmac=b7601bd29e327329e37fd40cd1324fff7b963c8e95e4d2b9b7ef887e0abce828"
              className=""
              alt=""
            />
          </div>
          <div ref={ref} className="w-full lg:w-1/2">
            <div className="mt-16 mb-4 w-full">
              <div
                tabIndex={0}
                className="collapse collapse-arrow border border-amber-400 bg-base-100 rounded-box mt-4"
              >
                <div className="collapse-title text-xl font-medium">
                  Differences between uncontrolled and controlled components
                </div>
                <div className="collapse-content text-start">
                  <p>
                    <strong>Uncontrolled components</strong> in a system are
                    like wild cards that do their own thing and can cause
                    problems. <strong>Controlled components</strong>, on the
                    other hand, are like well-behaved kids who follow the rules
                    and can be directed by external factors. Controlled
                    components keep the system stable and predictable, while
                    uncontrolled components add some excitement but can also be
                    risky.
                  </p>
                </div>
              </div>
              <div
                tabIndex={1}
                className="collapse collapse-arrow border border-amber-400 bg-base-100 rounded-box mt-4"
              >
                <div className="collapse-title text-xl font-medium">
                  How to validate React props using PropTypes?
                </div>
                <div className="collapse-content text-start">
                  <p>
                    <strong>PropTypes</strong> exports a range of validators that can be used to
                    make sure the data you receive is valid. It is React’s
                    internal mechanism for adding type checking to component
                    props. When props are passed to a React component, they are
                    checked against the type definitions configured in the
                    propTypes property. When an invalid value is passed for a
                    prop, a warning is displayed on the JavaScript console. Some
                    validators for the basic data types:
                    <li>PropTypes.any</li>
                    <li>PropTypes.bool</li>
                    <li>PropTypes.number</li>
                    etc.
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                className="collapse collapse-arrow border border-amber-400 bg-base-100 rounded-box mt-4"
              >
                <div className="collapse-title text-xl font-medium">
                  Difference between nodejs and express js
                </div>
                <div className="collapse-content text-start">
                  <p>
                    Node.js is like a computer program that lets us use
                    JavaScript on the server-side, which means we can create
                    server-side applications using JavaScript. Express.js is
                    like a toolbox built on top of Node.js that makes it easier
                    to create web applications and APIs. Express.js provides
                    tools for handling requests and responses, routing,
                    middleware, and more.
                  </p>
                </div>
              </div>
              <div
                tabIndex={0}
                className="collapse collapse-arrow border border-amber-400 bg-base-100 rounded-box mt-4"
              >
                <div className="collapse-title text-xl font-medium">
                  What is a custom hook, and why will you create a custom hook?
                </div>
                <div className="collapse-content text-start">
                  <p>
                    A <strong>custom hook</strong> is a reusable function in React that allows
                    you to extract and reuse logic from components. You can
                    create a custom hook when you find yourself repeating the
                    same code or patterns across multiple components. Creating a
                    custom hook can simplify your code by reducing duplication
                    and promoting better organization. Custom hooks can also be
                    shared across different components and projects, making them
                    a powerful tool for code reuse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <ReactToPdf
          width={500}
          targetRef={ref}
          filename="document.pdf"
          x={1}
          y={2}
        >
          {({ toPdf }) => (
            <button onClick={toPdf} className="my-btn">
              Generate PDF
            </button>
          )}
        </ReactToPdf>
      </div>
    </div>
  );
};

export default Blogs;
