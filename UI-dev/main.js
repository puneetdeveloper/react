import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Landing from "./app/components/Views/landing";
import ForPlatforms from "./app/components/Views/platforms/ForPlatforms";
import Match from "./app/components/Views/platforms/Match";
import PersonalInformation from "./app/components/Views/questionnaire/PersonalInformation";
import Questionnaire from "./app/components/Views/questionnaire/Questionnaire";
import SignIn from "./app/components/Views/questionnaire/signIn";
import AboutUs from "./app/components/Views/aboutUs";
import ContactUs from "./app/components/Views/contactUs";
import UnderConstruction from "./app/components/etc/UnderConstruction";
import NotFound from './app/components/etc/404';
import App from './app/components/App';
import {Provider} from 'react-redux';
import store from './app/store/store';

const root = document.getElementById('root');

render(
    <Provider store={store}>
        <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)} >
           
            <Route component={App} onUpdate={() => window.scrollTo(0, 0)}>
                <Route path="/" component={Landing}/> 
                <Route path="/home" component={Landing}/> 
                <Route path="/SignUp" component={UnderConstruction}/>
                <Route path="/SignIn" component={SignIn}/>
                <Route path="/AboutUs" component={AboutUs}/>
                <Route path="/ContactUs" component={ContactUs}/>             
                <Route path="/Questionnaire" component={Questionnaire}/>             
                <Route path="/ForPlatforms" component={UnderConstruction}/>
                <Route path="/Match" component={Match}/>
                <Route path="/PersonalInformation" component={PersonalInformation}/>
                <Route path="/CreateAccount" component={PersonalInformation}/>
            </Route>
            
            <Route path="/UnderConstruction" component={UnderConstruction} onUpdate={() => window.scrollTo(0, 0)}/>
            <Route path="/*" component={NotFound} onUpdate={() => window.scrollTo(0, 0)}/>
            <Route path="*" component={NotFound} onUpdate={() => window.scrollTo(0, 0)}/>
            
        </Router>
    </Provider>, root
);
