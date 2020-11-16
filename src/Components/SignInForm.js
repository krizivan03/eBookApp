import React, { Component } from 'react';



class SignInForm extends React.Component{
    state = {
        isValid:0,
        UserIDInput:'', // 0 not present, 1 not valid. create?
        userID:[]
    }
    setUserID = (e) =>{
        this.props.setUserIDInput(e)
        this.setState({
            UserIDInput: e.target.value
        })
    }
      
    logIn = () =>{
        const val = this.state.UserIDInput
        
        if (val.length>0){
          fetch('https://hnm1qlqi1m.execute-api.us-east-1.amazonaws.com/dev/findUser/'+val)
          .then(response => response.json())
          .then(data => {
            this.setState({ userID: data});
            this.props.changeAppState()
          })
          .then(console.log("SUCCESS in LogIn"))
          .then(this.setState({isValid: 0}))
          .catch(err => this.emptyVal());
          
        }
        else{
          this.emptyVal()
        }
      }
      emptyVal = () =>{
        console.error("Input was empty or not valid")
          this.setState({
            isValid: 1
          });
      }
      
    
    
    render(){
        let msg;
        const validState = this.state.isValid;
            if (validState == 1) {
                msg = <small className="errorMsg ">This is not a vaid user, would you like to<button type="button" className="createButton" onClick = {this.props.createUser}>Create</button>?</small>
            }
        return(
            <div className="jumbotron container m-auto">
                <h1 className="display-4 text-center">Log In</h1>
                <form>
                    <div className="form-group">
                        <label >User ID</label>
                        <input  className="form-control" onChange = {this.setUserID}></input>
                    </div>
                    {/* <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"></input>
                        <small className="form-text text-muted">Don't use actual password, this site's not real.</small>
                    </div> */}
                    <div className = "d-flex justify-content-end">
                    <button type="button" className="btn btn-dark mt-2" onClick = {this.logIn} >Log In</button>
                    </div>
                    {msg}
                </form>
            </div>
            
        );
    }
}

export default SignInForm;