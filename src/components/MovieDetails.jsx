import { Component } from 'react'
import { Col, Container, Row, Card, Badge, Spinner, ListGroup, Form, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import withRouter from '../utilities/withRouter'
import MyCard from './MyCard';

class MovieDetails extends Component {
    state = {
        apiKey: '7afae70f',
        movieId: this.props.params,
        movieToShow: null,
        comments: [],
        formValues: {
            comment: '',
            rate: 3,
            elementId: this.props.params.movieId
        },
        buttonSendToggle: false,
    }
    componentDidMount = () => {
        this.getSingleMovie()
        this.getComments()
    };
    sendComment = async (e) => {
        e.preventDefault()
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
                method: 'POST',
                body: JSON.stringify(this.state.formValues),
                headers: {
                    'Content-type': 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjAyOTIxNzAwOTM4MjAwMTVkNjlkNGQiLCJpYXQiOjE2NjIwMjMxMjcsImV4cCI6MTY2MzIzMjcyN30.I6b0OH9Z19fA56gR_JN7igfZg1dCjRkXr39-NUxd1iE'
                }
            })
            if (response.ok) {
                // the comment has been sent succesfully!!
                this.setState({
                    formValues: {
                        ...this.state.formValues,
                        comment: '',
                        rate: 1,
                    },
                    buttonSendToggle: false,
                })

                console.log('Comment was sent!')
            } else {
                console.log('error')
                alert('something went wrong')
            }
        } catch (error) {
            console.log('error')
        }
    }
    getComments = async () => {
        try {
            const res = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.params.movieId}`,
                {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjAyOTIxNzAwOTM4MjAwMTVkNjlkNGQiLCJpYXQiOjE2NjIwMjMxMjcsImV4cCI6MTY2MzIzMjcyN30.I6b0OH9Z19fA56gR_JN7igfZg1dCjRkXr39-NUxd1iE'
                    }
                }
            )
            if (res.ok) {
                const data = await res.json();

                this.setState({
                    comments: data

                })
                console.log(this.state.comments);
            }
        } catch (err) {
            console.log(err);
        }
    }
    getSingleMovie = async () => {
        try {
            const res = await fetch(`http://www.omdbapi.com/?apikey=${this.state.apiKey}&i=${this.props.params.movieId}`)
            if (res.ok) {
                const data = await res.json()
                this.setState({
                    movieToShow: data,
                })
                console.log(this.state.movieToShow)
            } else {
                console.log("Error on fetch")
            }

        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <Container className='budka-main text-center' fluid>
                {this.state.movieToShow ? (
                    <Row>
                        <Col>
                            <Card style={{ width: '100%', backgroundColor: '#221f1f', color: 'white', border: '1px solid white' }}>
                                <Card.Body className='text-center'>
                                    <Badge className='mb-3' bg="secondary">{this.state.movieToShow.Genre}</Badge>
                                    <Badge className='mb-3' bg="success">{this.state.movieToShow.Language}</Badge>

                                    <Card.Title>{this.state.movieToShow.Title}<br /><Badge className='mb-3' bg="danger">{this.state.movieToShow.Year}</Badge></Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{this.state.movieToShow.Actors}</Card.Subtitle>
                                    <Card.Img variant="top" src={this.state.movieToShow.Poster} />
                                    <Card.Text>
                                        {this.state.movieToShow.Plot}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Row>
                                <Card style={{ width: '100%', backgroundColor: '#221f1f', color: 'white' }}>
                                    <Card.Body className='text-center d-flex flex-wrap'>
                                        <div className='w-50 mb-3'>
                                            <Card.Title>Awards</Card.Title>
                                            <Card.Text>
                                                {this.state.movieToShow.Awards}
                                            </Card.Text>
                                        </div>
                                        <div className='w-50 mb-3'>
                                            <Card.Title>Box office</Card.Title>
                                            <Card.Text>
                                                {this.state.movieToShow.BoxOffice}
                                            </Card.Text>
                                        </div>
                                        <div className='w-50 mb-3'>
                                            <Card.Title>Country</Card.Title>
                                            <Card.Text>
                                                {this.state.movieToShow.Country}
                                            </Card.Text>
                                        </div>
                                        <div className='w-50 mb-3'>
                                            <Card.Title>DVD</Card.Title>
                                            <Card.Text>
                                                {this.state.movieToShow.DVD}
                                            </Card.Text>
                                        </div>
                                        <div className='w-50 mb-3'>
                                            <Card.Title>Director</Card.Title>
                                            <Card.Text>
                                                {this.state.movieToShow.Director}
                                            </Card.Text>
                                        </div>
                                        <div className='w-50 mb-3'>
                                            <Card.Title>Writer</Card.Title>
                                            <Card.Text>
                                                {this.state.movieToShow.Writer}
                                            </Card.Text>
                                        </div>
                                        <div className='w-50 mb-3'>
                                            <Card.Title>Rating</Card.Title>
                                            <Card.Text>
                                                {this.state.movieToShow.imdbRating}
                                            </Card.Text>
                                        </div>
                                        <div className='w-50 mb-3'>
                                            <Card.Title>Total Votes</Card.Title>
                                            <Card.Text>
                                                {this.state.movieToShow.imdbVotes}
                                            </Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Row>
                            <Row className='budka-comments'>
                                <Card style={{ width: '100%', backgroundColor: '#221f1f', color: 'white' }}>
                                    <Card.Body className='text-center d-flex flex-wrap'>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item className='b-border-none'>
                                                <form className='mb-4' onSubmit={this.sendComment}>
                                                    <Form.Group>
                                                        <Form.Control
                                                            onFocus={() => this.setState({ buttonSendToggle: true })}
                                                            className='b-add-comment p-0 text-light'
                                                            type="text"
                                                            rows={1}
                                                            as={'textarea'}
                                                            placeholder='Add comment here'
                                                            value={this.state.formValues.comment}
                                                            onChange={(e) => this.setState({ formValues: { ...this.state.formValues, comment: e.target.value } })}>

                                                        </Form.Control>
                                                        <div className='b-riga'></div>
                                                    </Form.Group>
                                                    <Row className='w-100 m-0'>
                                                        {
                                                            this.state.buttonSendToggle && (
                                                                <Button className='p-0 text-center w-25 ms-auto mt-2 bg-dark' type='submit'>Send</Button>
                                                            )
                                                        }

                                                    </Row>
                                                </form>
                                            </ListGroup.Item>
                                            {
                                                this.state.comments.map(comment => (
                                                    <Container key={comment._id} fluid>
                                                        <Row className='justify-content-start align-items-baseline'>
                                                            <Col className=' d-inline' ><h5 className='m-0 p-0'>{comment.author}</h5></Col>
                                                            <Col className='text-start' > <Badge bg="primary" pill>
                                                                {comment.rate}/5
                                                            </Badge></Col>
                                                        </Row>
                                                        <ListGroup.Item className='text-start p-0 pb-5' >
                                                            {comment.comment}
                                                        </ListGroup.Item>

                                                    </Container>
                                                ))
                                            }
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Row>

                        </Col>
                    </Row>
                ) : (<Spinner animation='grow' variant='success' />)
                }
            </Container>
        )
    }
}

export default withRouter(MovieDetails)