import React from 'react'

class BookItem extends React.Component{
    render(){
        return(
            <div className="container-fluid rounded list-group-item list-group-item-action my-2">    
                <div className="d-flex w-100 justify-content-between align-items-start">
                <a className="font-weight-bolder bigShouldersFont" href ={'https://google.com/search?q='+this.props.bookTitle}><img src={this.props.imgURL} className="bookIMG"></img></a>
                    <div className="container-fluid">
                        <h1 className="font-weight-bolder bigShouldersFont">{this.props.bookTitle}</h1>
                        <hr></hr>
                        <h5 className = "col bigShouldersFont">{this.props.bookAuthor}</h5>
                    </div>
                    <button className ="add_or_removeBtn" onClick = {() => this.props.remove(this.props.bookID) }>{this.props.add_or_remove}</button>
                    <button className ="add_or_removeBtn" onClick = {() => this.props.add(this.props.bookID) }>{this.props.addlabel}</button>
                </div>
                {/* <div className = "col"><p className="mb-1">{this.props.bookDesc}</p></div> */}
            </div>
            
            );
        }
    }
    export default BookItem;