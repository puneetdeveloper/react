import React from 'react';
import {STRINGS} from '../../_utility/constants';
import Nav from '../../nav/nav';
import Footer from '../../footer/footer';
import DocumentTitle from "react-document-title";

class SignIn extends React.Component {
    
    render() {
        return (
            <DocumentTitle title={STRINGS.PROJECT_NAME+" - Sign In"}>
             <div>
                <Nav/>
                <section className="questionnaire_container personal_questionnaire">
                     <style>{`body{background-color:#ededed;}`}</style>
                     <div className="container">
                        <section id="page-header"  className="questionGroup text-center  margin-bottom-30">
                            <h3 className="margin-bottom-15">Get a free account<br/>and we'll give you free advice<br/><small class="sign-font">Quickly answer a series of simple questions and we'll give you personalized jobs that you can apply easily.</small></h3>
                        </section>
                        
                        <section id="login-page">
                        <div className="row">
                        <div className="col-lg-12 col-xs-12 col-md-12">
                        <div className="col-lg-5 col-md-5 col-xs-12 ">
                            <div className="form-group col-sm-12 col-xs-12  col-md-12 ">
                             <input placeholder="USERNAME" type="text" className="form-control" id="usr_first_name" ></input>
                                </div>

                                 <div className="form-group col-sm-12  col-xs-12 col-md-12">
                             <input placeholder="PASSWORD" type="text" className="form-control" id="usr_first_name" ></input>
                                </div>

                                  <div className="form-group col-sm-12 col-xs-12 col-md-12">
                            <button type="button" class="btn login-btn">LOGIN</button>
                                </div>

                                    <div className="form-group col-sm-12 col-xs-12 col-md-12">
                             <div className="col-sm-6  col-xs-6 col-md-6 text-left"><input type="checkbox"/><small> Remember me</small></div><div className="col-sm-6 col-xs-6  col-md-6 text-right"><small>Forgot Password?</small></div>
                                </div>

                        </div>
                         
                         <div className="col-lg-2 col-xs-12 col-md-2">
                         <div className="col-round">OR</div>
                         </div>

                         <div className="col-lg-5 col-xs-12 col-md-5">

                        <div className="col-lg-12 col-xs-12 col-pad-sign"><div className="col-md-2 col-xs-2"><div className="fb-col-round"><i class="fa fa-facebook font-size-fa" aria-hidden="true"></i></div></div><div  className="col-md-10 col-xs-10 col-pad-fa"><button type="button" class="btn btn-default fb-login-button">Sign in with Facebook</button></div></div>
                        <div className="col-lg-12 col-xs-12 col-pad-sign"><div className="col-md-2 col-xs-2"><div className="fb-col-round"><i class="fa fa-google-plus font-size-ga" aria-hidden="true"></i></div></div><div  className="col-md-10 col-xs-10 col-pad-fa"><button type="button" class="btn btn-default ga-login-button">Sign in with Gmail</button></div></div>
                       

                         </div>

                       </div>
                        </div>
                        </section>
                        
                        </div>

                </section>
                <Footer/>
            </div>
            </DocumentTitle>
        )
    }
    
}

export default SignIn;