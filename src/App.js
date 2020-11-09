import React from 'react';
import SignInForm from './Components/SignInForm';
import Navbar from './Components/Navbar'
import BookItem from './Components/BookItem'
import TheBooks from './Components/TheBooks'
import FavoriteBooks from './Components/FavoriteBooks'

function App() {
  

  return (
    <div class="App">
     <Navbar title = "GoodBook"></Navbar>
     <div class = "row mx-3 justify-content-center">
     <TheBooks></TheBooks>
     <FavoriteBooks></FavoriteBooks>
     </div>
     
    {/* <SignInForm></SignInForm> */}
    </div>
  );
}

export default App;
