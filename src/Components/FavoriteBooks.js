import React from 'react'
import BookItem from './BookItem'


  class FavoriteBooks extends React.Component{
    state = {
      FavBooks:[]
    }
    componentDidMount(){
      this.getData();
    }
    getData = () =>{
      fetch('https://api.github.com/users/hacktivist123/repos')
      .then(response => response.json())
      .then(data => this.setState({ FavBooks: data}))
      .then(data => console.log(data))
      .catch(err => console.error(err));
    }
    
    render(){
      let msg;
      let theBookarray = this.state.FavBooks
            if (theBookarray.length==0) {
                msg = <div class = "favoriteBooksMsg">Looks like you haven't selected your favorite books.</div>
            }
      return(
      <div class = " col-xl-4 mx-1 p-4">
        <h1 className = "bigShouldersFont ">Favorites</h1>
        <div class="jumbotron favoriteBooks">
          {msg}
          { this.state.FavBooks.map(book => (<BookItem bookTitle = {book.name} bookAuthor ={book.author} bookDesc = {book.description} add_or_remove ="-" ></BookItem>))} 
        </div>
      </div>
      );

    }
        
    }
    export default FavoriteBooks;