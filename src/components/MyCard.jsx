import { Component } from 'react'
import { Col } from 'react-bootstrap'
import withRouter from '../utilities/withRouter'
import { EyeFill } from 'react-bootstrap-icons';
class MyCard extends Component {

    render() {
        return (
            <Col>
                <img className='img-fluid my-2 budka-img' src={this.props.img} alt="" />
                <div>
                    <button
                        className='budka-button-eye'
                        onClick={() => {
                            this.props.navigate('/detail/' + this.props.movieId)
                        }}>
                        <EyeFill className='budka-eye' />
                    </button>
                </div>
            </Col>
        )
    }
}

export default withRouter(MyCard)