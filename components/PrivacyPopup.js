import { useConsent } from "../lib/useConsent";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import NoSsr from "@material-ui/core/NoSsr";

const PrivacyPopup = () => {
  const [consent, handleConsent] = useConsent();
  const [modalOpen, setModalOpen] = useState(true);

  useEffect(() => {
    if (consent) {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "GA_MEASUREMENT_ID", {
        anonymize_ip: true,
        cookie_flags: "SameSite=None; Secure",
        cookies: ["_ga", "_gid", "_gat", "_gat_gtag_UA_GA_MEASUREMENT_ID"],
      });
    }
  }, [consent]);

  return (
    <NoSsr>
      {!consent && (
        <Modal show={modalOpen} onHide={() => setModalOpen(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Privacy Policy</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              We are committed to protecting your privacy. By using our website,
              you agree to this Privacy Policy.
            </p>
            <h5>Information we collect</h5>
            <p>
              We may collect personal information such as your name and email
              address if you provide it to us, as well as information about your
              use of the website and device information.
            </p>
            <h5>How we use your information</h5>
            <p>
              We use the information we collect to improve our website, analyze
              user behavior, communicate with you about our products and
              services, and comply with legal obligations.
            </p>
            <h5>Google Analytics</h5>
            <p>
              We use Google Analytics to collect information about your use of
              our website. Google Analytics collects only your IP address, not
              your name or other identifying information. We use this
              information to improve our website and the user experience.
            </p>
            <h5>Data retention and security</h5>
            <p>
              We retain the information we collect for as long as necessary and
              take reasonable measures to protect it from loss, theft, and
              unauthorized access.
            </p>
            <h5>Your rights</h5>
            <p>
              You have the right to access, correct, and delete your personal
              information. To exercise these rights, contact us at [contact
              email address].
            </p>
            <h5>Changes to this Privacy Policy</h5>
            <p>
              We may update this Privacy Policy from time to time. Check back
              periodically for any changes.
            </p>
            <h5>Contact us</h5>
            <p>
              If you have any questions, please contact us at [contact email
              address].
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleConsent}>
              I Agree
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </NoSsr>
  );
};

export default PrivacyPopup;
