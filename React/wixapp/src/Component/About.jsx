import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Abouts() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
            <div>
          <Image src="https://static.wixstatic.com/media/f61af8_97627769e7bd41538ecbf417234e55d9~mv2_d_4912_7360_s_4_2.jpg/v1/fill/w_529,h_884,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_97627769e7bd41538ecbf417234e55d9~mv2_d_4912_7360_s_4_2.jpg" style={{margin:'20px',height:'800px',width:'500px'}} rounded/>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <h1 style={{margin:'50px'}}>ABOUT JADE</h1>
          <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. 
This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company.</p>
          <h2 style={{margin:'50px'}}>Education:</h2>
          <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
          <h2 style={{margin:'50px'}}>Awards & Nominations:</h2>
          <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>

        </Col>
        
      </Row>
    </Container>
  );
}

export default Abouts;

