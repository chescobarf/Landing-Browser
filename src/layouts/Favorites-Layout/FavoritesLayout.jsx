import React from "react";

function FavoritesLayout({ children }) {
  return <div className="grid grid-cols-4 grid-rows-4 w-full">{children}</div>;
}

export default FavoritesLayout;
