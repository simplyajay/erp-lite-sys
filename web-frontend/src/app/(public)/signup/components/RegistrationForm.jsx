"use client";
import React from "react";
import Button from "./formElements/Button";
import AccountType from "./steps/AccountType";
import BusinessDetails from "./steps/BusinessDetails";
import PersonalInformation from "./steps/PersonalInformation";
import AccountInformation from "./steps/AccountInformation";
import ReviewInformation from "./steps/ReviewInformation";
import Success from "./steps/Success";
import StepIndicator from "./formElements/StepIndicator";
import useRegistration from "../hooks/useRegistration";
import LoadingBar from "./formElements/LoadingBar";
import useRegistrationUiStore from "@/store/useRegistration";
import { FormProvider } from "react-hook-form";

const RegistrationForm = ({ cachedData }) => {
  const { currentFlow } = cachedData;

  const { currentStep, handleFormSubmit, handleNext, formMethods } = useRegistration({
    cachedData,
  });

  const { loading } = useRegistrationUiStore((state) => state);

  const { getValues, handleSubmit } = formMethods;

  const values = getValues();

  const stepsMap = {
    accountType: { Component: AccountType, isFormStep: true },
    businessInfo: { Component: BusinessDetails, isFormStep: true },
    personalInfo: { Component: PersonalInformation, isFormStep: true },
    accountInfo: { Component: AccountInformation, isFormStep: true },
    review: { Component: ReviewInformation },
    confirmed: { Component: Success },
  };

  const StepComponent = stepsMap[currentFlow];

  const renderStep = (step) => {
    const { Component, isFormStep } = step;

    if (isFormStep) {
      return (
        <FormProvider {...formMethods}>
          <form
            className={`flex-1 w-full flex flex-col gap-10 ${
              loading ? "opacity-60" : "opacity-100"
            }`}
            onSubmit={handleSubmit(() => {
              handleFormSubmit();
            })}
          >
            <Component />
            <Button loading={loading} currentFlow={currentFlow} />
          </form>
        </FormProvider>
      );
    }

    if (currentFlow === "review") {
      return <Component values={values} onSubmit={handleNext} />;
    }

    return <Component />;
  };

  return (
    <div className="relative flex-1 card-container">
      <LoadingBar />
      <div className="flex-1 w-full flex flex-col p-8 gap-10 justify-start items-center">
        <StepIndicator currentStep={currentStep} accountType={values.accountType} />
        {renderStep(StepComponent)}
      </div>
    </div>
  );
};

export default RegistrationForm;
