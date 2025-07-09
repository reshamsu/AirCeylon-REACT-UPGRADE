import React from "react";
import { Container } from "@mui/material";

// Proper React image imports assuming assets are in src/assets
import notarization from "../../../assets/notarization.png";
import authentication from "../../../assets/Authentication.png";
import verification from "../../../assets/Verification.png";
import attestation from "../../../assets/Attestation.png";
import apostille from "../../../assets/Apostille.png";

const VisaWelcome = () => {
  return (
    <div className="landing-welcome">
      <Container className="container">
        <div className="container-fluid">
          <h1>
            <span className="gradient-text">Terminology</span>
          </h1>
          <p style={{ fontWeight: "660", marginBottom: ".6rem" }}>
            The key to notarize your documents starts here.
          </p>
        </div>

        <div className="container-lg">
          <div className="container">
            <div className="define">
              <img src={notarization} alt="Notarization" />
              <h3>Notarization</h3>
            </div>
            <p>
              Notarization is when a certified lawyer (called a Notary Public)
              checks your document and confirms that it is real and trustworthy.
              The notary signs and places an official stamp on it. This proves
              that the document was seen and approved by a legal officer.
            </p>
            <p>
              - It is often required when you send documents for legal, visa, or
              business purposes, both locally and internationally.
            </p>
          </div>

          <div className="container-xxl">
            <div className="define">
              <img src={authentication} alt="Authentication" />
              <h3>Authentication</h3>
            </div>
            <p>
              Authentication means that a government office checks whether the
              person who signed or notarized your document is a real and
              registered official. It confirms that the notary's or officer's
              signature and stamp are valid.
            </p>
            <p>
              - Many foreign embassies or employers want proof that your
              notarized documents are truly legal and genuine.
            </p>
          </div>

          <div className="container">
            <div className="define">
              <img src={verification} alt="Verification" />
              <h3>Verification</h3>
            </div>
            <p>
              Verification is the process of checking that the details or
              documents you give are correct, true, and not fake. It can be done
              by companies, schools, banks, or government officers.
            </p>
            <p>
              - To make sure you are giving honest information and that your
              documents are valid.
            </p>
          </div>

          <div className="container-xxl">
            <div className="define">
              <img src={attestation} alt="Attestation" />
              <h3>Attestation</h3>
            </div>
            <p>
              Attestation is when a government or official department checks
              your document and places a stamp or signature to confirm that it
              is original and correct. This is usually done after notarization
              and authentication.
            </p>
            <p>
              - Most countries (especially Gulf countries like UAE, Qatar, etc.)
              require attested documents for work, visa, or family sponsorship.
            </p>
          </div>

          <div className="container">
            <div className="define">
              <img src={apostille} alt="Apostille" />
              <h3>Apostille</h3>
            </div>
            <p>
              An Apostille is a special stamp or certificate given by a
              government office to make a document officially accepted in
              certain foreign countries. It is used instead of attestation when
              the destination country is part of the “Hague Apostille
              Convention.”
            </p>
            <p>
              - It makes the process easier and faster for using legal documents
              in countries that recognize the Apostille system.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default VisaWelcome;
