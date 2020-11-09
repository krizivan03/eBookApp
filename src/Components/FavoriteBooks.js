import React from 'react'
import BookItem from './BookItem'

function FavoriteBooks (){
    let FavBooks = 
  [
    {name:"Harry Potter", author: "J.K Rowling", description: "This is a desc", price: 1},
    {name:"Harry Potter", author: "J.K Rowling", description: "This is a desc", price: 2},
    {name:"Harry Potter", author: "J.K Rowling", description: "This is a desc", price: 3},
    {name:"Harry Potter", author: "J.K Rowling", description: "This is a desc", price: 3}
    

  ];
    
        return(    
                <div class = " col-lg-4 mx-1 p-4">
                    <h1>Favorites</h1>
                    <div class="jumbotron favoriteBooks">
                        { FavBooks.map(book => (<BookItem bookTitle = {book.name} bookAuthor ={book.author} bookDesc = {book.description} bookPrice ={book.price} ></BookItem>))} 
                    </div>
                </div>
            );
        
    }
    export default FavoriteBooks;