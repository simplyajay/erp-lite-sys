"use client";
import { useEffect, useState } from "react";
import { throttle } from "lodash";
import { getCookieMeta } from "@/api/auth";
import usePublicSession from "@/store/usePublicSession";

const PublicCookieMetaTracker = () => {
  const { loading, setLoading, setCreatedAt, setUpdatedAt, setExpiresAt } = usePublicSession(
    (state) => state
  );
  useEffect(() => {
    const fetchCookieMeta = async () => {
      const res = await getCookieMeta();

      if (!res.ok) {
        console.log("Res not ok", res);
        return;
      }

      const { payload } = res;

      if (!payload) {
        console.log("Res not ok");
        return;
      }

      const session = payload?.sessionMeta["guest"];
      console.log(session);
    };

    fetchCookieMeta();
  }, []);

  /*   useEffect(() => {
    const throttleHandler = throttle(() => {
      extractCookieMetaData;
    }, 30000);

    const handleMouseMove = (e) => {
      throttleHandler();
      console.log("Mouse position: ", e.clientX, e.clientY);
    };

    const handleKeyPress = (e) => {
      throttleHandler();
      console.log("key pressed:", e.key);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);*/

  return null;
};

export default PublicCookieMetaTracker;
