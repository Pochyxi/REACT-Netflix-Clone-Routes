import { Component } from 'react'
import { Col, Container, Row, Card, Badge, Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import withRouter from '../utilities/withRouter'
import MyCard from './MyCard';

class MovieDetails extends Component {
    state = {
        apiKey: '7afae70f',
        movieId: this.props.params,
        movieToShow: null,
    }
    componentDidMount = () => {
        this.getSingleMovie()
    };

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
                        </Col>
                    </Row>
                ) : (<Spinner animation='grow' variant='success' />)
                }
            </Container>
        )
    }
}

export default withRouter(MovieDetails)