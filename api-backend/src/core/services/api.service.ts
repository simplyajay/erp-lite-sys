import { IResponse, IResponseHandler } from "./services";
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

    const { clearCookies, cookies, payload, session } = result; // spread everything that is not clearCookies or cookies

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
      ...(session && { session }),
    } satisfies IResponse<typeof payload>);
    return;
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        const { code, meta } = error;

        if (meta) {
          res.status(500).json({
            ok: false,
            payload: { code, meta },
            message: error.message,
          } satisfies IResponse<{ code: string; meta: Record<string, unknown> }>);
          return;
        } else {
          res.status(500).json({
            ok: false,
            payload: { code },
            message: error.message,
          } satisfies IResponse<{ code: string }>);
          return;
        }
      }
    }

    res.status(500).json({
      ok: false,
      payload: undefined,
      message: "Unkown Error",
    } satisfies IResponse<undefined>);
    return;
  }
};
