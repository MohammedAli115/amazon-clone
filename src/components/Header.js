import { Link } from 'react-router-dom';
import logo from '../images/header-logo.png';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div className="d-flex w-100 align-items-center">
                    <Link className="navbar-brand me-3 mt-3" to="/">
                        <img style={{ height: "40px" }} src={logo} alt="Logo" />
                    </Link>
                    <div className="input-group flex-grow-1">
                        <input type="text" className="form-control rounded-0 border-0" placeholder="Search"
                            aria-label="Search" aria-describedby="basic-addon1" />
                        <span style={{cursor : "pointer"}} className="input-group-text bg-warning border-0 rounded-0 d-none d-md-block" id="basic-addon1">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                    </div>
                    <button className="navbar-toggler ms-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white" aria-current="page" to="#" style={{whiteSpace : "nowrap"}}>Sign In </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">
                                <i className="fa-solid fa-cart-shopping text-warning fs-3"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
