import React from 'react';
import {STRINGS} from '../_utility/constants';
import Nav from '../nav/nav';
import Footer from '../footer/footer';
import DocumentTitle from "react-document-title";

class ContactUs extends React.Component {

    constructor(props) {
        super(props);
        
        this.submit = this.submit.bind(this);
        this.cancel = this.cancel.bind(this);
        
        this.handleChange = this.handleChange.bind(this);
        
        var state = {
            answers : {},
            personal_answers : {
                usr_full_name : "",
                usr_email : "",
                usr_query : ""
            },
            current : 0 ,
        };
        this.state = state;
    }

    submit(e){
        let that = this;
        var obj = e.target;
        window.scrollTo(0, 0);
    }

    cancel(e){
        let that = this;
        var obj = e.target;
        window.scrollTo(0, 0);
    }

    handleChange(e){
        let that = this;
        var obj = e.target;
        var id = $(obj).attr("id");
        var value = $(obj).val();
        var personal_answers = that.state.personal_answers;
        personal_answers[id]=value;
        that.setState({
            personal_answers : personal_answers,
        },function(){
            //console.log(that.state.personal_answers);
        });
    }

    checkFlow(){
        let that = this;
        let p_ans = that.state.personal_answers;
        let current = that.state.current;
        switch(current){
            case 0 :
                var email_validitor_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (
                     ( p_ans["usr_full_name"] && p_ans["usr_full_name"].length >= 2 ) &&
                     ( p_ans["usr_email"] && p_ans["usr_email"].length >= 2 ) &&
                     ( p_ans["usr_query"] && p_ans["usr_query"].length >= 2 )
                ){
                    if(
                        (/^[a-zA-Z]+$/.test(p_ans["usr_full_name"])) &&
                        (email_validitor_regex.test(p_ans["usr_email"]))
                    ){
                        return true;
                    }
                }
            break;
            default : 
                return false
            break;
        }
        return false;
    }
    
    render() {
        let that = this;
        let p_ans = that.state.personal_answers;
        return (
            <DocumentTitle title={STRINGS.PROJECT_NAME+" - Contact Us"}>
            <div>
                <Nav/>
                <section className="container-fluid">
                    
                    {/*<div className="page-header">
                                        <h1>{STRINGS.PROJECT_NAME}!</h1>
                                        <h3>Page Contact Us</h3>
                                        </div>*/}
                    <div className="container">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <section id="" 
                            className="questionGroup text-center col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 margin-bottom-30">
                            <h3 className="margin-bottom-15">Now that you may want to contact us, we need to collect some personal information</h3>
                        </section>
                        
                        <section id="page_1" 
                            className="questionGroup text-center col-md-12 col-md-offset-2 col-sm-10 col-sm-offset-2 margin-bottom-30" style={{display:(""+(that.state.current==0?"block":"none"))}}>
                            <div className="row">
                                <div className="form-group col-sm-4">
                                    <input placeholder="Full Name" type="text" className="form-control" id="usr_full_name" onChange={that.handleChange} value={p_ans.usr_full_name}></input>
                                </div>  
                                <div className="form-group col-sm-4">
                                    <input placeholder="Email " type="email" className="form-control" id="usr_email" onChange={that.handleChange} value={p_ans.usr_email}></input>
                                </div>
                                            
                            </div>
                            <div className="row">
                                <div className="form-group col-sm-8">
                                    <textarea placeholder="Query" style={{resize:"none"}} className="form-control" id="usr_query" onChange={that.handleChange} value={p_ans.usr_query}></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-sm-8">
                                    <button id="" type="button" className={"btn gig_button background backgroundHover "+(that.checkFlow()==true?"color_1":"color_2 disabledButton")} onClick={that.submit}>Submit</button>
                                    <button id="" type="button" className={"btn gig_button background backgroundHover color_2"} onClick={that.cancel}>Cancel</button>
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

export default ContactUs;