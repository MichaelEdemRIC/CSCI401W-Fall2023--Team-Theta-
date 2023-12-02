import { Col, Row } from "react-bootstrap";
import { ItemCard } from "../components/ItemCard";
import { useState, useEffect } from "react";
import { Product } from "../components/Product";
import axios from "axios";

export function Home() {
  const [items, setItems] = useState<Product[] | null>(null);
  const itemsEndpoint = "http://localhost:8000/api/get_data/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(itemsEndpoint);
        setItems(response.data);
      } catch (error) {
        console.error(error);
        setItems([]); // Set an empty array or handle the error state accordingly
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once after mount

  if (items === null) {
    // Loading state, you can customize this to show a loading spinner or message
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>Home</h1>
      <Row md={3} xs={2} lg={4} className="g-3">
        {items.map((item) => (
          <Col key={item.id}>
            <ItemCard item={item} />
          </Col>
        ))}
      </Row>
    </>
  );
}

