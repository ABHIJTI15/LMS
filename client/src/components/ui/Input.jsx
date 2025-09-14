import React from "react";

export const Input = (props) => {
  return (
    <input
      {...props}
      className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
};
