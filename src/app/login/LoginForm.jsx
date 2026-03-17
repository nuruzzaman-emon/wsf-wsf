"use client";
import GoogleBtn from "@/components/GoogleBtn";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const loginData = e.target;
    const email = loginData.email.value;
    const password = loginData.password.value;

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res?.error) {
      setErr(res?.error);
    } else {
      window.location.href = "/";
    }
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <fieldset className="fieldset">
          <label className="font-bold">Email</label>
          <input
            type="email"
            name="email"
            className="w-full input my-2 focus:outline-primary"
            placeholder="Email"
            disabled={loading}
            required
          />
          <label className="font-bold">Password</label>
          <input
            type="password"
            name="password"
            className="w-full input my-2 focus:outline-primary"
            placeholder="Password"
            disabled={loading}
            required
          />

          {err && <p className="text-red-500 font-bold">{err}</p>}

          <button
            className="btn btn-xs md:btn-md btn-primary mt-4"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <AiOutlineLoading3Quarters className="animate-spin" /> Logging
                in...
              </span>
            ) : (
              "Login Now"
            )}
          </button>
        </fieldset>
      </form>
      <GoogleBtn></GoogleBtn>
      <p className="my-3">
        Did not have any account ?{" "}
        <span className="text-bold text-blue-600 underline">
          <Link href={"/register"}>Register</Link>
        </span>
      </p>
    </div>
  );
};

export default LoginForm;
