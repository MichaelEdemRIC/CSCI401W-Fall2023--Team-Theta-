import storeItems from "../data/products.json";
import { Col, Row } from "react-bootstrap";
import { ItemCard } from "../components/ItemCard";

export function Home() {
  return (
    <>
      <h1>Home</h1>
      <Row md={3} xs={2} lg={4} className="g-3">
        {storeItems.map((storeitem) => (
          <Col key={storeitem.id}>
            <ItemCard item={storeitem} />
          </Col>
        ))}
      </Row>
    </>
  );
}
