import { useEffect, useState, useRef } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import './FavList.css'

export default function FavList() {
    const commentRef = useRef();

    const [favMovies, setFavMovies] = useState([])

    async function getFavMovies() {
        let url = `${process.env.REACT_APP_DERVER_URL}/getAllMovies`;
        let response = await fetch(url, {
            method: 'GET',
        })

        let recievedData = await response.json();
        setFavMovies(recievedData);
    }

    async function deleteHandler(id){
        let url = `${process.env.REACT_APP_DERVER_URL}/DELETE/${id}`;
        let response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })

        if (response.status === 204) {
            getFavMovies()
            alert("successfully deleted !!")
        }
    }
    async function UpdateHandler(event,id){
        event.preventDefault();

        console.log(id)
        let url = `${process.env.REACT_APP_DERVER_URL}/updateMovie/${id}`;
        let data = {
            comment: event.target.comment.value
        }
        console.log(data);
        let response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        getFavMovies()
        if (response.status === 200) {
            getFavMovies()
            alert("Comment Updated successfully !!")
        }
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
                            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}/>
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>{movie.comment}</Card.Text>
                                <Form onSubmit={(event) => UpdateHandler(event, movie.id)}>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control name="comment" as="textarea" rows={3} ref={commentRef} />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" > Update Comment </Button>

                                    <Button className="btn-2" variant="primary" onClick={() => deleteHandler(movie.id)}> Delete </Button>
                                </Form>

                               

                            </Card.Body>
                        </Card>
                    )
                })
            }
        </>
    )
} 