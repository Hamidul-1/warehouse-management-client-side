import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);

        /* signInWithEmailAndPassword(email, password); */
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            // toast('Sent email');
        }
        else{
            // toast('please enter your email address');
        }
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
                            <button type="submit" className="form-button button-l margin-b">Login</button>

                            <a className="text-darkyellow" href="#"><small>Forgot your password?</small></a>
                            <p className="text-whitesmoke text-center"><small>Do not have an account?</small></p>
                            <a className="text-darkyellow" href="#"><small>Sign Up</small></a>
                        </form>
                        {errorElement}
                        <p>New to Laptop warehouse? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
                        
                        <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
                        <p className="margin-t text-whitesmoke"><small> Md Hamidul Islam &copy; 2022</small> </p>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
                
            </body>
        </div>

    );
};

export default Login;