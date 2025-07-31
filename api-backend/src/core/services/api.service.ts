import { IResponse, IResponseHandler, ExpectedError } from "./services";
import { Prisma } from "@prisma/client";

export const handleResponse = async <T>({
  promise,
  res,
  successMessage,
  notFoundMessage,
}: IResponseHandler<T>): Promise<void> => {
  try {
    const result = await promise;

    if (!result) {
      res.status(404).json({
        ok: false,
        payload: undefined,
        message: notFoundMessage || "No data found",
      } satisfies IResponse<undefined>);
      return;
    }

    const { clearCookies, cookies, payload } = result; // spread everything that is not clearCookies or cookies

    if (Array.isArray(cookies)) {
      cookies.forEach(({ name, value, options }) => res.cookie(name, value, options));
    }

    if (Array.isArray(clearCookies)) {
      clearCookies.forEach(({ name, options }) => res.clearCookie(name, options));
    }

    res.status(200).json({
      ok: true,
      payload,
      message: successMessage || "Operation successful",
    } satisfies IResponse<typeof payload>);
    return;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        const { code, meta } = error;
        res.status(409).json({
          ok: false,
          payload: meta ? { code, meta } : { code },
          message: error.message,
        } satisfies IResponse<{ code: string; meta?: Record<string, unknown> }>);
        return;
      }
    }

    if (error instanceof ExpectedError) {
      res.status(error.status).json({
        ok: false,
        payload: { code: error.status || 400, key: error.key },
        message: error.message,
      } satisfies IResponse<{ code: number; key?: string }>);
      return;
    }

    res.status(500).json({
      ok: false,
      payload: undefined,
      message: "Unkown Error",
    } satisfies IResponse<undefined>);
    return;
  }
};
