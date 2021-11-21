import React from "react";

function Container({ children }) {
  return (
    <main className="w-full fixed h-screen z-20 grid place-content-center">
      {children}
    </main>
  );
}

export default Container;
