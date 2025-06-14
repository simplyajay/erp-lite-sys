import useRegistrationUiStore from "@/store/useRegistration";
import { useRegistrationSubmit } from "./useRegistrationSubmit";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getValidationSchema } from "../util/form.util";
import { scrollToTop } from "@/utils/utils";
import { useStepNavigation } from "./useStepNavigation";

const useRegistration = ({ cachedData }) => {
  const { currentFlow, ...currentData } = cachedData;
  const { setLoading, removeCurrentError } = useRegistrationUiStore((state) => state);
  const previousAccountTypeRef = useRef(null);
  const previousFlow = useRef(null);

  const validationSchema = getValidationSchema(currentFlow);

  const formMethods = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    resolver: yupResolver(validationSchema),
    shouldFocusError: false,
  });

  const { reset, getValues, resetField } = formMethods;

  const accountType = getValues("accountType");

  const { handleNext } = useStepNavigation();

  const { handleValidate, handleRegister } = useRegistrationSubmit({
    formMethods,
    currentFlow,
  });

  useEffect(() => {
    removeCurrentError();
    if (previousFlow.current === "accountInfo" && currentFlow !== "accountInfo") {
      resetField("user.password");
      resetField("user.confirmpassword");
    }

    previousFlow.current = currentFlow;

    if (currentFlow !== "accountType") {
      if (previousAccountTypeRef.current && previousAccountTypeRef.current !== accountType) {
        reset({ accountType: accountType }); // reset all fields except accountType
      } else {
        const cached = cachedData[currentFlow]?.values;
        reset({ accountType: accountType, ...cached });
      }

      previousAccountTypeRef.current = accountType;
    }

    scrollToTop();
  }, [reset, resetField, currentFlow, removeCurrentError]);

  const handleFormSubmit = async () => {
    try {
      setLoading(true);
      removeCurrentError();

      if (currentFlow === "confirmed") handleRegister();
      const validator = await handleValidate();
      if (validator.ok) {
        const nextFlow = validator.currentFlow;
        const { identity } = validator[nextFlow];
        handleNext(identity, nextFlow);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return {
    handleFormSubmit,
    handleNext,
    formMethods,
  };
};

export default useRegistration;
