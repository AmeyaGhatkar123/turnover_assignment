import React, { memo } from "react";
import OffersPrevious from "../assets/icons/OffersPrevious";
import OffersNext from "../assets/icons/OffersNext";

const Offers = () => {
  return (
    <div className=" flex flex-row justify-center bg-gray-100">
      <div className="flex flex-row py-1">
        <div className="mt-[5px]">
          <OffersPrevious />
        </div>
        <p className="mx-3">Get 10% off on business sign up</p>
        <div className="mt-[4px]">
          <OffersNext />
        </div>
      </div>
    </div>
  );
};

export default memo(Offers);
