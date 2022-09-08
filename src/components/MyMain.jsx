import { Component } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import MySaga from './MySaga';

class MyMain extends Component {
    state = {
        key: '7afae70f',
        harryPotter: [],
        starWars: [],
        fastAndFurious: [],
    }
    componentDidMount() {
        this.fetchSaga('harry', 'potter', 'harryPotter')
        this.fetchSaga('fast', 'and%20furious', 'fastAndFurious')
        this.fetchSaga('star', 'wars', 'starWars')
    }
    async fetchSaga(first, second, complete) {
        try {
            let response = await fetch(
                `https://www.omdbapi.com/?apikey=${this.state.key}&s=${first}%20${second}`);
            if (response.ok) {
                let data = await response.json();
                console.log(data.Search);
                this.setState({
                    [complete]: data.Search,
                });
            } else {
                console.log("qualcosa è andato storto");
            }
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <Container className='budka-main' fluid>
                {
                    this.state.harryPotter.length > 0 &&
                        this.state.starWars.length > 0 &&
                        this.state.fastAndFurious.length > 0 ? (
                        <div>
                            <MySaga n={0} title={'Harry Potter'} saga={this.state.harryPotter} />


                            <MySaga n={1} title={'Star Wars'} saga={this.state.starWars} />


                            <MySaga n={2} title={'Fast And Furious'} saga={this.state.fastAndFurious} />
                        </div>

                    ) : (
                        <Container className='text-center'>
                            <Spinner animation='grow' variant='success' />
                        </Container>

                    )
                }


            </Container>
        )
    }
}

export default MyMain;