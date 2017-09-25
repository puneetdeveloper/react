import React from 'react';
import Nav from './nav/nav';
import Footer from './footer/footer';
import DocumentTitle from "react-document-title";
import ListView from "./listview/listview";
{/*import Filter from "./listview-filter/filter"*/}
import {STRINGS} from './_utility/constants';


class App extends React.Component {
    render() {
       // $("#navbar").removeClass("in").attr("aria-expanded","false");
        return (
            <DocumentTitle title={STRINGS.PROJECT_NAME}>
            <div>
                <Nav/>
               <div id="mainWrapper">
                    {this.props.children}
                </div>   
                <ListView/>      
                <Footer/>
            </div>
            </DocumentTitle>
        )
    }
    
}
export default App;