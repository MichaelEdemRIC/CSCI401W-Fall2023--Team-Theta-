import storeItems from "../data/products.json"
import {Col,Row} from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"

export function SearchResults() {
    return (
        <>
            <h1>Results</h1>
            <Row md= {2} xs={1} lg={3} className="g-3">
                {storeItems.map(item => (
                    <Col>
                        <StoreItem {...item}
                    </Col>
                ))}
            </Row>
        </>
    )
}