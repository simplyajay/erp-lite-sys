export const handleResponse = async ({ promise, res, successMessage, notFoundMessage }) => {
  try {
    const result = await promise;

    if (!result) {
      return res
        .status(404)
        .json({ ok: false, payload: undefined, message: notFoundMessage || "No data found" });
    }

    const { clearCookies, cookies, ...payload } = result; // spread everything that is not clearCookies or cookies

    const { error, ...payloadRest } = payload;

    if (Array.isArray(cookies)) {
      cookies.forEach(({ key, value, options }) => res.cookie(key, value, options));
    }

    if (Array.isArray(clearCookies)) {
      clearCookies.forEach(({ key, options }) => res.clearCookie(key, options));
    }

    return res.status(200).json({
      ok: true,
      payload: payloadRest,
      error: error ? error : undefined,
      message: successMessage || "Operation successful",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ ok: false, data: undefined, message: error.message || "Internal Server Error" });
  }
};
