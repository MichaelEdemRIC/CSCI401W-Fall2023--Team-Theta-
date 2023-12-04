import { Col, Row } from "react-bootstrap";

interface PriceDiscountProps {
    msrp: string;
    current: string;
  }
export const PriceDiscount: React.FC<PriceDiscountProps> = ({ msrp, current }) => {
    const percent = ((1 - (parseFloat(current) / parseFloat(msrp))) * 100);
    
    if(msrp > current) {
    return (
        <>
          <Row md={2} xs={2} lg={2} className="align-items-center">
            <Col>
                <span className="badge text-bg-info">-{Math.floor(percent)}%</span>
            </Col>
            <Col className="d-flex flex-column align-items-start">
              <p style={{ textDecoration: 'line-through' }} className="mb-0">{msrp}</p>
              <p className="mb-0">{current}</p>
            </Col>
          </Row>
        </>
      );
    } else {
        return (
            <>
            <Row md={2} xs={2} lg={2} style={{ height: '50px' }} className="align-items-center">
                <Col>
                </Col>
                <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                    <p style={{ alignItems: 'center' }}>{current}</p>
                </Col>
            </Row>
            </>
        )
    }
}