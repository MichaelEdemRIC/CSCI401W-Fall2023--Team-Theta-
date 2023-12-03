import { useParams } from "react-router"
import { useState, useEffect } from "react";
import { Product } from "../components/Product";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { PriceDiscount } from "../components/PriceDiscount";
import { BuyButton } from "../components/BuyButton";
// ProductPage.tsx
export function ProductPage() {
  let { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const itemsEndpoint = "http://localhost:8000/api/get_data_id/";
  const baseURL = "http://localhost:8000/";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(itemsEndpoint + id);
        console.log(response.data);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
         // Set an empty array or handle the error state accordingly
      }
    };

    fetchData();
  }, []);
  if(product) {
    return (
      <>
        <h1>{product.name}</h1>
        <Row >
            <Col>
              <img src={baseURL + product.img} style={{ maxWidth: '90%', maxHeight: '90%' }} alt="Product"></img>
            </Col>
            <Col style={{ height: '100%', background: '#D8D8D8', padding: '15px', borderRadius: '8px' }}>
              <Row>
                <Col>
                  <h3>Prices</h3>
                </Col>
                <Col>
                  <button type="button" className="btn btn-warning">Add to Wishlist</button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <img src={"/imgs/amazonlogo.png"} style={{ maxWidth: '80%', maxHeight: '80%' }} alt="Product"></img>
                </Col>
                <Col style={{ textAlign: 'right' }}>
                  <PriceDiscount msrp={product.amzMSRP} current={product.amzCurrentPrice} />
                </Col>
                <Col>
                <BuyButton link={product.amzURL}/>
                </Col>
              </Row>
              <Row>
                <Col>
                  <img src={"/imgs/walmartlogo.png"} style={{ maxWidth: '80%', maxHeight: '80%' }} alt="Product"></img>
                </Col>
                <Col style={{ textAlign: 'right' }}>
                  <PriceDiscount msrp={product.walMSRP} current={product.walCurrentPrice} />
                </Col>
                <Col>
                  <BuyButton link={product.walURL}/>
                </Col>
              </Row>
            </Col>
        </Row>
      </>
    );
  } else {
    return <h1> 404 NOT FOUND</h1>
  }
};
