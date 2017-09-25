import React from 'react';
import {STRINGS} from '../_utility/constants';
import Nav from '../nav/nav';
import Footer from '../footer/footer';
import DocumentTitle from "react-document-title";

class AboutUs extends React.Component {
    
    render() {
        return (
            <DocumentTitle title={STRINGS.PROJECT_NAME+" - About Us"}>\
            
            <div>
                <Footer/>
            </div>
            </DocumentTitle>
        )
    }
    
}

export default AboutUs;