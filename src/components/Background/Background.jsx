import React from "react";

function Background() {
  return (
    <div className="w-full fixed h-screen z-0">
      <div className="w-full h-full relative">
        <img
          src="https://www.wallpapertip.com/wmimgs/9-99085_ultra-hd-4k-mountain.jpg"
          className="w-full object-cover z-0 top-0 left-0 h-full absolute"
          alt=""
        />
        <div className="bg-black w-full h-full z-10 top-0 left-0 opacity-50"></div>
      </div>
    </div>
  );
}

export default Background;
