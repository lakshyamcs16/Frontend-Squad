import React, { useRef } from 'react';
import { Button, Modal, Form, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Popup(props) {

    const formRef = useRef('form');

    function handleSubmit(e){

        let data = '';
        let els = formRef.current.elements;
        for(let k of els) {
            if(k.type === "text") {
                data += `${k.value} \n`;
            }else if(k.type === "select-one" && k.children && k.children.length>0) {
                for(let kk of k.children) {
                    if(kk.selected) {
                        data += `${kk.value} \n`;
                    }
                }
            }else if(k.type === "checkbox" && k.checked) {
                data += `${k.id} \n`;
            }
        }

        alert(data);

    }

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Get Started with SquadVoice!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <span style={{ fontWeight: 800 }}>Plan Selected: </span><span>{props.plan}</span>
                    </div>
                    <Form ref={formRef}>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group controlId="formBasicContact">
                            <Form.Row>
                                <Col>
                                    <Form.Label>E-mail Address</Form.Label>
                                    <Form.Control type="email" />
                                </Col>
                                <Col>
                                    <Form.Label>Phone No.</Form.Label>
                                    <Form.Control type="text" />
                                </Col>
                            </Form.Row>
                        </Form.Group>
                        <Form.Group controlId="formBasicLeads">
                            <Form.Row>
                                <Col>
                                    <Form.Label>Number of leads you generate in a month</Form.Label>
                                    <Form.Control as="select">
                                        <option value="-">-</option>
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Form.Label>Total leads in your CRM</Form.Label>
                                    <Form.Control as="select">
                                        <option value="-">-</option>
                                        <option value="else">else</option>
                                    </Form.Control>
                                </Col>

                            </Form.Row>
                        </Form.Group>
                        <Form.Group controlId="formBasicDetails">
                            <Form.Row>
                                <Col>
                                    <Form.Label>Which CRM do you use?</Form.Label>
                                    <Form.Control as="select">
                                        <option value="-">-</option>
                                    </Form.Control>
                                </Col>
                                <Col>
                                    <Form.Label>No. of Agents</Form.Label>
                                    <Form.Control as="select">
                                        <option value="-">-</option>
                                    </Form.Control>
                                </Col>

                            </Form.Row>
                        </Form.Group>

                        <Form.Group controlId="formBasicSources">
                            <Form.Label>What are your biggest lead sources?</Form.Label>
                            <br></br>
                            <Form.Check inline type="checkbox" label="Zillow" id="Zillow"/>
                            <Form.Check inline type="checkbox" label="Realtor" id="Realtor"/>
                            <Form.Check inline type="checkbox" label="Ylopo" id="Ylopo"/>
                            <Form.Check inline type="checkbox" label="Others" id="Others"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicHear">
                            <Form.Label>How did you hear about us</Form.Label>
                            <br></br>
                            <Form.Check inline type="checkbox" label="Google" id="Google"/>
                            <Form.Check inline type="checkbox" label="Facebook" id="Facebook"/>
                            <Form.Check inline type="checkbox" label="Email" id="Email"/>
                            <Form.Check inline type="checkbox" label="Friends" id="Friends"/>
                            <Form.Check inline type="checkbox" label="Real Closers" id="Real Closers"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={e => handleSubmit(e)}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}