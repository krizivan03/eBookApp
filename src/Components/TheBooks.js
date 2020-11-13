import React from 'react'
import BookItem from './BookItem'

class TheBooks extends React.Component{
  
    state = {
      books:[],
      searchVal:'',
      msg:''
    }
    componentDidMount(){
      this.getData();
    }
    getData = () =>{
      this.setState({
        msg: 'Oops! Seems we couldnt retrieve the books. Try capitlize the first letter'
      });
      fetch('https://hnm1qlqi1m.execute-api.us-east-1.amazonaws.com/dev/getBooks')
      .then(response => response.json())
      .then(data => this.setState({ books: data}))
      .catch(err => console.error(err));
    }
    setSearchVal = (e) => {
      this.setState({
        searchVal: e.target.value
      });
    }
    getSearch = () =>{
      const val = this.state.searchVal
      // console.log(val);
      if (val.length>0) {
        this.setState({
          msg: 'Oops! Seems we couldnt retrieve the books. Try capitlize the first letter. And only one word'
        });
        fetch('https://hnm1qlqi1m.execute-api.us-east-1.amazonaws.com/dev/getaSearch/'+val)
        .then(response => response.json())
        .then(data => this.setState({ books: data}))
        .catch(err => console.error(err)); 
      }
    }
    
    render(){
      let msg;
      let theBookarray = this.state.books
            if (theBookarray.length==0) {
              msg = 
              <div class = "favoriteBooksMsg">{this.state.msg}
                <br></br>
                Please Try Again
              </div>
            }
      return(    
        <div class = "col-xl-6 mx-1 py-4 px-2">
            <h1 className = "bigShouldersFont">Book Library</h1>
            <div class="jumbotron theBooks row">
              <input class="col-10 form-control m-0 mb-5" type="text" onChange = {this.setSearchVal} value ={this.state.searchVal} placeholder="Search" aria-label="Search"></input>
              <button class="col-2 m-0 mb-5 add_or_removeBtn" type="submit" onClick = {this.getSearch}>Search</button>
              {msg}
              { this.state.books.map(book => (<BookItem bookTitle = {book.title} bookAuthor ={book.name} /*bookDesc = {book.description}*/ imgURL = {book.image_url} add_or_remove ="Add" ></BookItem>))} 
            </div>
        </div>
    );
    }
    }
    export default TheBooks;