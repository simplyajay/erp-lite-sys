import React from "react";
import Link from "next/link";
import RegistrationForm from "./components/RegistrationForm";
import SomethingWentWrong from "@/core/components/errors/SomethingWentWrong";
import { redirect } from "next/navigation";
import { getCachedData } from "@/api/auth";
import { serverAPI } from "@/core/axios/axios.server";
import { flowMap } from "./util/form.util";
import { headers } from "next/headers";

const RegistrationPage = async ({ searchParams }) => {
  let { identity, flow } = await searchParams;
  flow = flow in flowMap ? flow : "accountType";

  const res = await serverAPI(
    (headers) => getCachedData({ identity }, { headers }),
    process.env.GUEST
  );

  //should only happen in an unexpected error
  if (!res.ok || !res.payload || !res.payload?.registration || res.payload?.error) {
    return <SomethingWentWrong />;
  }

  const { session, payload } = res;
  const { registration } = payload;

  if (session && session.isValid) {
    const { createdAt, expiresAt } = session.data; // UPDATE THE GLOBAL STORE WITH THIS DATA
  }

  if (payload?.redirect) redirect(`/signup?identity=${registration?.identity}&flow=${flow}`);

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
