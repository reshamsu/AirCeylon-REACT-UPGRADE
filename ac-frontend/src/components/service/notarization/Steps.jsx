import React from "react";
import { Container } from "@mui/material";

const procedureSteps = [
  { step: "STEP 1" },
  { description: "Domestic Service & Handling", price: 50 },

  { step: "STEP 2" },
  { description: "Outbound Shipping", price: 250 },

  { step: "STEP 3" },
  { description: "Notarization", price: 75 },
  { description: "Additional Cost per Document", price: 40 },
  { description: "Apostille", price: 175 },
  { description: "Additional Cost per Document", price: 75 },
  { description: "RSN Courier", price: 100 },
  { description: "Canadian Official Document Charges", price: 25 },
  { description: "Additional Cost per Document", price: 25 },

  { step: "STEP 4" },
  { description: "Verification", price: 100 },

  { step: "STEP 5" },
  { description: "International Service & Handling Cost", price: 50 },

  { step: "STEP 6" },
  { description: "Inbound Shipping", price: 250 },
];

const Procedure = () => {
  return (
    <div className="landing-welcome">
      <Container className="container">
        <div className="container-fluid">
          <label>Procedure</label>
          <h1>
            Service <span className="gradient-text"> Pricing Breakdown</span>
          </h1>
        </div>
        <div className="container-lg">
          <table
            border="1"
            cellPadding="10"
            style={{
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "start",
            }}
          >
            <thead style={{ background: "var(--background-gradient-gold)", color: "var(--text-white)" }}>
              <tr>
                <th>Description</th>
                <th>Price (CAD)$</th>
              </tr>
            </thead>
            <tbody>
              {procedureSteps.map((item, index) =>
                item.step ? (
                  <tr
                    key={`step-${index}`}
                    style={{
                      backgroundColor: "var(--text-white)",
                      fontWeight: "bold",
                    }}
                  >
                    <td colSpan={2}> {item.step}</td>
                  </tr>
                ) : (
                  <tr key={`desc-${index}`}>
                    <td>{item.description}</td>
                    <td>${item.price.toFixed(2)}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>

          <p style={{ marginTop: "1rem", fontStyle: "italic", color: "#555" }}>
            * Table prices are pre-tax and subject to 13% (HST) by the Province
            of Ontario, payable to service providers located in Ontario -
            Canada, State of Ontario via Air Ceylon International Office in
            Canada.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Procedure;
