import { Container, Row, Col, Button } from "react-bootstrap"
import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons'

const BudkaFooter = () => (
    <Container className="budka-footer" fluid>
        <Row className='justify-content-center'>
            <Col xs={6}>
                <Row>
                    <Col className='text-center py-5' xs={12}>
                        <Facebook className="mx-3 text-light" />
                        <Instagram className="mx-3 text-light text-light" />
                        <Twitter className="mx-3 text-light text-light" />
                        <Youtube className="mx-3 text-light text-light" />
                    </Col>
                </Row>
                <Row
                    xs={1} sm={2} md={4} lg={4}

                >
                    <Col>
                        <Row>
                            <Col xs={12}>
                                <p className="m-1">
                                    <a href="x">Audio and Subtitles</a>
                                </p>
                                <p className="m-1">
                                    <a href="x">Media Center</a>
                                </p>
                                <p className="m-1">
                                    <a href="x">Privacy</a>
                                </p>
                                <p className="m-1">
                                    <a href="x">Contact us</a>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={12}>
                                <p className="m-1">
                                    <a href="x">Audio Description</a>
                                </p>
                                <p className="m-1">
                                    <a href="x">Investor Relations</a>
                                </p>
                                <p className="m-1">
                                    <a href="x">Legal Notices</a>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={12}>
                                <p className="m-1">
                                    <a href="x">Help Center</a>
                                </p>
                                <p className="m-1">
                                    <a href="x">Jobs</a>
                                </p>
                                <p className="m-1">
                                    <a href="x">Cookie Preferences</a>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col xs={12}>
                                <p className="m-1">
                                    <a href="x">Gift Cards</a>
                                </p>
                                <p className="m-1">
                                    <a href="x">Terms of Use</a>
                                </p>
                                <p className="m-1">
                                    <a href="x">Corporate Information</a>
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="text-left mb-2">
                        <Button
                            type="button"
                            className="btn btn-sm footer-button rounded-0 mt-3 budka-button"
                            variant="dark"

                        >
                            Service Code
                        </Button>
                    </Col>
                </Row>
                <Row

                >
                    <Col xs={12} className="mb-2 mt-2 copyright budka-copyright"
                    >
                        <small>© 1997-2022 Netflix, Inc.</small>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
)

export default BudkaFooter;