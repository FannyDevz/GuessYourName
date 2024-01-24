import { Container } from "react-bootstrap";
import NavTop from "../elements/NavTop";
import './About.css';

function About() {
    return (
        <>
            <NavTop />
            <Container className="my-5 px-4">
                <h1 className="about-title pb-3">🔑&nbsp;&nbsp;Tentang</h1>
                <p className="about-desc m-0">Tujuan utama dibuatnya <strong>GuessYourName</strong> adalah untuk bersenang senang atau hiburan semata. Semoga dengan adanya <strong>GuessYourName</strong> bisa menjadi hiburan yang seru bagi siapa saja yang memainkannya.<br /> <i><strong>#GYN&nbsp;&nbsp;#GuessYourName&nbsp;&nbsp;#TebakNama</strong></i></p>
            
            </Container>
        </>
    )
}

export default About;