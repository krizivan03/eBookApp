import React from 'react'

class BookItem extends React.Component{
    render(){
        return(
            <div class="container-fluid rounded list-group-item list-group-item-action my-2">    
                <div class="d-flex w-100 justify-content-between">
                <h4 class="mb-1 font-weight-bolder bigShouldersFont">{this.props.bookTitle}</h4>
                    <button class ="add_or_removeBtn">{this.props.add_or_remove}</button>
                </div>
                    <div class = "col bigShouldersFont">{this.props.bookAuthor}</div>
                <hr></hr>
                <div class = "col"><p class="mb-1">{this.props.bookDesc}</p></div>
            
            </div>
            
            );
        }
    }
    export default BookItem;