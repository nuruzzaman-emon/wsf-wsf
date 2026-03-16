"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { updateUser } from "@/components/actions/server/auth";
import Swal from "sweetalert2";

const UpdateProfile = () => {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const imgApiKey = process.env.NEXT_PUBLIC_IMG_HOST_KEY;

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updateFormData = e.target;
    const name = updateFormData.name.value;
    const role = updateFormData.role.value;
    const imageFile = updateFormData.image.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    const image_api_url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgApiKey}`;
    try {
      const imageRes = await fetch(image_api_url, {
        method: "POST",
        body: formData,
      });
      const data = await imageRes.json();
      const image = data.data.url;

      // submit campaign to db
      const updatedoc = {
        id: session?.id,
        name,
        image,
      };
      const result =await updateUser(updatedoc);

      if (result.message) {
        Swal.fire({
          icon: "success",
          title: "User Updated!",
          text: result.message,
        });
        router.push("/myProfile");
        setLoading(false);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `error: ${error.message}`,
        footer: '<a href="#">Why do I have this issue?</a>',
      });
      setLoading(false);
    }

  };

  return (
    <div className="max-w-3xl mx-auto mt-12 p-8 bg-white shadow-xl rounded-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Update Profile</h1>

      <form onSubmit={handleUpdate} className="flex flex-col gap-6">
        {/* Profile Image */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-40 h-40 md:w-48 md:h-48">
            <Image
              src={session?.user?.image}
              alt={session?.name}
              fill
              className="rounded-full object-cover border-4 border-primary shadow-lg"
            />
          </div>
          <input
            type="file"
            name="image"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>

        {/* Name & Email */}
        <div className="flex flex-col gap-4">
          <label className="flex flex-col">
            Name
            <input
              type="text"
              name={"name"}
              defaultValue={session?.name}
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="flex flex-col">
            Email
            <input
              type="email"
              className="input input-bordered w-full"
              defaultValue={session?.email}
              required
              disabled
            />
            <span className="text-sm text-gray-400">
              Email cannot be changed
            </span>
          </label>

          <label className="flex flex-col">
            Role
            <input
              type="text"
              name={"role"}
              defaultValue={session?.role}
              className="input input-bordered w-full"
              disabled
            />
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn btn-primary px-6 py-2 text-lg hover:scale-105 transition-transform"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
