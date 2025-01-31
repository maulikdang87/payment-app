"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children? : ReactNode,
  onclick : ()=> void
}

export const Button = ({children, onclick }: ButtonProps) => {
  return (
    <button
      className= {children == "Logout" ?"bg-red-500 px-3 py-2 rounded font-light text-white" : "bg-blue-900 font-light text-white px-3 py-2 rounded" }
      onClick={onclick}
    >
      {children}
    </button>
  );
};
