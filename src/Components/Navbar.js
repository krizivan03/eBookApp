import React from 'react'
import bLogo from '../Images/BookLogo.png'

class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-md justify-content-center navbar-light bg-transparent">
                <img src = {bLogo} className ="bookLogo pt-2"></img>
                {/* <span class="fas fa-book glyphSize mx-3 bookGylphColor"></span><span class="navbar-brand mb-0 h1 sacramentoFont">{this.props.title}</span> */}
                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button> */}

                {/* <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-dark my-2 my-sm-0" type="submit" onClick = {this.props.getSearch}>Search</button>
                </form>
                </div> */}
            </nav>
        );
    }
}
export default Navbar;