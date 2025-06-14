import { cookies } from "next/headers";

export const serverAPI = async (requestFn, env) => {
  const token = cookies().get(env)?.value;

  const headers = {};

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  // Call the passed-in function with the injected headers
  return await requestFn(headers);
};
