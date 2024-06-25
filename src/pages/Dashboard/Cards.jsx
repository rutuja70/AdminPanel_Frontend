import React from "react";
import { Link } from 'react-router-dom';

const Cards = ({ title, entries, imageSrc, buttonText, destination }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = destination;
  };

  return (
    <div className="max-w-xs mx-auto rounded overflow-hidden shadow-lg p-6 bg-gray-100 mb-4">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 mr-4">
          <img className="w-16" src={imageSrc} alt={title} />
        </div>
        <div className="flex-1">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{entries}</p>
        </div>
      </div>

      <div className="text-center">
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded inline-block"
          onClick={handleClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Cards;
