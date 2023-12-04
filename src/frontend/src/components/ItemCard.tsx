import { Card } from "react-bootstrap";
//import { formatCurrency } from "../utilities/formatCurrency";
import { Link } from "react-router-dom";
import "../LoginApp.css";

interface Props {
    item: {
        id:number
        name:string,
        img:string,
        lowestPrice:string,
    }
}

export function ItemCard({ item }: Props) {
    return (
        <>
<Link to={`/products/${item.id}`} style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}>
      <Card style={{ height: "100%" }}>
        <Card.Img
          variant="top"
          src={item.img}
          className="card-img-side"
          style={{ objectFit: "contain", height: "300px" }}
        />
        <Card.Body className="d-flex flex-column" >
          <Card.Title  className="d-flex justify-content-between align-items-baseline mb-4">
            <span  className="fs-6" style={{            
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2, // Adjust the number of lines before overflow
                textOverflow: "ellipsis", 
              }}>
              {item.name}
            </span>

          </Card.Title>
          <span className="fs-2" style={{ color: "green" }}>
            {"$" + item.lowestPrice}
        </span>
        </Card.Body>
      </Card>
    </Link>
        </>
    )


}