import React from 'react';
import SignInForm from './Components/SignInForm';
import Navbar from './Components/Navbar'
import BookItem from './Components/BookItem'

function App() {
  let numBooks = 
  [
    {name:"Harry Potter", author: "J.K Rowling", description: "This is a desc", price: 1},
    {name:"Harry Potter", author: "J.K Rowling", description: "This is a desc", price: 2},
    {name:"Harry Potter", author: "J.K Rowling", description: "This is a desc", price: 3},
    {name:"Harry Potter", author: "J.K Rowling", description: "This is a desc", price: 3},
    {name:"Harry Potter", author: "J.K Rowling", description: "This is a desc", price: 3},
    {name:"Harry Potter", author: "J.K Rowling", description: "This is a desc", price: 3},
    {name:"Harry Potter", author: "J.K Rowling", description: "This is a desc", price: 3}
  ];

  return (
    <div className="App">
     <Navbar title = "GoodBook"></Navbar>
     <div class="container">
     <div class="jumbotron">
     { numBooks.map(book => (<BookItem bookTitle = {book.name} bookAuthor ={book.author} bookDesc = {book.description} bookPrice ={book.price} ></BookItem>))} 
     </div>
     </div>
    
    {/* <SignInForm></SignInForm> */}
    
    </div>
  );
}

export default App;
