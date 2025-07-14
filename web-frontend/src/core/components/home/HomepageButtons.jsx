"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Buttons = ({ handleClick, children }) => {
  return (
    <button type="button" className="p-2 border border-gray-500 rounded-lg" onClick={handleClick}>
      {children}
    </button>
  );
};

export const ToSignup = () => {
  const router = useRouter();

  return <Buttons handleClick={() => router.push("/signup")}>Register</Buttons>;
};

export const ToLogin = () => {
  const router = useRouter();

  return <Buttons handleClick={() => router.push("/login")}>Register</Buttons>;
};
