import React from 'react'
import BookItem from './BookItem'


  class FavoriteBooks extends React.Component{
    state = {
      FavBooks:[],
      favsID:'',
      reccomendation:[]
    }
    componentDidMount(){
      this.getData();
    }
    getData = () =>{
      const val = this.props.favsID
      if (val !="") {
      fetch('https://hnm1qlqi1m.execute-api.us-east-1.amazonaws.com/dev/getUserFavs/'+val)
      .then(response => response.json())
      .then(data => this.setState({ FavBooks: data,favsID:val}))
      .catch(err => console.error(err));
      }else{console.log(val+"Error in getData: val is empty")}
    }
    remove = (book_id) => {
      fetch('https://hnm1qlqi1m.execute-api.us-east-1.amazonaws.com/dev/removeBook/'+this.props.favsID+'/'+book_id)
      .then(() => {return this.componentDidMount();})
      .then(() => console.log("SUCCESS in Remove"))
      .catch(err => console.error(err +"Error in Remove"));
    }
    getRecc = () =>{
      fetch('https://hnm1qlqi1m.execute-api.us-east-1.amazonaws.com/dev/getReccomend')
      .then(response => response.json())
      .then(data => this.setState({ reccomendation: data}))
      .then(() => console.log("Success in Get Reccomendation"))
      .catch(err => console.error(err + "Error in Get Reccemondation"));
    }
    
    
    render(){
      
      let msg;
      
      let theBookarray = this.state.FavBooks
            if (theBookarray.length == 0) {
                msg = <div className = "favoriteBooksMsg">Looks like your Favorite Books List is empty.</div>
            }
      let reccomendation;
      let re = this.state.reccomendation
            if(re.length!=0){
              var r = re[0] 
              reccomendation = <BookItem bookTitle = {r.title} bookAuthor= {r.name} imgURL ={r.image_url}></BookItem>
            }
      return(
      <div className = " col-xl-4 mx-1 p-4">
        
        <h1 className = "bigShouldersFont ">Favorites</h1>
        <div className="jumbotron mb-0 favoriteBooks">
          {msg}
          { this.state.FavBooks.map(book => (<BookItem bookTitle = {book.title} bookAuthor ={book.name} bookID ={book.book_id} imgURL = {book.image_url}  add_or_remove ="-" remove = {this.remove} ></BookItem>))} 
        </div>
        <div className="userID bigShouldersFont"><small>USER ID: {this.state.favsID}</small> </div>
        <div className="d-flex justify-content-end"><button className="add_or_removeBtn bigShouldersFont" onClick = {this.getRecc}>Reccomend?</button></div>
        {reccomendation}
      </div>
      );

    }
        
    }
    export default FavoriteBooks;