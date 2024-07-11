import {Button, Card, CardBody, Col, Container, Row} from "reactstrap";
import logo from '../assets/logo.svg'
import {TextField} from "@mui/material";
import SignUpForm from "./signup-form";

function RightSideView() {
    return (
        <div className="App">
           <Row className={'mt-3'}>
               <Col md={9} sm={12}>
                   <img src={logo}/>
               </Col>
               <Col md={3} sm={12} className={'text-end'}>
                   <Button color="success"
                       outline>
                       How It works
                   </Button>
               </Col>
           </Row>

            <Row className={'mt-2'}>
                <Col className={'text-center sign-up-text'}>Sign up</Col>
            </Row>


            <Row className={'mt-3'}>
                <Col md={3}></Col>
                <Col md={6}>
                   {/* <Card >

                        <CardBody>

<div>Your information</div>
                            <TextField id="standard-basic" label="Standard" color="success" variant="standard" />
                        </CardBody>
                    </Card>*/}

                    <SignUpForm/>
                </Col>
                <Col md={3}></Col>

            </Row>


        </div>
    );
}

export default RightSideView;
