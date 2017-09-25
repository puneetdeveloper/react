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
                var flag = 0;
                var div_name = document.getElementById('usr_full_name');
                var div_email = document.getElementById('usr_email');
                var div_query = document.getElementById('usr_query');
                var div_name_input = document.getElementById('usr_full_name_input');
                var div_email_input = document.getElementById('usr_email_input');
                var div_query_input = document.getElementById('usr_query_input');

                if ( ( p_ans["usr_full_name"] && p_ans["usr_full_name"].length >= 2 ) ){
                    if(div_name && that.hasClass(div_name,"has-error")){
                        that.removeClass(div_name,"has-error");
                    }

                    if(/^[a-zA-Z]+$/.test(p_ans["usr_full_name"])){
                        if(div_name && that.hasClass(div_name,"has-error")){
                            that.removeClass(div_name,"has-error");
                        }

                        if(div_name_input && !that.hasClass(div_name_input,"hide")){
                            that.addClass(div_name_input,"hide");
                        }
                    }else{
                        flag = 1;
                        if(div_name_input && that.hasClass(div_name_input,"hide")){
                            that.removeClass(div_name_input,"hide");
                        }

                        if(div_name && !that.hasClass(div_name,"has-error")){
                            that.addClass(div_name,"has-error");
                        }
                    }
                }else{
                    flag = 1;
                    if(div_name_input && that.hasClass(div_name_input,"hide")){
                        that.removeClass(div_name_input,"hide");
                    }

                    if(div_name && !that.hasClass(div_name,"has-error")){
                        that.addClass(div_name,"has-error");
                    }
                }
                
                if(( p_ans["usr_email"] && p_ans["usr_email"].length >= 2 )){
                    if(div_email && that.hasClass(div_email,"has-error")){
                        that.removeClass(div_email,"has-error");
                    }

                    if(email_validitor_regex.test(p_ans["usr_email"])){
                        if(div_email_input && !that.hasClass(div_email_input,"hide")){
                            that.addClass(div_email_input,"hide");
                        }

                        if(div_email && that.hasClass(div_email,"has-error")){
                            that.removeClass(div_email,"has-error");
                        }
                    }else{
                        flag = 1;
                        if(div_email_input && that.hasClass(div_email_input,"hide")){
                            that.removeClass(div_email_input,"hide");
                        }

                        if(div_email && !that.hasClass(div_email,"has-error")){
                            that.addClass(div_email,"has-error");
                        }
                    }
                }else{
                    flag = 1;
                    if(div_email_input && that.hasClass(div_email_input,"hide")){
                        that.removeClass(div_email_input,"hide");
                    }

                    if(div_email && !that.hasClass(div_email,"has-error")){
                        that.addClass(div_email,"has-error");
                    }
                }

                if(( p_ans["usr_query"] && p_ans["usr_query"].length >= 2 )){
                    if(div_query && that.hasClass(div_query,"has-error")){
                        that.removeClass(div_query,"has-error");
                    }

                    if(div_query_input && !that.hasClass(div_query_input,"hide")){
                        that.addClass(div_query_input,"hide");
                    }
                }else{
                    flag = 1;
                    if(div_query_input && that.hasClass(div_query_input,"hide")){
                        that.removeClass(div_query_input,"hide");
                    }
                    
                    if(div_query && !that.hasClass(div_query,"has-error")){
                        that.addClass(div_query,"has-error");
                    }
                }
                
                if(flag == 0){
                    return true;
                }
            
            break;
            default : 
                return false
            break;
        }
        return false;
    }

    hasClass(el, className) {
      if (el.classList)
        return el.classList.contains(className)
      else
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
    }

    addClass(el, className) {
      if (el.classList)
        el.classList.add(className)
      else if (!hasClass(el, className)) el.className += " " + className
    }

    removeClass(el, className) {
      if (el.classList)
        el.classList.remove(className)
      else if (hasClass(el, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
        el.className=el.className.replace(reg, ' ')
      }
    }
    
    render() {
        let that = this;
        let p_ans = that.state.personal_answers;
        return (
            <DocumentTitle title={STRINGS.PROJECT_NAME+" - Contact Us"}>
            <div>
                <Nav/>
                <section className="container-fluid questionnaire_container">
                    
                    {/*<div className="page-header">
                                        <h1>{STRINGS.PROJECT_NAME}!</h1>
                                        <h3>Page Contact Us</h3>
                                        </div>*/}
                    <div className="container">
                       <style>{`body{background-color:#ededed;}`}</style>
                        <section id="" 
                            className="questionGroup text-center  margin-bottom-30">
                            <h3 className="margin-bottom-15">Now that you may want to contact us, we need to collect some personal information</h3>
                        </section>
                        
                        <section id="page_1" 
                            className="questionGroup text-center col-md-12  col-sm-12  col-xs-12 margin-bottom-30" style={{display:(""+(that.state.current==0?"block":"none"))}}>
                            <div className="row">
                             <div className="form-group col-sm-12 col-xs-12 ">
                             <div className="form-group col-sm-2 hidden-xs"></div>
                                <div className="form-group col-sm-4 col-xs-12  " id="usr_full_name">
                                    <input placeholder="Full Name" type="text" className="form-control" id="usr_full_name" onChange={that.handleChange} value={p_ans.usr_full_name}></input>
                                    <span id="usr_full_name_input" style={{}} class="help-inline control-label">Name should have letters only !</span>
                                </div>  
                                <div className="form-group col-sm-4 col-xs-12 " id="usr_email">
                                    <input placeholder="Email " type="email" className="form-control" id="usr_email" onChange={that.handleChange} value={p_ans.usr_email}></input>
                                    <span id="usr_email_input" style={{}} class="help-inline control-label">Enter a valid email !</span>
                                </div>
                                  <div className="form-group col-sm-2 hidden-xs"></div>
                                    </div>        
                            </div>
                            <div className="row">
                                <div className="form-group col-sm-12 col-xs-12" id="usr_query">
                                <div className="form-group col-sm-2 hidden-xs"></div>
                                <div className="form-group col-sm-8 col-xs-12">
                                    <textarea placeholder="Query" style={{resize:"none"}} className="form-control" id="usr_query" onChange={that.handleChange} value={p_ans.usr_query}></textarea>
                                    <span id="usr_query_input" class="help-inline control-label">Enter a valid query !</span>
                                    </div>
<div className="form-group col-sm-2 hidden-xs"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-sm-12 col-xs-12">
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