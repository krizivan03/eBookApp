import React, { Component } from 'react';



class SignInForm extends React.Component{
    state = {
        isValid:0,
        UserIDInput:'', // 0 not present, 1 not valid. create?
        userID:[],
        loading:false
    }
    setUserID = (e) =>{
        this.props.setUserIDInput(e)
        this.setState({
            UserIDInput: e.target.value
        })
    }
      
    logIn = () =>{
        const val = this.state.UserIDInput
        this.setState({ loading: true});
        if (val.length>0){
          fetch('https://hnm1qlqi1m.execute-api.us-east-1.amazonaws.com/dev/findUser/'+val)
          .then(response => response.json())
          .then(data => {
            this.setState({ userID: data, loading:false});
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
            isValid: 1,
            loading:false
          });
      }
      
    
    toggleLoader = () =>{
        this.setState({
            loading:true
        })
        this.props.createUser()
    }
    render(){
        let msg;
        const validState = this.state.isValid;
            if (validState == 1) {
                msg = <small className="errorMsg ">This is not a vaid user, would you like to<button type="button" className="createButton" onClick = {this.toggleLoader}>Create</button>?</small>
            }
        let spinner = this.state.loading ?<div class="d-flex justify-content-center"><div class="spinner-border" role="status"><span class="sr-only"></span></div></div> :<div></div> ;
        return(
            <div className="jumbotron container mx-auto my-5 h-50">
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
                    {spinner}
                    <div className = "d-flex justify-content-end pt-5 mb-0">
                    <small className="errorMsg"><button type="button" className="add_or_removeBtn" onClick = {this.toggleLoader}>Create ?</button></small>
                    </div>
                    {msg}
                    
                </form>
                
            </div>
            
        );
    }
}

export default SignInForm;