import zxcvbn from "zxcvbn";
import createError from "http-errors";

const isPasswordStrong = (pw) => {
  const hasUppercase = /[A-Z]/.test(pw);
  const hasNumber = /\d/.test(pw);
  const hasSymbol = /[^A-Za-z0-9]/.test(pw);

  const checksPassed = [hasUppercase, hasNumber, hasSymbol].filter(Boolean).length;

  return checksPassed >= 2;
};

export const validatePassword = async (pw) => {
  const password = pw.toLowerCase();

  const result = zxcvbn(password);

  const isStrong = isPasswordStrong(pw);

  if (result.score < 4 || !isStrong) {
    const error = createError(
      422,
      "Please choose a stronger password. Try a mix of letters, numbers, and symbols."
    );
    error.keyValue = { password: "password" };
    throw error;
  }
};
