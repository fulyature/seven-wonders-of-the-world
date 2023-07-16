import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import data from "../helper/data";
import { arrowdown } from "../helper/icons";
import { arrowup } from "../helper/icons";
import { useState } from "react";

const Wonders = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <Container>
      {data.map((items) => {
        const { wonder, information, id, src } = items;
        return (
          <Card key={id}>
            <Card.Body className="d-flex justify-content-between card-body">
              <img className="w-50 p-3" src={src} alt="" />
              <div className="container text-justify text-center">
                <h5 className="">{wonder}</h5>
                {activeId === id && <div>{information}</div>}
              </div>
              <button
                onClick={() =>
                  activeId === id ? setActiveId(null) : setActiveId(id)
                }
              >
                {activeId === id ? arrowup : arrowdown}
              </button>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default Wonders;
