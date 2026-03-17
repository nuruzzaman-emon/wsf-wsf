"use client";
import { editCampaign } from "@/components/actions/server/campaign";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

const EditPageForm = ({ campaign }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const imgApiKey = process.env.NEXT_PUBLIC_IMG_HOST_KEY;

  const handleEditCampaign = async (e) => {
    e.preventDefault();
    setLoading(true);
    const title = e.target.title.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const location = e.target.location.value;
    const goalAmount = e.target.goalAmount.value;
    const imageFile = e.target.image.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    const imgApiUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${imgApiKey}`;
    try {
      const res = await fetch(imgApiUrl, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      const payload = {
        id: campaign?._id,
        title,
        description,
        category,
        location,
        goalAmount,
        image: data.data.url,
        createdAt: campaign?.createdAt,
        deadline: campaign?.deadline,
      };
      const updateRes = await editCampaign(payload);
      if (updateRes.message) {
        Swal.fire({
          icon: "success",
          title: updateRes.message,
        });
        router.push("/manageCampaigns");
        setLoading(false);
      } else {
        Swal.fire({
          icon: "error",
          title: "Update Failed",
        });
        setLoading(false);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Something Went Wrong",
      });
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleEditCampaign}>
        <div className="card bg-base-100 w-full max-w-4xl mx-auto my-4 shadow-2xl">
          <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <fieldset className="shadow-xl p-5 rounded-lg">
              <div className="flex flex-col mb-4">
                <label className="font-bold mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  className="input w-full"
                  defaultValue={campaign?.title}
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="font-bold mb-1">Description</label>
                <textarea
                  name="description"
                  className="textarea w-full"
                  defaultValue={campaign?.description}
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="font-bold mb-1">Category</label>
                <input
                  type="text"
                  name="category"
                  className="input w-full"
                  defaultValue={campaign?.category}
                />
              </div>
            </fieldset>

            {/* Right Column */}
            <fieldset className="shadow-xl p-5 rounded-lg">
              <div className="flex flex-col mb-4">
                <label className="font-bold mb-1">Campaign Image</label>
                <input type="file" name="image" className="input w-full" />
              </div>
              <div className="flex flex-col mb-4">
                <label className="font-bold mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  className="input w-full"
                  defaultValue={campaign?.location}
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="font-bold mb-1">Goal Amount</label>
                <input
                  type="number"
                  name="goalAmount"
                  className="input w-full"
                  defaultValue={campaign?.goalAmount}
                />
              </div>
            </fieldset>
          </div>

          {/* Submit button */}
          <div className="text-center mt-6">
            <button className="btn btn-primary w-full md:w-auto">
              {loading ? "Editing..." : "Edit Campaign"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditPageForm;
