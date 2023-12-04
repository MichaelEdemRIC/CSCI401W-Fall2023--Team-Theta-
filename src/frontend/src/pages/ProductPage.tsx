import { useParams } from "react-router"
import { useState, useEffect } from "react";
import { Product } from "../components/Product";
import axios from "axios";
import { Col, Row, Container } from "react-bootstrap";
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
        <Container className="m-3">
          <Row className="m-5 auto">
          
            <Col md={6} className="d-flex justify-content-center">
              
              <img src={baseURL + product.img} className="img-fluid" alt="Product" style={{width:"auto", height:"50%",paddingTop:"30px"}}/>
            </Col>
            <Col md={6} className="bg-light p-4 rounded">
              <div className="border p-3 rounded">
              <Row className="mb-3"> 
                <h3>{product.name}</h3>
                <hr className="my-2" />
              </Row>

              <Row className="mb-3">
                <Col>
                  <h3>Prices</h3>
                </Col>
                <Col>
                  <button type="button" className="btn btn-outline-danger">
                    <span>Add to Wishlist            </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"></path>
                    </svg>
                  </button>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs={4}>
                  <img src={"/imgs/amazonlogo.png"} className="img-fluid" alt="Amazon Logo" />
                </Col>
                <Col xs={4} className="text-center">
                  <PriceDiscount msrp={product.amzMSRP} current={product.amzCurrentPrice} />
                </Col>
                <Col xs={4}>
                  <BuyButton link={product.amzURL} />
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <img src={"/imgs/walmartlogo.png"} className="img-fluid" alt="Walmart Logo" />
                </Col>
                <Col xs={4} className="text-center">
                  <PriceDiscount msrp={product.walMSRP} current={product.walCurrentPrice} />
                </Col>
                <Col xs={4}>
                  <BuyButton link={product.walURL} />
                </Col>
              </Row>
              </div>
            </Col>
          </Row>
        </Container>

      </>
    );
  }
};
