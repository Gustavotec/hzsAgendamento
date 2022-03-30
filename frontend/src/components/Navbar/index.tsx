import { ReactComponent as GithubIcon } from "assets/img/logo.svg";
import { Link } from 'react-router-dom';
import './styles.css';

function Navbar() {
  return (
    <header>
        <nav className="container">
          <div className="agendamento-nav-content">
            <Link to="/">
              <h1>Fila Cirurgica</h1>
            </Link>
          <a
            href="https://hospitalzonasul.saude.pr.gov.br"
            target="_blank"
            rel="noreferrer"
          >
            <div className="agendamento-contact-container">
              <GithubIcon />
              <p className="agendamento-contact-link">Hospital Zona Sul</p>
            </div>
          </a>
        </div>
      </nav>
      
    </header>
  );
}

export default Navbar;
