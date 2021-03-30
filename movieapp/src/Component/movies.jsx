import React, { useState } from "react";

import { Button, Modal, InputGroup, FormControl, Nav } from "react-bootstrap";
import App from "../App";
function Movies() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link onClick={handleShow}>Launch demo modal</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Rat</Nav.Link>
                </Nav.Item>
            </Nav>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup size="sm" className="mb-3" onChange={App.Title}>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">
                                Title :
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </InputGroup>
                    <br />
                    <InputGroup
                        size="sm"
                        className="mb-3"
                        onChange={App.Description}
                    >
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">
                                Description :
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </InputGroup>
                    <br />
                    <InputGroup
                        size="sm"
                        className="mb-3"
                        onChange={App.PosterUrl}
                    >
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-sm">
                                PosterUrl :
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={App.AddMovie}>
                        Add Movie
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default Movies;
