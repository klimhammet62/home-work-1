import { Nav, Navbar, Row, Col, Card } from "react-bootstrap";
import Article from './Article.jsx';
export default function App() {
    const { pathname } = window.location;
    const pathnameId = pathname.split('/');

    return (
        <div className="App">
            <header>
                <h2>
                    <a href="/">React Blog</a>
                </h2>
                <Nav variant="pills" defaultActiveKey="/">
                    <Nav.Item>
                        <Nav.Link eventKey="/home" to="/">
                            Главная
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/home" to="/about">
                            Обо мне
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="/home" to="/profile">
                            Профиль
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </header>
            {
                pathname === "/" && (
                    <Row xs={1} md={3} className="g-4">
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/150x150" />
                                <Card.Body>
                                    <Card.Title>
                                        Кликни на пост
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                )
            }
            {pathname === `/post/${pathnameId[2]}` ? <Article id={pathnameId[2]} /> : <a href="/post/100">Перейти на пост</a>}
            {
                pathname === "/about" && (
                    <Card>
                        <Card.Body>Это мой личный сайт!</Card.Body>
                    </Card>
                )
            }
            <br />
            <Navbar bg="light" style={{ paddingLeft: 20 }}>
                <Navbar.Brand href="#home">My site (c) 2021</Navbar.Brand>
            </Navbar>
        </div >
    );
}