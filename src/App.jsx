import React, { useState } from "react";
import "./App.css"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [email, setEmail] = useState("")
  const handleEmail = (e) =>{
    setEmail(e.target.value)
  }
  return (
    <div className="w-full h-screen relative bg-img">
     <Navbar />

     <div className="h-[90%] w-full flex-col flex items-center justify-center text-white">
      <div className="w-[250px] backdrop-blur-md bg-opacity-10 bg-teal-500 py-8 px-3 rounded-md">
        <h2 className="text-3xl font-bold">WELCOME TO FNAXIOM FULL STACK INTERNSHIP ASSESSMENT</h2>
        <input type="email" name="email" value={email} onChange={handleEmail} placeholder="Enter your email" className="focus:border-2 placeholder:text-black outline-none w-full px-2 py-1 mt-2 focus:border-white rounded-md bg-transparent backdrop-blur-lg border-2 border-white"/>
        <button className="bg-orange-400 px-2 py-1 rounded-full text-2xl font-bold mt-4 mx-auto w-full">
          GET STARTED
        </button>
      </div>

      <div className="w-[90%] flex gap-2 justify-center mt-8 flex-wrap">
        <Footer text={"CODING CHALLENGE"} bg={"blue"}/>
        <Footer text={"LIVE ASSESSMENT"} bg={"orange"}/>
        <Footer text={"PROJECT SUBMISSION"} bg={"orange"}/>
        <Footer text={"PORTFOLIO ASSESSMENT"} bg={"orange"}/>
        <Footer text={"CODE ASSESSMENT"} bg={"orange"}/>
        <Footer text={"CODING CHALLENGE"} bg={"orange"}/>
      </div>
     </div>
    </div>
  );
};

export default App;
