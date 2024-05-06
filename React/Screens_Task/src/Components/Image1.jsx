import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Shapes() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="https://th.bing.com/th?id=OIP.AwGBn0RaiFXEpXemdj-2LQHaLG&w=204&h=306&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://www.bing.com/ck/a?!&&p=c31fef35ffbc4f47JmltdHM9MTcxMzM5ODQwMCZpZ3VpZD0yYTU3MjAyZi00YWYzLTYwMDUtMzJkOS0zNDRjNGI1ZTYxM2ImaW5zaWQ9NTY5Mw&ptn=3&ver=2&hsh=3&fclid=2a57202f-4af3-6005-32d9-344c4b5e613b&u=a1L2ltYWdlcy9zZWFyY2g_cT1wZXJzb25zJTIwaW1hZ2VzJkZPUk09SVFGUkJBJmlkPUM5NTRENUQxRDIzN0M4MzVGMDYzNkZFNUY1RkJDODlCMzNFMTM4REM&ntb=1" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://www.bing.com/ck/a?!&&p=df1e8ecefac443f2JmltdHM9MTcxMzM5ODQwMCZpZ3VpZD0yYTU3MjAyZi00YWYzLTYwMDUtMzJkOS0zNDRjNGI1ZTYxM2ImaW5zaWQ9NTY5NQ&ptn=3&ver=2&hsh=3&fclid=2a57202f-4af3-6005-32d9-344c4b5e613b&u=a1L2ltYWdlcy9zZWFyY2g_cT1wZXJzb25zJTIwaW1hZ2VzJkZPUk09SVFGUkJBJmlkPUI3MzBENzdBODdBMjM1Qjc1OUE2REYzRDk1NTg4Mzc1RDEzOTE0RUQ&ntb=1" thumbnail />
        </Col>
      </Row>
    </Container>
  );
}

export default Shapes;