import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);

        /* signInWithEmailAndPassword(email, password); */
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    return (
        <div>
            <body className="main-bg">
                <div className="login-container text-c animated flipInX">
                    <div>
                        <h1 className="logo-badge text-whitesmoke"><span className="fa fa-user-circle"></span></h1>
                    </div>
                    <h3 className="text-whitesmoke">Sign In Template</h3>
                    <p className="text-whitesmoke">Sign In</p>
                    <div className="container-content">


                        <form onSubmit={handleSubmit} className="margin-t">
                            <div className="form-group">
                                <input ref={emailRef} type="email" className="form-control mb-2" placeholder="Enter email" required />
                            </div>
                            <div className="form-group">
                                <input ref={passwordRef} type="password" className="form-control mb-2" placeholder="password" required />
                            </div>
                            <button type="submit" className="form-button button-l margin-b">Sign In</button>

                            <a className="text-darkyellow" href="#"><small>Forgot your password?</small></a>
                            <p className="text-whitesmoke text-center"><small>Do not have an account?</small></p>
                            <a className="text-darkyellow" href="#"><small>Sign Up</small></a>
                        </form>
                        <p>New to Laptop warehouse? <Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>

                        <p className="margin-t text-whitesmoke"><small> Md Hamidul Islam &copy; 2022</small> </p>
                    </div>
                </div>
            </body>
        </div>

    );
};

export default Login;