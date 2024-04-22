import React from "react";
import lists from "../../public/lists.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";


function Course() {
  console.log(lists);
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 sm:px-4 bg-slate-300 rounded-lg">
      <div className="items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-center py-10 text-black">
          We're delighted to have you{" "}
          <span className="text-pink-500">Here!</span>{" "}
          <span className="text-red-500">:)</span>
        </h1>
        <p className="text-center text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio earum
          dolor, illo placeat sunt eum ab exercitationem repudiandae soluta
          perspiciatis illum eveniet eius, pariatur itaque eos facere magni, ut
          iure. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Officiis, sit qui corporis alias exercitationem sed facere consectetur
          quae fuga quis a vitae sequi amet minus tempore est, corrupti nesciunt
          cum!
        </p>
        <Link to={"/"}>
        <button className="bg-pink-400 text-slate-100 py-2 px-8 rounded-lg mt-10 mb-10 hover:bg-pink-700  hover:text-white hover:px-10 duration-150">
          Back
        </button>
        </Link>
        
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {lists.map((item) => (
          <Cards key={item.id} item={item}/>
        ))}
      </div>
    </div>
  );
}

export default Course;
