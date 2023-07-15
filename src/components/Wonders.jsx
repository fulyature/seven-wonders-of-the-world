import { Card, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import data from "../helper/data";
import { arrowdown } from "../helper/icons";
import { arrowup } from "../helper/icons";
import { useState } from "react";

const Wonders = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Container>
      {data.map((items) => {
        const { wonder, information, id } = items;
        return (
          <Card key={id}>
            <Card.Body>
              <h5>{wonder}</h5>
              {toggle ? (
                <button>{arrowdown} </button>
              ) : (
                <button>{arrowup} </button>
              )}
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default Wonders;
