import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const useConsent = () => {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    if (Cookies.get("google-analytics-consent") === "true") {
      setConsent(true);
    }
  }, []);

  const handleConsent = () => {
    Cookies.set("google-analytics-consent", "true", { expires: 365 });
    setConsent(true);
  };

  return [consent, handleConsent];
};
