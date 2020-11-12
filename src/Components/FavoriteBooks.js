import React from 'react'
import BookItem from './BookItem'


  class FavoriteBooks extends React.Component{
    state = {
      FavBooks:[
        {name:"Harper Lee",image_url:"https://images.gr-assets.com/books/1361975680m/2657.jpg",title:"To Kill a Mockingbird"}
      ]
    }
    // componentDidMount(){
    //   this.getData();
    // }
    // getData = () =>{
    //   fetch('https://hnm1qlqi1m.execute-api.us-east-1.amazonaws.com/dev/getBooks')
    //   .then(response => response.json())
    //   .then(data => this.setState({ FavBooks: data}))
    //   .then(data => console.log(data))
    //   .catch(err => console.error(err));
    // }
    
    render(){
      let msg;
      let theBookarray = this.state.FavBooks
            if (theBookarray.length == 0) {
                msg = <div class = "favoriteBooksMsg">Looks like you haven't selected your favorite books.</div>
            }
      return(
      <div class = " col-xl-4 mx-1 p-4">
        <h1 className = "bigShouldersFont ">Favorites</h1>
        <div class="jumbotron favoriteBooks">
          {msg}
          { this.state.FavBooks.map(book => (<BookItem bookTitle = {book.title} bookAuthor ={book.name} imgURL = {book.image_url}  add_or_remove ="-" ></BookItem>))} 
        </div>
      </div>
      );

    }
        
    }
    export default FavoriteBooks;