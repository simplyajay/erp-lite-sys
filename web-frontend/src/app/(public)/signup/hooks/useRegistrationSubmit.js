import useRegistrationUiStore from "@/store/useRegistration";
import { handleFormValidation } from "../util/form.service";

export const useRegistrationSubmit = ({ formMethods, currentFlow }) => {
  const { getValues, setError } = formMethods;

  const handleValidate = async () => {
    const values = getValues();

    const validator = await handleFormValidation({ values, currentFlow, setError });

    if (!validator.ok) return { ok: false };

    return validator;
  };

  const handleRegister = async () => {
    console.log("register");
  };

  return { handleValidate, handleRegister };
};
