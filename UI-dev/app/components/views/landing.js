import React from 'react';
import {STRINGS} from '../_utility/constants';
import {IMAGE} from '../_utility/constants';
import Nav from '../nav/nav';
import Footer from '../footer/footer';
import DocumentTitle from "react-document-title";
import {matchHeight} from '../_utility/utility';

class Landing extends React.Component {
    
    componentDidMount(){
      
     
    }
    
    render() {
        return (
          <section id="about" className="about section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2">
                            <h2 className="title">home agency</h2>
                            <p>
                              uButia is a free bootstrap template created by freshdesignweb teams. The template includes the complete source files for download such as HTML5, CSS, CSS3 and JavaScript for easy customization.
                            </p>
                          <img src="public/images/signature.png"></img>
                            <span>ubutia Studio-ceo</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    
}

export default Landing;