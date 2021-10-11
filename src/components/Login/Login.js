import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const Redirect_uri = location.state?.from || '/shop';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(Redirect_uri);
            })

    }

    return (
        <div className="login-form">
            <div className="">
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Enter password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New To Ema-John website? <Link to="/register">Create Account</Link></p>
                <div>---------or--------</div>
                <button
                    className="btn-regular"
                    onClick={handleGoogleLogin}
                >Google Sign In </button>
            </div>
        </div>
    );
};

export default Login;