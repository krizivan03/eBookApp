import React from 'react'

class BookItem extends React.Component{
    render(){
        return(
            <div class="container-fluid pb-1 rounded">
                <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1 font-weight-bolder">{this.props.bookTitle}</h4>
                    <small>{this.props.bookPrice}</small>        
                </div>
                <small>{this.props.bookAuthor}</small>
                <hr></hr>
                <p class="mb-1">{this.props.bookDesc}</p>
            </a>
            </div>
            
            );
        }
    }
    export default BookItem;