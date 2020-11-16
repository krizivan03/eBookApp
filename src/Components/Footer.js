import React from 'react'


class AFooter extends React.Component{
    render(){
        return(
            <footer id="footer" className="py-4 transBackground container-fluid ">
                <div className="container text-center">
                    <button className ="contributersBtn">
                        <small>&copy;</small>
                    </button>
                </div>
            </footer>
        );
    }
}
export default AFooter;
