import { Container, Row, Col } from "react-bootstrap";
import { BiPlayCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import Navbar from "../elements/NavTop";
import GYC from "../assets/gyc.gif";
import './Home.css';

function Home() {
    return (
        <>
            <Navbar />
            <Container className="my-5 px-4">
                <Row>
                    <Col className="wrapper-title">
                        <h1 className="content-title">Tebak nama teman atau siapapun itu</h1>
                        <p className="content-desc"><strong>GuessYourName</strong> merupakan sebuah permainan tebak tebakan berbasis web, dimana web ini dapat menebak nama crush, teman atau nama yang sedang kamu pikirkan. tetapi kamu hanya bisa menebak nama yang terdiri dari 3 sampai 7 huruf.<br />
                        <i><strong>#GYN&nbsp;&nbsp;#GuessYourName&nbsp;&nbsp;#TebakNama</strong></i>
                        </p>
                        <Link className="content-button" to="/start">Mulai <BiPlayCircle className="content-icon py-1" /></Link>
                        <Link className="content-button2 ms-3" to="/cara-main">Cara Bermain ?</Link>
                    </Col>
                    <Col className="text-center wrapper-image">
                        <img className="home-image" width="80%" src={GYC} alt="GuessYourName" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;