import React from "react";
import Link from "next/link";
import RegistrationForm from "./components/RegistrationForm";
import { redirect } from "next/navigation";
import { getCachedData } from "@/api/auth";
import { serverAPI } from "@/lib/axios.server";

const RegistrationPage = async ({ searchParams }) => {
  //implement data persitence here

  //if identity is not clean, display something went wrong try again

  // on try again, just trigger another session

  const { identity, flow } = searchParams;

  const res = await serverAPI(
    (headers) => getCachedData({ identity, flow }, { headers }),
    process.env.NEXT_PUBLIC_TOKEN
  );

  console.log(res);

  if (!res.ok) {
    return <>error</>;
  }

  if (res.error?.status) {
    return <>error but status is ok</>;
    //redirect("/error");
  }

  const cachedData = res.payload;

  console.log(cachedData);

  return (
    <div className="main-container flex items-center justify-center">
      <div className="w-full md:w-[700px] flex flex-col justify-center items-center gap-4">
        <RegistrationForm cachedData={cachedData} />
        <div className="w-full flex items-center">
          <div className="text-body-sm flex gap-1">
            <span className="text-body-sm">Already have an account?</span>
            <Link href={"/login"} className="font-bold btn-primary-transparent">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
