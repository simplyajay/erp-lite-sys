import React from "react";
import Link from "next/link";
import RegistrationForm from "./components/RegistrationForm";
import SomethingWentWrong from "@/core/components/errors/SomethingWentWrong";
import { redirect } from "next/navigation";
import { getCachedData } from "@/api/auth";
import { serverAPI } from "@/core/axios/axios.server";
import { flowMap } from "./util/form.util";
import { cookies } from "next/headers";

const RegistrationPage = async ({ searchParams }) => {
  let { identity, flow } = await searchParams;
  flow = flow in flowMap ? flow : "accountType";

  const cookieStore = await cookies();
  const regCookie = cookieStore.get(process.env.REGISTRATION_COOKIENAME);

  const res = await serverAPI(
    (headers) => getCachedData({ identity }, { headers }),
    process.env.REGISTRATION_COOKIENAME
  );

  //should only happen in an unexpected error
  if (!res.ok || !res.payload || "error" in res.payload) {
    return <SomethingWentWrong />;
  }

  //res always returns identity
  //this page should redirect to identity if identity is null or undefined
  //there will always be a session because backend will just create one if none is present

  const { payload } = res;
  const registration = payload;

  //check if flow is is included in completed steps. if its not, default to accountType. if flow in flowMap and flow in completedSteps

  if (!identity) redirect(`/signup?identity=${registration?.identity}&flow=${flow}`);

  // if (payload?.redirect) redirect(`/signup?identity=${registration?.identity}&flow=${flow}`);

  return (
    <div className="main-container flex items-center justify-center">
      <div className="w-full md:w-[700px] flex flex-col justify-center items-center gap-4">
        <RegistrationForm />
        <div className="w-full flex items-center">
          <div className="text-body-sm flex gap-1">
            <span className="text-body-sm ">Already have an account?</span>
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
