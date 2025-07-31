import { useRegistrationFlow } from "./useRegistrationFlow";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { getValidationSchema } from "../util/form.util";
import { scrollToTop } from "@/core/utils/scroll";
import { useRouter } from "next/navigation";
import useRegistrationStore from "@/store/useRegistration";

const useRegistration = () => {
  const { setLoading, removeCurrentError, flow, setFlow } = useRegistrationStore((state) => state);
  const previousAccountTypeRef = useRef(null);
  const previousFlow = useRef(null);
  const router = useRouter();

  const validationSchema = getValidationSchema(flow);

  const formMethods = useForm({
    mode: "onSubmit",
    reValidateMode: "onBlur",
    resolver: yupResolver(validationSchema),
    shouldFocusError: false,
  });

  const { reset, getValues, resetField } = formMethods;

  const accountType = getValues("accountType");

  const { handleValidate, handleRegister, handleNext } = useRegistrationFlow({
    formMethods,
    flow,
  });

  useEffect(() => {
    removeCurrentError();
    if (previousFlow.current === "accountInfo" && flow !== "accountInfo") {
      resetField("user.password");
      resetField("user.confirmpassword");
    }

    previousFlow.current = flow;

    if (flow !== "accountType") {
      if (previousAccountTypeRef.current && previousAccountTypeRef.current !== accountType) {
        reset({ accountType: accountType }); // reset all fields except accountType
      } else {
        const cached = cachedData[flow]?.values;
        reset({ accountType: accountType, ...cached });
      }

      previousAccountTypeRef.current = accountType;
    }

    scrollToTop();
  }, [reset, resetField, flow, removeCurrentError]);

  const handleFormSubmit = async () => {
    try {
      setLoading(true);
      removeCurrentError();

      if (flow === "confirmed") handleRegister();

      const validator = await handleValidate();

      if (!validator.ok) console.log("Validation error");

      if (validator.ok) {
        const { isFormValid } = validator;
        if (isFormValid) {
          const nextFlow = validator.flow;
          console.log(validator.flow);
          handleNext(nextFlow);
        }
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
    flow,
    setFlow,
  };
};

export default useRegistration;
