import React from "react";
import {Link} from 'react-router-dom'
const Cards = ({ title, entries, imageSrc, buttonText,destination }) => {
    const handleClick = (e)=>{
        e.preventDefault();
        window.location.href = destination}
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg  p-10 bg-gray-100 " >
     <div className="flex items-center">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{entries}</p>
      </div>
      <div><img className="w-16" src={imageSrc} alt={title} /></div>
      
      </div>
      
      <div className="px-6 py-4 text-center ">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded " onClick={handleClick}>
       
          {buttonText}
        </button>
      
      </div>
    </div>
  );
};

export default Cards;