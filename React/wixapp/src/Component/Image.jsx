import Card from 'react-bootstrap/Card';

import Container from 'react-bootstrap/Container';
function ImageWithText() {
  return (
    
    <Container>
      <Card style={{ height: '20rem' }}>
        <Card.Img variant="top" src="https://static.wixstatic.com/media/f61af8_97a68d95c3584eee8952b7b3184f5f80~mv2_d_6924_3840_s_4_2.jpg/v1/fill/w_1057,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_97a68d95c3584eee8952b7b3184f5f80~mv2_d_6924_3840_s_4_2.jpg"/>
        <Card.Body>
          <Card.Title><h1>THE ART OF FOOD</h1>
          </Card.Title>
          <Card.Text>
            <h5>P H O T O G R A P H Y</h5>
          </Card.Text>
          
        </Card.Body>
      </Card>
  </Container>
  );
}

export default ImageWithText;