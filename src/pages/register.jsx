
import {Col, Container, Row} from "reactstrap";
import LeftSideView from "../components/left-side";
import RightSideView from "../components/right-side";


function Register() {
    return (
        <Container fluid={true} className="App  pl-0">
            <Row >
                <Col md={6}>
                    <LeftSideView/>
                </Col>
                <Col md={6}>
                    <RightSideView/>
                </Col>

            </Row>

        </Container>
    );
}

export default Register;
