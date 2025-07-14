import { handleFormValidation } from "../util/form.service";
import { useRouter, useSearchParams } from "next/navigation";

export const useRegistrationSubmit = ({ formMethods, flow }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { getValues, setError } = formMethods;

  const handleValidate = async () => {
    const values = getValues();

    const validator = await handleFormValidation({ values, flow, setError });

    if (!validator.ok) return { ok: false };

    return validator;
  };

  const handleRegister = async () => {
    console.log("register");
  };

  const handleNext = (flow) => {
    if (!flow) {
      console.error("flow not defined");
      return;
    }

    const params = new URLSearchParams(searchParams.toString());
    params.set("flow", flow);
    const url = `/signup?identity=${params.toString()}`;

    router.push(url);
  };

  return { handleValidate, handleRegister, handleNext };
};
