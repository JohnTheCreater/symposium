import React from "react";
import buslogo from "./Larana, Inc..png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between w-full jj:w-[105%] m-0 p-0 shadow-lg xl:bg-yellow-200 jj:bg-yellow-200">
      <div className="flex items-center ">
        {" "}
        <div className="flex gap-3 m-5 items-center">
          <img src={buslogo} className=" w-[25%]  rounded-[100%]" alt="logo" />
          <h1 class="font-serif lg:text-3xl jj:text-2xl capitalize text-green-900 font-bold">
          
            TN bus
          </h1>
        </div>{" "}
      </div>
      <div className="flex items-center">
        <nav>
          <ul className="flex m-5 gap-10 justify-center items-center">
            <li className="">
              <Link to={"/"}>Home</Link>
            </li>
            <li className=" ">
              <Link to={"/information"}>Information</Link>
            </li>
         
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
