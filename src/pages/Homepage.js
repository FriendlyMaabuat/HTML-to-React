import "../assets/css/styles.css";
import Navigation from "../components/Navigation";
import Masthead from "../components/Masthead";
import Services from "../components/Services";
import PortofolioGrid from "../components/PortofolioGrid";
import About from "../components/About";
import Team from "../components/Team";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Modal1 from "../components/PortofolioModals/Modal1";
import Modal2 from "../components/PortofolioModals/Modal2";
import Modal3 from "../components/PortofolioModals/Modal3";
import Modal4 from "../components/PortofolioModals/Modal4";
import Modal5 from "../components/PortofolioModals/Modal5";
import Modal6 from "../components/PortofolioModals/Modal6";

export default function Homepage() {
  return (
    <div>
      <div>
        <Navigation />
        <Masthead />
        <Services />
        <PortofolioGrid />
        <About />
        <Team />
        <Clients />
        <Contact />
        <Footer />
        {/* Portfolio Modals*/}
        <Modal1 />
        <Modal2 />
        <Modal3 />
        <Modal4 />
        <Modal5 />
        <Modal6 />
      </div>
    </div>
  );
}
