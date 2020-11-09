import React from 'react'
import BookItem from './BookItem'

function TheBooks (){
    let numBooks = 
  [
    {name:"Harry Potter", author: "J.K Rowling", description: "This is a desc", price: 1},
    {name:"Harry Potter", author: "J.K Rowling", description: "This is a desc", price: 2},
    {name:"Harry Potter", author: "J.K Rowling", description: "This is a desc", price: 3},
    {name:"Harry Potter", author: "J.K Rowling", description: "This is a desc", price: 3},
    {name:"Harry Potter", author: "J.K Rowling", description: "This is a desc", price: 3},
    {name:"Harry Potter", author: "J.K Rowling", description: "This is a desc", price: 3},
    {name:"Harry Potter", author: "J.K Rowling", description: "This is a desc", price: 3},
    {name:"Harry Potter", author: "J.K Rowling", description: "This is a desc", price: 3},
    {name:"Harry Potter", author: "J.K Rowling", description: "This is a desc", price: 3},
    {name:"Harry Potter", author: "J.K Rowling", description: "This is a desc", price: 3}

  ];
    
        return(    
                <div class = "col-lg-7 mx-1 py-4 px-2">
                    <h1>Book Library</h1>
                    <div class="jumbotron theBooks">
                        { numBooks.map(book => (<BookItem bookTitle = {book.name} bookAuthor ={book.author} bookDesc = {book.description} bookPrice ={book.price} ></BookItem>))} 
                    </div>
                </div>
            );
        
    }
    export default TheBooks;