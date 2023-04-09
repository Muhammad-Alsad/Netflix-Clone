import ModalMovie from "../ModalMovie/ModalMovie"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";


export default function Movie(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w400/${props.data.poster_path}`} />
                <Card.Body>
                    <Card.Title>{props.data.title}</Card.Title>
                    <Button variant="primary" onClick={handleShow}>Add-to-favorite</Button>
                </Card.Body>
            </Card>
            <ModalMovie show={show} handleClose={handleClose} data={props.data} />
        </>
    )
}