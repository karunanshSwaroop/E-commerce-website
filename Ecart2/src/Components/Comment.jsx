import React from "react";

const Comment = ({ review, setOpenIdx, openIdx, idx }) => {
  const { rating, comment, reviewerName } = review;
  const isOpen = openIdx === idx;

  return (
    <div className="my-4 w-11/12 md:w-3/4 mx-auto">
      <div
        className="bg-gray-200 hover:bg-gray-300 transition-colors duration-200 text-black flex justify-between items-center p-4 rounded-lg shadow-md cursor-pointer"
        onClick={() => setOpenIdx(isOpen ? null : idx)} // Toggle open/close
      >
        <span className="text-xl font-semibold">{reviewerName}</span>
        <span className="text-2xl">{isOpen ? "🔽" : "🔼"}</span>
      </div>
      {isOpen && (
        <div className="bg-gray-100 text-black p-4 mt-2 rounded-lg shadow-inner">
          <p className="text-lg font-medium mb-2">{comment || "No comment provided"}</p>
          <p className="text-lg text-blue-600 font-semibold">{rating ? `${rating} ★` : "No rating"}</p>
        </div>
      )}
    </div>
  );
};

export default Comment;
