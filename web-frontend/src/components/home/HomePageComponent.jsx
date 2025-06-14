"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { generateRegSessionId } from "@/api/auth";

const GuestComponent = ({ router }) => {
  const handleOnCreateAccount = async () => {
    const res = await generateRegSessionId({});

    if (!res.ok) {
      console.error("Error: ", res.status);
    }

    const { currentFlow, ...rest } = res.payload;
    const { identity } = rest[currentFlow];

    const url = `/signup?identity=${encodeURIComponent(identity)}&flow=${encodeURIComponent(
      currentFlow
    )}`;

    router.push(url);
  };
  return (
    <div className="flex gap-10">
      <button
        type="button"
        className="p-2 border border-gray-500 rounded-lg"
        onClick={() => {
          router.push("/login");
        }}
      >
        Login
      </button>
      <button
        type="button"
        className="p-2 border border-gray-500 rounded-lg"
        onClick={handleOnCreateAccount}
      >
        Register
      </button>
    </div>
  );
};

const UserComponent = ({ username, router }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h1>{`Welcome back, ${username}`}</h1>
      <button
        type="button"
        className="p-2 border border-gray-500 rounded-lg"
        onClick={() => {
          router.push("/dashboard");
          router.refresh();
        }}
      >{`Dashboard >`}</button>
    </div>
  );
};

const HomePageComponent = () => {
  const router = useRouter();

  return <GuestComponent router={router} />;
};
export default HomePageComponent;
