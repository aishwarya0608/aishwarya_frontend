import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ShapeExample() {
  return (
    <Container>
      <Row>
        <Col xs={8} md={4}>
            <div>
          <Image src="https://static.wixstatic.com/media/f61af8_2ef1fc57fdd849a19df076e8fb6e036f~mv2_d_2681_2546_s_4_2.jpg/v1/fill/w_351,h_869,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f61af8_2ef1fc57fdd849a19df076e8fb6e036f~mv2_d_2681_2546_s_4_2.jpg" rounded/>
          </div>
          <h1>EDITORIAL</h1>
        </Col>
        <Col xs={8} md={4}>
          <Image src="https://static.wixstatic.com/media/f61af8_0865ef003a1740f9b703014d3b57e3fa~mv2_d_4928_3264_s_4_2.jpg/v1/fill/w_341,h_869,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f61af8_0865ef003a1740f9b703014d3b57e3fa~mv2_d_4928_3264_s_4_2.jpg" rounded />
          <h1>FOOD & SERVE</h1>
          
        </Col>
        <Col xs={8} md={4}>
          <Image src="https://static.wixstatic.com/media/f61af8_0ecca2bc73f444c98e8de071bb2ce81c~mv2_d_1927_1272_s_2.jpg/v1/fill/w_342,h_869,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f61af8_0ecca2bc73f444c98e8de071bb2ce81c~mv2_d_1927_1272_s_2.jpg" rounded />
          <h1>BAKED GOODS</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default ShapeExample;
