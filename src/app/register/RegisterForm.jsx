"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { signIn } from "next-auth/react";
import GoogleBtn from "@/components/GoogleBtn";
import { postUser } from "@/components/actions/server/auth";
import Link from "next/link";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const img_bb_key = process.env.NEXT_PUBLIC_IMG_HOST_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const registerData = e.target;
    const name = registerData.name.value;
    const email = registerData.email.value;
    const password = registerData.password.value;
    const imageFile = registerData.photo.files[0];

    try {
      //create imgbb live link
      const formData = new FormData();
      formData.append("image", imageFile);
      const img_api_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_bb_key}`;
      const imageRes = await fetch(img_api_url, {
        method: "POST",
        body: formData,
      });
      const data = await imageRes.json();
      const image = data.data.url;

      //create newUser
      const newUser = { name, email, password, image };
      const result = await postUser(newUser);

      //Automatically sign in user after registration
      if (result.message) {
        await signIn("credentials", {
          email,
          password,
          redirect: true,
          callbackUrl: "/",
        });
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `Awesome! ${result.message}`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset">
          <label className="font-bold">Name</label>
          <input
            type="text"
            name="name"
            className="w-full input my-2 focus:outline-primary"
            placeholder="Your Name"
            required
          />
          <label className="font-bold">Email</label>
          <input
            type="email"
            name="email"
            className="w-full input my-2 focus:outline-primary"
            placeholder="Your Email"
            required
          />
          <label className="font-bold">Password</label>
          <input
            type="password"
            name="password"
            className="w-full input my-2 focus:outline-primary"
            placeholder="Set a Password"
            required
          />
          <label className="font-bold">Photo</label>
          <input
            type="file"
            name="photo"
            className="w-full input my-2 focus:outline-primary"
            placeholder="Your Photo"
            required
          />

          <button
            className="btn btn-xs md:btn-md btn-primary mt-4"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register Now"}
          </button>
        </fieldset>
      </form>
      <GoogleBtn></GoogleBtn>
      <p className="my-3">
        Already Have An Account?{" "}
        <span className="text-bold text-blue-600 underline">
          <Link href={"/login"}>Login</Link>
        </span>
      </p>
    </div>
  );
};

export default RegisterForm;
