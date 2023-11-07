import { Element } from "react-scroll";
// Data
import { skillData } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import SkillCard from "./SkillCard";


export default function Skills() {

  return (
    <Element name={"Skills"} id="skills">
      <section className="section">
        <Container className="text-center">
          <Title>
            <h2>Skills</h2>
            <div className="underline"></div>
          </Title>
          <Row className="mt-3 align-items-center">
            {skillData.map((skills) => {
              return (
                <Col xs={4} key={skills.id} className="my-md-5">
                  <figure>
                    {skills.skill}
                    <figcaption>{skills.name}</figcaption>
                  </figure>
                  <SkillCard
                        name={skills.name}
                        description={skills.description}
                        desList={skills.desList}
                      />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </Element>
  );
}
