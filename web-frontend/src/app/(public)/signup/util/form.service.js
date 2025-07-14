import { validateRegistrationStep } from "@/api/auth";
import useRegistrationUiStore from "@/store/useRegistration";

export const handleFormValidation = async ({ values = {}, flow, setError }) => {
  const { setCurrentError, identity } = useRegistrationUiStore.getState();

  const res = await validateRegistrationStep(values, { params: { flow } });

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const entity = flow === "businessInfo" ? "organization" : "user";

  if (res.ok) {
    if (res.error) {
      const error = res.error;
      const field = error.field;
      setError(`${entity}.${field}`, { type: "manual", message: error.message });
      return { ok: false };
    }

    const { identity, ...rest } = res.payload;

    return { ok: true, ...rest };
  } else {
    const message = `Oops! Something went wrong (Status ${res.status}): ${res.message}`;

    setCurrentError({ status: res.status, message });
    return { ok: false };
  }
};
