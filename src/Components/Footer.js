import React from 'react'


class AFooter extends React.Component{
    render(){
        return(
            <footer id="footer" class="py-4 transBackground container-fluid ">
                <div class="container text-center">
                    <button class ="contributersBtn">
                        <small>&copy; Contributors</small>
                    </button>
                </div>
            </footer>
        );
    }
}
export default AFooter;
