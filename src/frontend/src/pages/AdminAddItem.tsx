import { json, useNavigate } from "react-router-dom";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import "../LoginApp.css";
import { useState } from "react";
import { Product, ProductInput } from "../components/Product";

export default function AdminAddItem() {
  const addURL = "http://localhost:8000/api/add_item/";
  const [product, setProduct] = useState<Product>({
    amzCurrentPrice: "",
    amzMSRP: "",
    amzURL: "",
    img: "",
    lowestPrice: "",
    name: "",
    walCurrentPrice: "",
    walMSRP: "",
    walURL: "",
    dateAdded: "",
    id: 11,
  });

  const formdata = {
    amzCurrentPrice: product.amzCurrentPrice,
    amzMSRP: product.amzMSRP,
    amzURL: product.amzURL,
    img: product.img,
    lowestPrice: product.lowestPrice,
    name: product.name,
    walCurrentPrice: product.walCurrentPrice,
    walMSRP: product.walMSRP,
    walURL: product.walURL,
  }
  const formdata2 = {
    "name": product.name,
    "amzMSRP": product.amzMSRP,
    "amzCurrentPrice": product.amzCurrentPrice,
    "walMSRP": product.walMSRP,
    "walCurrentPrice": product.walCurrentPrice,
    "lowestPrice": product.lowestPrice,
    "amzURL": product.amzURL,
    "walURL": product.walURL,
    "img": product.img
  }
  const jsonString = JSON.stringify(formdata2);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission\
    console.log(formdata2);
    console.log(jsonString)
    const storedToken = sessionStorage.getItem("token")
    try {
      const response = await axios.post(addURL, jsonString, {
        headers : {
          'Content-Type': 'application/json',
          'Authorization': `token ${storedToken}`
        }
      })
      console.log("Response:", response.data);
      navigate("/");
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };
  return (
    <div className="text-center m-5-auto">
      <h2>Add an item</h2>

      <form action="/home" className="login" onSubmit={handleSubmit}>
        <p>
          <label>Item Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={product.name}
            className="border p- rounded"
            style={{ width: "100%", boxSizing: "border-box" }}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            required
          />
        </p>
        <p>
          <label>Image File Name</label>
          <br />
          <input
            type="text"
            name="img"
            accept=".png, .jpeg, .jpg"
            style={{ width: "100%", boxSizing: "border-box" }}
            onChange={(e) => setProduct({ ...product, img: e.target.value })}
            required
          />
        </p>
        <Row md={2} xs={2} lg={2}>
          <Col>
            <p>
              <label>Amazon MSRP</label>
              <br />
              <input
                type="text"
                name="amzMSRP"
                className="border p-1 rounded"
                value={product.amzMSRP}
                onChange={(e) => setProduct({ ...product, amzMSRP: e.target.value })}
                required
              />
            </p>
            <p>
              <label>Current Amazon Price</label>
              <br />
              <input
                type="text"
                name="amzCurrentPrice"
                className="border p-1 rounded"
                value={product.amzCurrentPrice}
                onChange={(e) => setProduct({ ...product, amzCurrentPrice: e.target.value })}
                required
              />
            </p>
            <p>
              <label>Amazon URL</label>
              <br />
              <input
                type="text"
                name="amzURL"
                className="border p-1 rounded"
                value={product.amzURL}
                onChange={(e) => setProduct({ ...product, amzURL: e.target.value })}
                required
              />
            </p>
          </Col>
          <Col>
            <p>
              <label>Walmart MSRP</label>
              <br />
              <input
                type="text"
                name="walMSRP"
                className="border p-1 rounded"
                value={product.walMSRP}
                onChange={(e) => setProduct({ ...product, walMSRP: e.target.value })}
                required
              />
            </p>
            <p>
              <label>Current Walmart Price</label>
              <br />
              <input
                type="text"
                name="walCurrentPrice"
                className="border p-1 rounded"
                value={product.walCurrentPrice}
                onChange={(e) => setProduct({ ...product, walCurrentPrice: e.target.value })}
                required
              />
            </p>
            <p>
              <label>Walmart URL</label>
              <br />
              <input
                type="text"
                name="walURL"
                className="border p-1 rounded"
                onChange={(e) => setProduct({ ...product, walURL: e.target.value })}
                value={product.walURL}
                required
              />
            </p>
          </Col>
        </Row>
        <p>
          <label>Lowest Price</label>
          <br />
          <input
            type="text"
            name="lowestPrice"
            value={product.lowestPrice}
            className="border p- rounded"
            style={{ width: "100%", boxSizing: "border-box" }}
            onChange={(e) => setProduct({ ...product, lowestPrice: e.target.value })}
            required
          />
        </p>
        <p>
          <button className="btn btn-warning" id="sub_btn" type="submit">
            Submit
          </button>
        </p>
      </form>
    </div>
  );
}
