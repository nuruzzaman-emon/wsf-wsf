import React from "react";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <div className="card bg-base-100  max-w-lg shrink-0 shadow-2xl my-12 mx-auto">
      <div className="card-body">
        <div className="text-center my-4">
          <h2 className="text-secondary text-2xl md:text-4xl font-bold">
            Create Account
          </h2>
          <p className="text-accent-content md:font-bold my-2">
            Become part of a community dedicated to helping others.
          </p>
        </div>
        <RegisterForm></RegisterForm>
      </div>
    </div>
  );
};

export default Register;
