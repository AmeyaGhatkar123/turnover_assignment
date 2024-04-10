"use client";
import React, { useState } from "react";
import Header from "../_components/Header";
import Offers from "../_components/Offers";
import { useRouter } from "next/navigation";

const Verify = () => {
  const [values, setValues] = useState(["", "", "", "", "", "", "", ""]);

  const router = useRouter();

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const inputValue = e.target.value;
    if (/^\d$/.test(inputValue)) {
      const newValues = [...values];
      newValues[index] = inputValue;
      setValues(newValues);
    }
  };

  const handleVerify = () => {
    if (values.join("") === "12345678") {
      router.push("/Interests");
    }
  };

  return (
    <div>
      <Header />
      <Offers />

      <div className="mb-20 flex justify-center">
        <div className="mt-7 w-[40%] rounded-xl border border-solid border-gray-300 p-5">
          <h1 className="py-4 text-center text-lg font-bold">
            Verify your email
          </h1>
          <p className="py-4 text-center text-sm">
            Enter the 8 digit code you have received on anu***@gmail.com
          </p>

          <div className="my-4 ml-5">
            <p className="mb-1 ml-2">Code</p>
            <div>
              {values.map((value, index) => (
                <input
                  key={index}
                  className="mx-1 h-8 w-10 rounded-md border border-solid border-gray-300 p-3"
                  type="text"
                  maxLength={1}
                  value={value}
                  onChange={(e) => handleChange(index, e)}
                />
              ))}
            </div>
          </div>

          <button
            onClick={handleVerify}
            className="my-4 ml-5 w-[92%] rounded-md border border-solid border-gray-300 bg-black p-2 text-white"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default Verify;
