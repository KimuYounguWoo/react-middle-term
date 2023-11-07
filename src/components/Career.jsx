import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import cert from "../images/cer.jpg"
import prog from "../images/prog.png"

// Components
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import { careerData } from "../data";
import { bojname } from "../data";
import { Row, Col } from "react-bootstrap";

const StyledSection = styled.section`
  min-height: 89vh;
  padding-top: var(--nav-height);
`;

export default function Career() {
  var url = `http://mazassumnida.wtf/api/v2/generate_badge?boj=${bojname}`

  const contents = careerData.map( (career) => {
    const cerf = career.career.map( (cer) => {
      return (
        <ListGroupItem size="lg" key={cer.id}>
          {cer.cer}
        </ListGroupItem>
      )
    })
    return (
      <ListGroupItem  key={career.id}>
        {career.year}
          <ListGroup variant="flush">
            {cerf}
          </ListGroup>
      </ListGroupItem>
    )
  })

  return (
    <Element name={"Career"} id="career">
      <StyledSection className="d-flex flex-column justify-content-center">
        <Container className="d-flex">
          <Title>
            <h2>Career</h2>
            <div className="underline"></div>
          </Title>
        </Container>
        <Container className="d-flex">
            <Row className="g-4 justify-content-center">
                <Col md={6}>
                  <ListGroup>
                    {contents}
                  </ListGroup>
                </Col>
                <Col md={4}>
                    <h3>백준</h3>
                    <img src={url} alt="boj score"></img>
                    <h3>프로그래머스</h3>
                    <img src={prog} weight="0.5" alt="boj score"></img>
                    <h3>LeetCode</h3>
                    <img src={url} alt="boj score"></img>
                </Col>
            </Row>
        </Container>
      </StyledSection>
    </Element>
  );
}