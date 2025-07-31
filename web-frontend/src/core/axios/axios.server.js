import { cookies } from "next/headers";

export const serverAPI = async (requestFn, env) => {
  const token = (await cookies()).get(env)?.value; //inject public_token

  const headers = {};

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
    headers["x-cookie-name"] = env;
  }

  // Call the passed-in function with the injected headers
  return await requestFn(headers);
};
