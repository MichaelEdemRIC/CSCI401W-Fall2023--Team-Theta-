import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import "../LoginApp.css";
import { useState } from "react";
import { Product } from "../components/Product";

export default function AdminAddItem() {
  const addURL = "http://localhost:8000/api/add_item/";
  const imgURL = "http://localhost:8000/api/upload_image/";
  const [product, setProduct] = useState<Product>({
    amzCurrentPrice: "",
    amzMSRP: "",
    amzURL: "",
    img: "",
    lowestPrice: "",
    name: "",
    id: 0,
    walCurrentPrice: "",
    walMSRP: "",
    walURL: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null); // Step 1: State for selected image file
  const navigate = useNavigate();

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Step 1: Update the state with the selected image file
    if (event.target.files && event.target.files.length > 0) {
      setImageFile(event.target.files[0]);
    }
  };

  const handleImageUpload = async () => {
    // Step 1: Upload the image file to the backend
    if (imageFile) {
      const formData = new FormData();
      formData.append('image', imageFile);
      console.log(formData);
      try {
        const response = await axios.post(imgURL, formData);
        const filename = response.data.filename;
        setProduct({ ...product, img: filename });
        console.log('Image uploaded successfully:', filename);
      } catch (error:any) {
        console.error('Error uploading image:', error.message);
        // Handle errors, such as displaying an error message to the user
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission\
    await handleImageUpload();
    console.log({product});
    try {
      const response = await axios.post(addURL, { product })
      console.log("Response:", response.data);
      navigate("/");
    } catch (error: any) {
      console.error("Error:", error.message);
      // Handle errors, such as displaying an error message to the user
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
          <label>Item Thumbnail</label>
          <br />
          <input
            type="file"
            name="img"
            accept=".png, .jpeg, .jpg"
            style={{ width: "100%", boxSizing: "border-box" }}
            onChange={handleImage}
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
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
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
