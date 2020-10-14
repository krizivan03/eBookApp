import React, { Component } from 'react';



class SignInForm extends React.Component{
    render(){
        return(
            
            <div class="jumbotron container m-auto">
                <h1 class="display-4">Log In</h1>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">User Name</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"></input>
                        <small id="emailHelp" class="form-text text-muted">Don't use actual password, this site's not real.</small>
                    </div>
                    <button type="Log In" class="btn btn-dark">Go</button>
                </form>
            </div>
            
        );
    }
}

export default SignInForm;