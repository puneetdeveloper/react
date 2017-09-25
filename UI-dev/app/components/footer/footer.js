import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (            
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <p>Design <font className="logo-icon"></font> by <a href="https://www.freshdesignweb.com/">freshDesignweb</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
    
}


export default Footer;
