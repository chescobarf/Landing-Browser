import React from "react";

function Search() {
  const searchGoogle = (e) => {
    if (e.key === "Enter") {
      //e.key nos indica que se apreto
      e.preventDefault();
      let text = e.target.value;
      text = text.replaceAll(" ", "+");
      window.open(`https://www.google.com/search?q=${text}`);
    }
  };

  return (
    <div>
      <input
        type="text"
        className="px-3 py-2 bg-gray-200 bg-opacity-20 border-2 border-blue-300 rounded-3xl text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:bg-opacity-10 mb-5"
        placeholder="Buscador Google..."
        onKeyDown={searchGoogle}
      />
    </div>
  );
}

export default Search;
