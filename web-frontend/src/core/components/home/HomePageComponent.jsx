import React from "react";
import { ToSignup, ToLogin } from "./HomepageButtons";

const GuestComponent = () => {
  return (
    <div className="flex gap-10">
      <ToLogin />
      <ToSignup />
    </div>
  );
};

const UserComponent = ({ username }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h1>{`Welcome back, ${username}`}</h1>
      <button
        type="button"
        className="p-2 border border-gray-500 rounded-lg"
      >{`Dashboard >`}</button>
    </div>
  );
};

const HomePageComponent = () => {
  return <GuestComponent />;
};
export default HomePageComponent;
