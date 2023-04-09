import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function ModelMovie(props) {

   
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose} >
                <Modal.Header >
                   
                    <Modal.Title closeButton>
                        
                        {props.data.title}
                        <img style={{ "width": "100%", "height": "400px" }}
                         src={`https://image.tmdb.org/t/p/w400/${props.data.poster_path}`}
                          alt={props.data.title} />
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Add a comment</Form.Label>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Add-to-Favorites
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}