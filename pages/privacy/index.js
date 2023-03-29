import { Container, Card, ListGroup } from "react-bootstrap";

const PrivacyPolicyPage = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center">Privacy Policy</h1>

      <Card>
        <Card.Body>
          <Card.Text>
            We at mywebclass.org are committed to protecting your privacy. This
            Privacy Policy explains what information we collect from you when
            you visit our website, how we use it, and how we protect it. By
            using our website, you agree to the terms of this Privacy Policy.
          </Card.Text>
        </Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h5>Information we collect</h5>
            <p>
              We may collect the following information from you when you visit
              our website:
            </p>
            <ul>
              <li>
                Personal information such as your name and email address, if you
                choose to provide it to us.
              </li>
              <li>
                Information about your use of the website, such as pages
                visited, time spent on the site, and links clicked.
              </li>
              <li>
                Information about your device, such as your IP address, browser
                type, and operating system.
              </li>
            </ul>
          </ListGroup.Item>
          <ListGroup.Item>
            <h5>How we use your information</h5>
            <p>
              We use the information we collect from you for the following
              purposes:
            </p>
            <ul>
              <li>To improve our website and the user experience.</li>
              <li>
                To analyze user behavior and measure the effectiveness of our
                content and marketing efforts.
              </li>
              <li>
                To communicate with you about our products and services, if you
                have provided us with your contact information.
              </li>
              <li>To comply with legal obligations.</li>
            </ul>
          </ListGroup.Item>
          <ListGroup.Item>
            <h5>Google Analytics</h5>
            <p>
              We use Google Analytics to collect information about your use of
              our website. Google Analytics collects information such as how
              often users visit the site, what pages they visit when they do so,
              and what other sites they used prior to coming to our website. We
              use the information we get from Google Analytics to improve our
              website and the user experience. Google Analytics collects only
              the IP address assigned to you on the date you visit our website,
              rather than your name or other identifying information. We do not
              combine the information collected through the use of Google
              Analytics with personally identifiable information. Google
              Analytics plants a permanent cookie on your web browser to
              identify you as a unique user the next time you visit our website.
              This cookie cannot be used by anyone other than Google. Google’s
              ability to use and share information collected by Google Analytics
              about your visits to our website is restricted by the Google
              Analytics Terms of Use and the Google Privacy Policy.
            </p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h5>Data retention and security</h5>
            <p>
              We retain the information we collect for as long as necessary to
              fulfill the purposes for which it was collected, unless a longer
              retention period is required by law. We take reasonable measures
              to protect the information we collect from loss, theft, misuse,
              and unauthorized access, disclosure, alteration, and destruction.
            </p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h5>Your rights</h5>
            <p>
              You have the right to access, correct, and delete your personal
              information. You also have the right to object to the processing
              of your personal information and to withdraw your consent to the
              processing of your personal information. To exercise these rights,
              please contact us at [contact email address].
            </p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h5>Changes to this Privacy Policy</h5>
            <p>
              We may update this Privacy Policy from time to time. Check back
              periodically for any changes.
            </p>
          </ListGroup.Item>
          <ListGroup.Item>
            <h5>Contact us</h5>
            <p>If you have any questions, please contact us</p>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
};

export default PrivacyPolicyPage;
