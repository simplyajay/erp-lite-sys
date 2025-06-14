"use client";
import { useEffect } from "react";
import { startPublicSession } from "@/api/auth";

const PublicSessionInit = () => {
  useEffect(() => {
    const init = async () => {
      try {
        const res = await startPublicSession();

        if (!res.ok) {
          console.error(`Error: ${res.status} ${res.message}`);
        }
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };
    init();
  }, []);

  return null;
};

export default PublicSessionInit;
