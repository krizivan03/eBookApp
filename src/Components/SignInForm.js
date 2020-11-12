import React, { Component } from 'react';



class SignInForm extends React.Component{
    state = {
        isValid:0 // 0 not present, 1 not valid. create?
    }
    render(){
        let msg;
        const validState = this.state.isValid;
            if (validState == 1) {
                msg = <small class="errorMsg">This is not a vaid user, would you like to<button type="Create" class="createButton" onClick = {this.props.setLogIn}>Create</button>?</small>
            }
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
                    <div class = "d-flex justify-content-end">
                    <button type="Log In" class="btn btn-dark" onClick = {this.props.setLogIn}>Log In</button>
                    </div>
                    {msg}
                </form>
            </div>
            
        );
    }
}

export default SignInForm;