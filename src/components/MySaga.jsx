import { Component } from 'react'
import { Container } from 'react-bootstrap';
import { CaretLeftFill, CaretRightFill } from 'react-bootstrap-icons'
import MyCard from './MyCard';

class MySaga extends Component {
    scrollRight(n) {
        let scroll = document.querySelectorAll('.budka-saga');
        scroll[n].scrollLeft -= 200
    }
    scrollLeft(n) {
        let scroll = document.querySelectorAll('.budka-saga');
        scroll[n].scrollLeft += 200
    }
    render() {
        return (
            <Container className='text-light' fluid>
                <h3>{this.props.title}</h3>

                <div className="row row-cols-1 flex-lg-nowrap overflow-scroll row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center budka-saga">
                    {
                        this.props.saga.map(film => (
                            <MyCard key={film.imdbID} movieId={film.imdbID} img={film.Poster} />
                        ))
                    }
                </div>
                <div className='d-none d-lg-flex justify-content-between pb-3'>
                    <button className='budka-button-main' onClick={(e) => {
                        this.scrollRight(this.props.n);
                    }}><CaretLeftFill /></button>
                    <button className='budka-button-main' onClick={(e) => {
                        this.scrollLeft(this.props.n);
                    }}><CaretRightFill /></button>
                </div>

            </Container>
        )
    }
}

export default MySaga;