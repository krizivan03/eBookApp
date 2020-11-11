import React from 'react'
import BookItem from './BookItem'

class TheBooks extends React.Component{
  
    state = {
      books:[
        {name:"Harry Potter", author: "J.K Rowling", description: "This is a desc", price: 1}
      ]
    }
    // componentDidMount(){
    //   this.getData();
    // }
    // getData = () =>{
    //   fetch('https://api.github.com/users/hacktivist123/repos')
    //   .then(response => response.json())
    //   .then(data => this.setState({ books: data}))
    //   .then(data => console.log(data))
    //   .catch(err => console.error(err));
    // }
    
    render(){
      let msg;
      let theBookarray = this.state.books
            if (theBookarray.length==0) {
              msg = 
              <div class = "favoriteBooksMsg">Oops! Seems we couldn't retrieve the books.
                <br></br>
                Please Try Again
              </div>
            }
      return(    
        <div class = "col-xl-6 mx-1 py-4 px-2">
            <h1 className = "bigShouldersFont">Book Library</h1>
            <div class="jumbotron theBooks">
              {msg}
              { this.state.books.map(book => (<BookItem bookTitle = {book.name} bookAuthor ={book.author} bookDesc = {book.description} add_or_remove ="Add" ></BookItem>))} 
            </div>
        </div>
    );
    }
    }
    export default TheBooks;