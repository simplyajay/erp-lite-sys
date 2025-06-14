import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export const useStepNavigation = () => {
  const router = useRouter();

  useEffect(() => {
    const handlePopState = (event) => {
      console.log("browser button clicked");
    };

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, [router]);

  const handleNext = (identity, currentFlow) => {
    if (!currentFlow) {
      console.error("flow not defined");
      return;
    }

    const url = `/signup?identity=${encodeURIComponent(identity)}&flow=${encodeURIComponent(
      currentFlow
    )}`;

    router.push(url);
  };

  return { handleNext };
};
