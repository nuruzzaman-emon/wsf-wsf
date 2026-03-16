"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Swal from "sweetalert2";


const AddCampaignForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const imgApiKey = process.env.NEXT_PUBLIC_IMG_HOST_KEY;


  const handleAddCampaign = async (e) => {
    setLoading(true);
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const location = e.target.location.value;
    const goalAmount = e.target.goalAmount.value;
    const imageFile = e.target.image.files[0];
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
      const campaignData = {
        title,
        description,
        image,
        category,
        location,
        goalAmount,
        deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        createdAt: new Date().toISOString(),
      };
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/campaigns`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(campaignData),
        },
      );
      const result = await res.json();
      if (result.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Campaign Created!",
          text: "Your campaign has been created successfully.",
        });
        router.push("/campaigns");
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
    <div>
      <form onSubmit={handleAddCampaign}>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl mx-auto my-4">
          <div className="card-body mx-auto">
            <fieldset className="fieldset flex flex-col md:flex-row justify-between md:gap-4">
              <div>
                <label className="font-bold ">Title</label>
                <input
                  type="text"
                  name="title"
                  className="input my-3 focus:outline-primary"
                  placeholder="Campaign Title"
                  required
                />
                <label className="font-bold ">Description</label>
                <textarea
                  name="description"
                  className="textarea my-3 focus:outline-primary"
                  placeholder="Campaign Description"
                  required
                ></textarea>
                <label className="font-bold">Category</label>
                <input
                  type="text"
                  name="category"
                  className="input my-3 focus:outline-primary"
                  placeholder="Campaign Category"
                  required
                />
              </div>
              <div>
                <label className="font-bold ">Campaign Image</label>
                <input
                  type="file"
                  name="image"
                  className="input my-3 focus:outline-primary"
                  placeholder="Campaign Image"
                  required
                />
                <label className="font-bold ">Location</label>
                <input
                  type="text"
                  name="location"
                  className="input my-3 focus:outline-primary"
                  placeholder="Campaign Location"
                  required
                />
                <label className="font-bold ">Goal Amount</label>
                <input
                  type="number"
                  name="goalAmount"
                  className="input my-3 focus:outline-primary"
                  placeholder="Goal Amount"
                  required
                />
              </div>
            </fieldset>
            <button disabled={loading} className="btn btn-primary mt-4">
              {loading && (
                <AiOutlineLoading3Quarters className="animate-spin" />
              )}
              Create Campaign
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCampaignForm;
