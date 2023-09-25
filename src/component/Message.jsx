
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import '../App.css'
function Message({reset,body}) {
    return (
        <Row className='messaBull'>
          <Col xs={12}>
            <Toast onClose={reset}  delay={3000} bg='Warning' autohide >
              <Toast.Header color='green'>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">OukamiFinance Info</strong>
                <small>......</small>
              </Toast.Header>
              <Toast.Body>{body}</Toast.Body>
            </Toast>
          </Col>
          {/* <Col xs={6}>
            <Button onClick={() => setShow(true)}>Show Toast</Button>
          </Col> */}
        </Row>
      );
    
}
export default Message