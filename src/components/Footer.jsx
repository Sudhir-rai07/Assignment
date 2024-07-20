import React from "react";

const Footer = ({ text, bg }) => {
  return (
    <div className="w-[200px] backdrop-blur-md bg-opacity-10 bg-teal-500 rounded-lg px-2 py-2">
      <div className="text-center">
        <h2 className="text-2xl mb-6">{text}</h2>
        <div className="text-sm">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <button className={`bg-${bg}-400 px-2 py-1 rounded-full text-xl font-bold mt-6 mx-auto w-full`}>
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default Footer;
