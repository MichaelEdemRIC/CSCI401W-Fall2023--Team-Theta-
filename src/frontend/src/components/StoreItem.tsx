import { Card } from "react-bootstrap";

type Props = {
    pk:number,
    name:string,
    price:number,
    dateAdded:string,
    img:string,
}
export function StoreItem({pk,name,price,dateAdded,img}: Props) {
    return <Card>
        <Card.Img
            variant="top"
            src={img}
            height="200px"
            style={{ objectFit:"cover"}}
        />
    </Card>
}