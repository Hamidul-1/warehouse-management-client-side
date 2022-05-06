import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(event.target.name.value);

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div>
            <body className="main-bg">
                <div className="login-container text-c animated flipInX">
                    <div>
                        <h1 className="logo-badge text-whitesmoke"><span className="fa fa-user-circle"></span></h1>
                    </div>
                    <h3 className="text-whitesmoke">Register Template</h3>
                    <p className="text-whitesmoke">Register</p>
                    <div className="container-content">


                        <form onSubmit={handleRegister} className="margin-t">
                            <div className="form-group">
                                <input type="text" className="form-control mb-2" placeholder="Your Name" required name='name' />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control mb-2" placeholder="Enter email" required name='email' />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control mb-2" placeholder="password" required name='password' />
                            </div>

                            <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                            <label className={`ps-2 ${agree ? 'text-info bg-dark' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Conditions</label>
                            <button disabled={!agree} type="submit" className="form-button button-l margin-b mt-2">Submit</button>

                            {/* <a className="text-darkyellow" href="#"><small>Forgot your password?</small></a>
                            <p className="text-whitesmoke text-center"><small>Do not have an account?</small></p>
                            <a className="text-darkyellow" href="#"><small>Sign Up</small></a> */}
                        </form>
                        <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>

                        <p className="margin-t text-whitesmoke"><small> Md Hamidul Islam &copy; 2022</small> </p>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </body>
        </div>
    );
};

export default Register;