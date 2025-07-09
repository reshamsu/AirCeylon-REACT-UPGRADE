import React from "react";
import { Container } from "@mui/material";
import IRCCNews from "../IRCCNews";

const News = () => {
  return (
    <div className="landing-process">
      <Container className="container">
        <div className="container-fluid">
          <label>News Room</label>
          <h1>
            Announcements <span className="gradient-text"></span>
          </h1>

          <IRCCNews />

          <ul>
            <li>IRCC Canada</li>
            <li>Travel Advisory</li>
            <li>Immigration Updates</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default News;
