import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import "../LoginApp.css";
import { useState, ChangeEvent, FormEvent } from "react";
import { ProductInput } from "../components/Product";

interface Product {
  amzCurrentPrice: string;
  amzMSRP: string;
  amzURL: string;
  img: File | null;
  lowestPrice: string;
  name: string;
  walCurrentPrice: string;
  walMSRP: string;
  walURL: string;
  dateAdded: string;
  id: number;
}

export default function AdminAddItem() {
  const addURL = "http://localhost:8000/api/add_item/";
  const [product, setProduct] = useState<ProductInput>({
    amzCurrentPrice: "",
    amzMSRP: "",
    amzURL: "",
    img: null,
    lowestPrice: "",
    name: "",
    walCurrentPrice: "",
    walMSRP: "",
    walURL: "",
  });

  const navigate = useNavigate();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setProduct({ ...product, img: file });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("amzMSRP", product.amzMSRP);
    formData.append("amzCurrentPrice", product.amzCurrentPrice);
    formData.append("walMSRP", product.walMSRP);
    formData.append("walCurrentPrice", product.walCurrentPrice);
    formData.append("lowestPrice", product.lowestPrice);
    formData.append("amzURL", product.amzURL);
    formData.append("walURL", product.walURL);
    formData.append("img", product.img || "");

    const storedToken = sessionStorage.getItem("token");

    try {
      const response = await axios.post(addURL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Token ${storedToken}`
        },
      });

      console.log("Response:", response.data);
      navigate("/");
    } catch (error:any) {
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
            type="file"
            name="img"
            accept=".png, .jpeg, .jpg"
            style={{ width: "100%", boxSizing: "border-box" }}
            onChange={handleImageChange}
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
