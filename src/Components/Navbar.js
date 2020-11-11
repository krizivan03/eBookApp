import React from 'react'

class Navbar extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-dark bg-dark justify-content-between mb-5">
                <span class="navbar-brand mb-0 h1 sacramentoFont">{this.props.title}</span>
                <div>
                <a href="?"><span class="fas fa-book glyphSize m-2"></span></a>
                </div>
                <div>
                <a href="#"><span class="fas fa-search glyphSize m-2"></span></a>
                </div>
                
                
            </nav>
        );
    }
}
export default Navbar;