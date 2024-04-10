import React from "react";
import Header from "../_components/Header";
import Offers from "../_components/Offers";

const Interests = () => {
  return (
    <div>
      <Header />
      <Offers />

      <div className="mb-20 flex justify-center">
        <div className="mt-7 w-[40%] rounded-xl border border-solid border-gray-300 p-5">
          <h1 className="py-4 text-center text-lg font-bold">
            Please mark your interests!
          </h1>
          <p className="py-4 text-center text-sm">We will keep you notified</p>

          <div>
            <h2 className="ml-5 text-sm font-semibold">My saved interests!</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;
