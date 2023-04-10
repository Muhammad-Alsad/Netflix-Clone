import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import './ModelMovie.css'

export default function ModelMovie(props) {

    const commentRef = useRef();

    function submitHandler(event){
        event.preventDefault();
        let userComment = commentRef.current.value;
        console.log("user comment is : ",userComment); 

        let newData ={...props.data,userComment};
        //console.log(newData);
        props.commentHandler(newData,newData.id)

    }

    async function addToFavHandler(event, movie) {
        event.preventDefault();

        let url = `${process.env.REACT_APP_DERVER_URL}/addMovie`

        let data = {
            title: props.data.title,
            poster_path: `https://image.tmdb.org/t/p/w400/${props.data.poster_path}`,
            overView: props.data.overview,
            comment: props.data.comment,
        }
         console.log(1111,data)
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        if (response.status === 200) {
            alert("sucessfully added to database")
        }
       
    }
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose} >
                <Modal.Header >

                    <Modal.Title >

                        {props.data.title}
                        <img style={{ "width": "100%", "height": "400px" }}
                            src={`https://image.tmdb.org/t/p/w400/${props.data.poster_path}`}
                            alt={props.data.title} />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {props.data.comment ? props.data.comment : "No comment Added"}

                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Add a comment</Form.Label>
                            <Form.Control ref={commentRef} as="textarea" rows={3}  placeholder='Enter Your Comment!'/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={(event)=> submitHandler(event)}>
                            Submit
                        </Button>
                        <Button className='btn-1' variant="primary"  onClick={(event) => addToFavHandler(event)}>
                            Add-to-Favorites
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}


