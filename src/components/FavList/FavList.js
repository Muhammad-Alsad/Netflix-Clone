import { useEffect, useState, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default function FavList() {
    const commentRef = useRef();

    const [favMovies, setFavMovies] = useState([])

    async function getFavMovies() {
        let url = `${process.env.REACT_APP_SERVER_URL}/getAllMovies`;
        let response = await fetch(url, {
            method: 'GET',
        })

        let recievedData = await response.json();
        setFavMovies(recievedData);
    }




    useEffect(() => {
        getFavMovies()

    }, [])
    return (
        <>
            <h4>this is the favorite Movie</h4>
            {
                favMovies.map(movie => {
                    return (
                        <Card key={movie.id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={movie.posterpath} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>{movie.overview}</Card.Text>
                                <Card.Text>{movie.comments}</Card.Text>
                                <Form >
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control name="comment" as="textarea" rows={1} ref={commentRef} />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" > Update Comment </Button>
                                </Form>

                                <Button variant="primary" > Delete </Button>

                            </Card.Body>
                        </Card>
                    )
                })
            }
        </>
    )
} 