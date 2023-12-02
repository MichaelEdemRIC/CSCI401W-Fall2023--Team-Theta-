import { Card } from "react-bootstrap";
//import { formatCurrency } from "../utilities/formatCurrency";
import { Link } from "react-router-dom";

interface Props {
    item: {
        pk:number
        name:string,
        img:string,
        lowestPrice:string,
    }
}

export function ItemCard({ item }: Props) {
    return (
        <>
            <Link to={`/products/${item.pk}`}>
                <Card>
                    <Card.Img
                        variant="top"
                        src={`/${item.img}`}
                        className="card-img-side"
                        style={{ objectFit:"cover"}}
                    />
                    <Card.Body className='d-flex flex column'>
                        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                            <span className="fs-2">{item.name}</span>
                            <span className="ms-2 text-muted">{item.lowestPrice}</span>

                        </Card.Title>
                    </Card.Body>

                </Card>
            </Link>
        </>
    )


}