import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div>
            <div class="form-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6">
                            <div class="form-container">
                                <h3 class="title"><i class="far fa-caret-square-right"></i> Login</h3>
                                <form class="form-horizontal">
                                    <div class="form-group">
                                        <label for="">E-mail</label>
                                        <input type="text" class="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <label for="">Password</label>
                                        <input type="password" class="form-control" />
                                    </div>
                                    <div class="form-group">
                                        <input type="checkbox" class="checkbox" />
                                        <label class="check-label" for="">Keep me Signed in</label>
                                    </div>
                                    <button class="btn signup">Get Started</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;