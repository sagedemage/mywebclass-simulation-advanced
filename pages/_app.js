import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

// pages/_app.js
import React, { useState, useEffect } from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import PrivacyPopup from "@/components/PrivacyPopup";
import BrandExample from "@/components/navbar";
import FooterExample from "@/components/footer";
import ReactGA from "react-ga";

export default function App({ Component, pageProps }) {
  const [showPopup, setShowPopup] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("consent");
    if (consent === "true") {
      setHasConsent(true);
    } else {
      setShowPopup(true);
    }
  }, []);

  function handleAgree() {
    localStorage.setItem("consent", "true");
    setHasConsent(true);
    setShowPopup(false);
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      ReactGA.initialize("YOUR_TRACKING_CODE_HERE");
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  useEffect(() => {
    // Load the Bootstrap JavaScript module
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    import("bootstrap/dist/css/bootstrap.min.css");
    import("jquery/dist/jquery.min.js");
    import("popper.js/dist/popper.min.js");
    import("bootstrap/dist/js/bootstrap.min.js");
  }, []);
  return (
    <UserProvider>
      <PrivacyPopup
      // show={showPopup}
      // onHide={() => setShowPopup(false)}
      // onAgree={handleAgree}
      />
      <BrandExample />
      <Component {...pageProps} />
      <FooterExample />
    </UserProvider>
  );
}
