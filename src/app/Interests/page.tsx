"use client";
import React, { useEffect, useMemo, useState } from "react";
import Header from "../_components/Header";
import Offers from "../_components/Offers";
import { trpc } from "~/utils/trpc";

const Interests = () => {
  const [interest, setInterest] = useState<any>(null);
  const [displayInterests, setDisplayInterests] = useState<any>(null);
  const [displayPagination, setDisplayPagination] = useState<number[]>([]);
  const [currentSet, setCurrentSet] = useState<number>(0);
  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  const { data: getInterests } = trpc.getInterests.useQuery();

  const [currentPage, setCurrentPage] = useState(1);
  const interestsPerPage = 6;

  const getPaginatedInterests = (interestList) => {
    const indexOfLastInterest = currentPage * interestsPerPage;
    const indexOfFirstInterest = indexOfLastInterest - interestsPerPage;
    const currentInterests = interestList?.slice(
      indexOfFirstInterest,
      indexOfLastInterest,
    );

    setDisplayInterests(currentInterests);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    getPaginatedInterests(getInterests?.data.interests);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    getPaginatedInterests(getInterests?.data.interests);
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    getPaginatedInterests(getInterests?.data.interests);
  };

  const displayPageNumbers = (interestList, newSet: number) => {
    const tempArray = [];
    for (
      let i = 1;
      i <= Math.ceil(interestList?.length / interestsPerPage);
      i++
    ) {
      tempArray.push(i);
    }
    setPageNumbers(tempArray);
    const indexOfLastItem = (newSet + 1) * 6;
    const indexOfFirstItem = indexOfLastItem - 6;
    const currentItems = tempArray.slice(indexOfFirstItem, indexOfLastItem);
    setDisplayPagination(currentItems);
  };

  const prevSet = () => {
    setCurrentSet(currentSet - 1);
    const newSet = currentSet - 1;
    displayPageNumbers(getInterests?.data.interests, newSet);
  };

  const nextSet = () => {
    setCurrentSet(currentSet + 1);
    const newSet = currentSet + 1;
    displayPageNumbers(getInterests?.data.interests, newSet);
  };

  useEffect(() => {
    setInterest(getInterests?.data.interests);
    getPaginatedInterests(getInterests?.data.interests);
    displayPageNumbers(getInterests?.data.interests, 0);
  }, [getInterests]);

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
            <h2 className="text-m mb-2 ml-5 font-semibold">
              My saved interests!
            </h2>

            {displayInterests &&
              displayInterests.map((eachInterest) => (
                <div key={eachInterest.id} className="flex p-2">
                  <input
                    className="m-2 h-4 w-4 appearance-none rounded-md border border-gray-300 checked:border-transparent checked:bg-black checked:outline-none"
                    type="checkbox"
                  />
                  <p className="mt-1.5 text-sm">{eachInterest.interest}</p>
                </div>
              ))}

            <div>
              <div className="text-gray-400">
                <button
                  className="mr-2"
                  onClick={prevSet}
                  disabled={currentSet <= 0}
                >
                  {"<<"}
                </button>
                <button
                  className="mr-2"
                  onClick={prevPage}
                  disabled={currentPage === 1}
                >
                  {"<"}
                </button>
                {displayPagination.map((number) => (
                  <button
                    key={number}
                    onClick={() => goToPage(number)}
                    className={
                      currentPage === number
                        ? "p-2 font-bold text-black"
                        : "p-2"
                    }
                  >
                    {number}
                  </button>
                ))}
                <button
                  className="ml-2"
                  onClick={nextPage}
                  disabled={
                    currentPage ===
                    Math.ceil(interest?.length / interestsPerPage)
                  }
                >
                  {">"}
                </button>
                <button
                  className="ml-2"
                  onClick={nextSet}
                  disabled={
                    currentSet >= Math.ceil(pageNumbers?.length / 6) - 1
                  }
                >
                  {">>"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;
