import React from "react";

import { Link } from "react-router-dom";

import {
  Navbar,
  Container,
  NavbarBrand,
  UncontrolledCollapse,
  Row,
  Col,
} from "reactstrap";

const IndexHeader = () => {
  return (
    <Navbar
      className="navbar-horizontal navbar-main navbar-dark bg-info"
      expand="lg"
      id="navbar-main"
    >
      <Container>
        <NavbarBrand>
          <img
            height="200px"
            alt="..."
            src={require("../../assets/img/brand/Wingtek.png")}
          />
          <button
            aria-controls="navbar-collapse"
            aria-expanded={false}
            aria-label="Toggle navigation"
            className="navbar-toggler"
            data-target="#navbar-collapse"
            data-toggle="collapse"
            id="navbar-collapse"
            type="button"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse
            className="navbar-custom-collapse"
            navbar
            toggler="#navbar-collapse"
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6"></Col>
                <Col className="collapse-close" xs="6">
                  <button
                    aria-controls="navbar-collapse"
                    aria-expanded={false}
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-target="#navbar-collapse"
                    data-toggle="collapse"
                    id="navbar-collapse"
                    type="button"
                  >
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <hr className="d-lg-none" />
          </UncontrolledCollapse>
        </NavbarBrand>
      </Container>
    </Navbar>
  );
};

export default IndexHeader;
