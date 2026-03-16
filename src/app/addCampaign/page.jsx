

import AddCampaignForm from "./AddCampaignForm";


const AddCampaign = () => {
  

  return (
    <div>
      <div className="text-center my-4">
        <h2 className="text-secondary text-2xl md:text-4xl font-bold">
          Create a New Campaign{" "}
        </h2>
        <p className="text-accent-content md:font-bold my-2">
          Share your cause with the world and help make a meaningful impact.
          Fill in the details below to start <br />
          your campaign and inspire others to contribute.
        </p>
      </div>
      <div>
        <AddCampaignForm></AddCampaignForm>
      </div>
    </div>
  );
};

export default AddCampaign;
