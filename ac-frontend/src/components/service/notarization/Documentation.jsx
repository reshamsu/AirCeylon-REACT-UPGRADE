import React from "react";
import { Container } from "@mui/material";

const Process = () => {
  return (
    <div className="landing-process">
      <Container className="container">
        <div className="container-fluid">
          <label>Affiliations</label>
          <h1>
            Canadian Issued <span className="gradient-text">Documents</span>
          </h1>
          <p>
            - Here’s a quick glance at the ease and process in getting your
            Canadian Issued Documents Apostilled, Notarized, Authenticated &
            Verified.
          </p>

          <div className="text-group">
            <p>
              <strong>Step 1:</strong> Gathering the original
              documents/certificates with one copy each and passport copy
              printouts.
            </p>
            <p>
              <strong>Step 2:</strong> Shipping to Toronto Canada (my address)
            </p>
            <p>
              <strong>Step 3:</strong> Getting the apostille & notarization of
              the documents/certificates with our partner - Red Seal Notary.
            </p>
            <p>
              <strong>Step 4:</strong> Verification of Notarization & Apostille
              from the General Consulate of Sri Lanka in Toronto - Canada.
            </p>
            <p>
              <strong>Step 5:</strong> Confirming all documents and notarial
              services with clients before shipping back.
            </p>
            <p>
              <strong>Step 6:</strong> Ship to Air Ceylon Office in Colombo -
              Sri Lanka.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Process;
