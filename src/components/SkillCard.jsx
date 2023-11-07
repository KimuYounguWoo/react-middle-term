import React from "react";
import styled from "styled-components";

// Components
import { Card, ListGroup } from "react-bootstrap";

const StyledCardComponent = styled.div`
  .card {
    color: ${({ theme }) => theme.color};
    background: ${({ theme }) => (theme.name === "light" ? "" : "#797B7B")};
    box-shadow: ${({ theme }) =>
      theme.name === "light"
        ? "0 3px 10px rgb(0 0 0 / 0.2)"
        : "0 3px 10px rgb(255 255 255 / 0.2)"};

    .card-link {
      text-decoration: none;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.color};

      &:hover {
        color: var(--primary);
      }
    }

    .card-footer {
      border-top: var(--border);
      background: ${({ theme }) => (theme.name === "light" ? "" : "#404040")};
    }
  }
`;

export default function SkillCard({ name, description, desList }) {
  const contents = desList.map( (des) => {
    return (
      <ListGroup.Item key={des.id}>
        {des.des}
      </ListGroup.Item>
    )
  })
  return (
    <StyledCardComponent>
      <Card>
        <Card.Body className="overflow-auto text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
            <ListGroup variant="flush">
              {contents}
            </ListGroup>
        </Card.Body>
      </Card>
    </StyledCardComponent>
  );
}
