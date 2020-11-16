import React from 'react';
import SignInForm from './Components/SignInForm';
import Navbar from './Components/Navbar'
import BookItem from './Components/BookItem'
import TheBooks from './Components/TheBooks'
import FavoriteBooks from './Components/FavoriteBooks'
import AFooter from './Components/Footer';


// Select title,image_url,"name" From WrittenBy Natural JOIN Book Natural JOIN Author
class App extends React.Component{

  state = {
    appState:1, // 1 for log in , 2 for app, 3 for contributors
    UserIDInput:'',
    userID:[],
  }
  changeAppState = () =>{
    this.setState({
      appState:2,
      didCreate:0 // 0 not created, 1 yes
    })
  }
  setUserIDInput = (e) =>{
    this.setState({
      UserIDInput: e.target.value
    })
  }
  refresh = () =>{
    this.refs.favBooks.componentDidMount()
  }
  create = () =>{
    fetch('https://hnm1qlqi1m.execute-api.us-east-1.amazonaws.com/dev/addUser')
          .then(console.log("SUCCESS in create: creating user"))
          .then(()=>{
            fetch('https://hnm1qlqi1m.execute-api.us-east-1.amazonaws.com/dev/getLastID')
            .then(response => response.json())
            .then(data => {
              this.setState({
                UserIDInput: data[0].max,
                didCreate:1
              });
              this.changeAppState();
            })
            .catch(err => console.error(err + "Error in Getting ID"));
          })
          .catch(err => console.log(err + "Error in create: error in creating user"));
          console.log('Done with adding user')
          
  }
  
  render(){
    switch (this.state.appState) {
      case 1:
        return(
          <div className="App m-5">
            <SignInForm createUser = {this.create} changeAppState = {this.changeAppState} setUserIDInput = {this.setUserIDInput}></SignInForm>
          </div>
        );
      case 2:
        return (
          <div className="App">
            <Navbar title = "GoodBook" getSearch = {this.getSearch} ></Navbar>
            <div className = "row mx-3 justify-content-center">
            <TheBooks favsID = {this.state.UserIDInput} refreshFavs = {this.refresh}></TheBooks>
            <FavoriteBooks ref = "favBooks" favsID = {this.state.UserIDInput} didCreate = {this.state.didCreate}></FavoriteBooks>
            </div>
            <AFooter></AFooter>
          </div>
        );
    }
  }
  
}

export default App;
