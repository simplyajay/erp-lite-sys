export const formatFormError = (error) => {
  const field = error.keyValue ? Object.keys(error.keyValue)[0] : undefined;
  const value = field ? error.keyValue[field] : undefined;

  return {
    status: error.status || error.code || 500,
    field,
    value,
    message: error.message || "Field is not valid",
  };
};
