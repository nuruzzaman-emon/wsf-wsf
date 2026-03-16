"use client"
import React from "react";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="card bg-base-100  max-w-lg shrink-0 shadow-2xl my-12 mx-auto">
      <div className="card-body">
        <div className="text-center my-4">
          <h2 className="text-secondary text-2xl md:text-4xl font-bold">
            Welcome Back
          </h2>
          <p className="text-accent-content md:font-bold my-2">
            Log in to support causes, follow campaigns, and help create real change together.
          </p>
        </div>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default Login;
