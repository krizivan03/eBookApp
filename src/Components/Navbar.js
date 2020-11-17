import React from 'react'
import bLogo from '../Images/BookLogo.png'

class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-md justify-content-center navbar-light bg-transparent">
                <img src = {bLogo} className ="bookLogo pt-2"></img>
            </nav>
        );
    }
}
export default Navbar;