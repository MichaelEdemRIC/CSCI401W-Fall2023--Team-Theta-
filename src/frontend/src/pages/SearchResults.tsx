import storeItems from "../data/searchresults.json";
import { Col, Row } from "react-bootstrap";
import { ItemCard } from "../components/ItemCard";

export function SearchResults() {
  return (
    <>
      <h1>Results</h1>
      <Row md={3} xs={2} lg={4} className="g-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <ItemCard item={item}/>
          </Col>
        ))}
      </Row>
    </>
  );
}
