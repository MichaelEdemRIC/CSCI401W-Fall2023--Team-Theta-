import { Col, Container, Row } from "react-bootstrap";
import { ItemCard } from "../components/ItemCard";
import { Product } from "../components/Product";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
export function SearchResults() {
  const location = useLocation();
  const query:string = location.state;
  
  const [searchData, setSearchData] = useState<Product | Product[]>([]);
  const searchEndpoint = "http://localhost:8000/api/search_name/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(searchEndpoint + query);
        console.log(response.data);
        setSearchData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [query]);

  if (searchData === null) {
    // Loading state, you can customize this to show a loading spinner or message
    return <p>Loading...</p>;
  }

  if (Array.isArray(searchData)) {
    // It's an array, you can map over it
    return (
      <>
      <Container className="m-5">
        <h1 className=" text-center">Search Results</h1>
        <hr className="my-4" />
        <Row md={3} xs={2} lg={4} className="g-3">
          {searchData.map((product: Product) => (
            <Col key={product.id}>
              <ItemCard item={product} />
            </Col>
          ))}
        </Row>
      </Container>
      </>
    );
  } else if (searchData) {
    // It's a single item, not an array
    return (
      <>
        <Container className="m-5">
          <h1>Search Results</h1>
          <hr className="my-4" />
          <Row md={3} xs={2} lg={4} className="g-3">
            <Col key={searchData.id}>
              <ItemCard item={searchData} />
            </Col>
          </Row>
        </Container>
      </>
    );
  } else {
    // No results
    return (
      <>
        <h1>No Results Found</h1>
        <hr className="my-4" />
      </>
    );
  }
}