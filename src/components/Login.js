import { Link } from "react-router-dom";
import logo from '../images/login-logo.png';

function Login() {
    return (
        <div className="container text-center mt-5">
            <Link className="navbar-brand me-3 mt-2" to="/">
                <img style={{ height: "40px" }} src={logo} alt="Logo" />
            </Link>
            <div className="border mx-auto mt-3 p-3 rounded" style={{ width: "fit-content", boxShadow: "0 0 10px #ccc" }}>
                <h2 className="mb-3 fw-bold">Sign In</h2>
                <form>
                    <div className="d-flex flex-column">
                        <label className="me-2 fs-5" htmlFor="email">Email</label>
                        <input 
                            className="rounded-1 border-1 py-1 text-center" 
                            autoComplete="email" 
                            style={{ outline: "none" }} 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Enter Your Email" 
                        />
                    </div>
                    <div className="d-flex flex-column mt-3">
                        <label className="me-2 fs-5" htmlFor="password">Password</label>
                        <input 
                            className="rounded-1 border-1 py-1 text-center" 
                            autoComplete="current-password" 
                            style={{ outline: "none" }} 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Enter Your Password" 
                        />
                    </div>
                    <input className="btn btn-warning my-2 w-100" type="submit" value="Sign In" />
                    <p className="text-secondary">
                        By continuing, you agree to Amazon's Fake <br/> Clone Conditions of Use 
                        and Privacy Notice.
                    </p>
                    <input className="btn btn-secondary" type="button" value="Create Amazon Account" />
                </form>
            </div>
        </div>
    );
}

export default Login;
