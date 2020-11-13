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
    appState:2, // 1 for log in , 2 for app, 3 for contributors
    user: "",
    pw: "",
    theBookList:[],
    favBooks:[]
  }
  
  logIn = () =>{
    this.setState({
      appState: 2
    });
  }

  render(){
    switch (this.state.appState) {
      case 1:
        return(
          <div class="App m-5">
            <SignInForm setLogIn = {this.logIn}></SignInForm>
          </div>
        );
      case 2:
        return (
          <div class="App">
            <Navbar title = "GoodBook" getSearch = {this.getSearch} ></Navbar>
            <div class = "row mx-3 justify-content-center">
            <TheBooks></TheBooks>
            <FavoriteBooks></FavoriteBooks>
            </div>
            <AFooter></AFooter>
          </div>
        );
    }
  }
  
}

export default App;
