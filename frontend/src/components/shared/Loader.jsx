import Lottie from "lottie-react";
import React from "react";
import animationData from "../../assets/loader.json";

function Loader() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-white border-2 border-black">
      <Lottie className="w-32" animationData={animationData} />
    </div>
  );
}

export default Loader;
