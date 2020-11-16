import React from 'react'
import BookItem from './BookItem'

class TheBooks extends React.Component{
  
    state = {
      books:[],
      searchVal:'',
      msg:'',
      favsID:''
    }
    componentDidMount(){
      this.getData();
    }
    getData = () =>{
      const val = this.props.favsID
      this.setState({
        msg: 'Oops! Seems we couldnt retrieve the books. Try capitlize the first letter'
      });
      fetch('https://hnm1qlqi1m.execute-api.us-east-1.amazonaws.com/dev/getBooks')
      .then(response => response.json())
      .then(data => this.setState({ books: data,favsID:val}))
      .catch(err => console.error(err+"Error In getData"));
    }
    resetData = () =>{
      this.getData();
      this.setState({
        searchVal: ''
      })
    }
    setSearchVal = (e) => {
      this.setState({
        searchVal: e.target.value
      });
    }
    getSearch = () =>{
      const val = this.state.searchVal
      
      if (val.length>0) {
        this.setState({
          msg: 'Oops! Seems we couldnt retrieve the books. Try capitlize the first letter. And only one word'
        });
        fetch('https://hnm1qlqi1m.execute-api.us-east-1.amazonaws.com/dev/getaSearch/'+val)
        .then(response => response.json())
        .then(data => this.setState({ books: data}))
        .catch(err => console.error(err+"Error in getSearch")); 
      }
    }
    addBook = (book_id)=>{
      fetch('https://hnm1qlqi1m.execute-api.us-east-1.amazonaws.com/dev/addBook/'+this.props.favsID+'/'+book_id)
      .then(response => {return this.props.refreshFavs();})
      // .then(data => this.setState({ FavBooks: data}))
      .then(() => console.log("SUCCESS Add Book"))
      .catch(err => console.error(err+"Error in AddBook"));
    }
    
    render(){
      let msg;
      let theBookarray = this.state.books
            if (theBookarray.length==0) {
              msg = 
              <div className = "favoriteBooksMsg">{this.state.msg}
                <br></br>
                Please Try Again
              </div>
            }
      return(    
        <div className = "col-xl-6 mx-1 py-4 px-2">
          <button className ="add_or_removeBtn" onClick = {this.resetData}><h1 className = "bigShouldersFont">Book Library</h1></button>
            <div className="jumbotron theBooks row">
              <input className="col-10 form-control m-0 mb-5" type="text" onChange = {this.setSearchVal} value ={this.state.searchVal} placeholder="Search" aria-label="Search"></input>
              <button className="col-2 m-0 mb-5 form-control add_or_removeBtn" type="submit" onClick = {this.getSearch}>Search</button>
              {msg}
              { this.state.books.map(book => (<BookItem bookTitle = {book.title} bookAuthor ={book.name} /*bookDesc = {book.description}*/ imgURL = {book.image_url} bookID ={book.book_id} addlabel ="Add" add= {this.addBook}></BookItem>))} 
            </div>
        </div>
    );
    }
    }
    export default TheBooks;