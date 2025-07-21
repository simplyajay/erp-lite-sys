import zxcvbn from "zxcvbn";
import createError from "http-errors";
import { ExpectedError } from "./services";

const isPasswordStrong = (pw: string): boolean => {
  const hasUppercase = /[A-Z]/.test(pw);
  const hasNumber = /\d/.test(pw);
  const hasSymbol = /[^A-Za-z0-9]/.test(pw);

  const checksPassed = [hasUppercase, hasNumber, hasSymbol].filter(Boolean).length;

  return checksPassed >= 2;
};

export const validatePassword = async (pw: string): Promise<void> => {
  const password = pw.toLowerCase();
  const result = zxcvbn(password);
  const isStrong = isPasswordStrong(pw);

  if (result.score < 4 || !isStrong) {
    throw new ExpectedError(
      422,
      "Please choose a stronger password. Try a mix of letters, numbers, and symbols.",
      "password"
    );
  }
};
