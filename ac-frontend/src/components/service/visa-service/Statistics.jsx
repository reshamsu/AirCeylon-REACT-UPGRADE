import React from "react";
import { Container } from "@mui/material";
import { LuPercent } from "react-icons/lu";
import { ImStatsBars } from "react-icons/im";
import { FaGlobeEurope } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const Statistics = () => {
  return (
    <div className="landing-stats1">
      <Container className="container">
        <div className="container-fluid" style={{ padding: "1rem 0" }}>
          <h1>
            Our Visa <span className="gradient-text">Expertise</span>
          </h1>
          {/* <h4>Hassle-Free VISA Assistance for Global Travel</h4> */}
        </div>

        <div className="container-lg">
          <div className="container-sm">
            <h2>
              Build <span className="gradient-text">Something Greater</span>
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>

          <div className="container-md">
            <div className="card">
              <div className="card-body">
                <div className="card-group">
                  {/* <img src="/assets/success-rate.png" alt="digital" /> */}
                  <LuPercent />
                  <div className="card-text">
                    <h1>
                      <span className="gradient-text">100%</span>
                    </h1>
                    <h3>Approval Rate</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="card-group">
                  {/* <img src="/assets/application.png" alt="digital" /> */}
                  <ImStatsBars />
                  <div className="card-text">
                    <h1>
                      <span className="gradient-text">200+</span>
                    </h1>
                    <h3>Applications</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="card-group">
                  {/* <img src="/assets/countries.png" alt="digital" /> */}
                  <FaGlobeEurope />
                  <div className="card-text">
                    <h1>
                      <span className="gradient-text">30+</span>
                    </h1>
                    <h3>Countries</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="card-group">
                  {/* <img src="/assets/regions.png" alt="digital" /> */}
                  <FaMapLocationDot />
                  <div className="card-text">
                    <h1>
                      <span className="gradient-text">5+</span>
                    </h1>
                    <h3>Regions</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Statistics;
