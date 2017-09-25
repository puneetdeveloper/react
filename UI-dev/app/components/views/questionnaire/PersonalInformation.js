import React from 'react';
import Nav from '../../nav/nav';
import Footer from '../../footer/footer';
import DocumentTitle from 'react-document-title';
import {STRINGS,REGEX} from '../../_utility/constants';
import {Link} from 'react-router';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Phone, {phoneNumberFormat, isValidPhoneNumber} from 'react-phone-number-input';

import {connect} from 'react-redux';


@connect((store) => {

    return {
        
    };
    
})


class PersonalInformation extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.goToNext = this.goToNext.bind(this);
        this.goToBack = this.goToBack.bind(this);
        
        this.handleChange = this.handleChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        
        var state = {
            answers : {},
            personal_answers : {
                usr_first_name : "",
                usr_last_name : "",
                usr_nick_name : "",
                usr_address_1 : "",
                usr_address_2 : "",
                usr_city : "",
                usr_state : "",
                usr_zip : "",
                usr_license_state : "",
                usr_license_id : "",
                usr_license_exp : "",
                usr_usr_phone: "",
                usr_email : "",
                usr_birthday : "",
                usr_password : "",
                usr_password_confirm : "",
            },
            current : 0 ,
        };
        this.state = state;
    }
    
    setDataInState() { //q-002
        var that = this;      
        var state = that.state;
        that.setState(state);
    }
    
    componentDidMount(){
        let that = this;
        this.setDataInState();
        let ans;
        let p_ans;
	    try {
            const serializedState1 = localStorage.getItem('answers');
            if (serializedState1 === null) {
              ans = undefined;
            }
            ans = JSON.parse(serializedState1);
          } catch (err) {
            ans = undefined;
          }	    
        try {
            const serializedState2 = localStorage.getItem('personal_answers');
            if (serializedState2 === null) {
              p_ans = undefined;
            }
            p_ans = JSON.parse(serializedState2);
          } catch (err) {
            p_ans = undefined;
          }
        if (ans!=undefined){
            that.setState({
                answers : ans
            },function(){
                //console.log(that.state.answers)
            })
        }
        if (p_ans!=undefined){
            that.setState({
                personal_answers : p_ans
            },function(){
                //console.log(that.state.answers)
            })
        }
    }
    
    componentDidUpdate(){
       let that = this; 
       let p_ans = that.state.personal_answers;
       //console.log(ans)
       try {
            var serializedState = JSON.stringify(p_ans);
            localStorage.setItem('personal_answers', serializedState);
          } catch (err) {
            // Ignore write errors.
          }
    }

    goToBack(e){
        let that = this;
        let step = that.state.current;
        let ans = that.state.answers;
        var obj = e.target;
        if(step>=1){
            if ( ( (step-1) == 2 ) &&  (!Array.isArray(ans["q-002"]) )){
                that.setState({
                    current : 1,
                })
            }else{
                that.setState({
                    current : step-=1,
                })
            }
        }
        window.scrollTo(0, 0);
    }
    
    goToNext(e){
        let that = this;
        var obj = e.target;
        let ans = that.state.answers;
        let step = that.state.current;
        if( step<=2 && that.checkFlow() ){
            if ( ( (step+1) == 2 ) && (!Array.isArray(ans["q-002"]) )){ 
                that.setState({
                    current : 3,
                })
            }else{
                that.setState({
                    current : step+=1,
                })
            } 
        }
        window.scrollTo(0, 0);
    }
    
    handleChange(e){
        let that = this;
        var obj = e.target;
        var id = $(obj).attr("id");
        var value = $(obj).val();
        //value = value.replace(/[^A-Z0-9\-\'\/\ ]+/i, '');
        var personal_answers = that.state.personal_answers;
        personal_answers[id]=value;
        that.setState({
            personal_answers : personal_answers,
        },function(){
            //console.log(that.state.personal_answers);
        });
    }
    
    validateEmail(email) {
        var re = REGEX.EMAIL;
        return re.test(email);
    }

    validateZipCode(zip) {
        var re = REGEX.ZIP;
        return re.test(zip);
    }

    validatePassword(password) {
        var re = REGEX.PASSWORD;
        return re.test(password);
    }    
    
    validateExpiration(date) {
        var re = REGEX.EXPDATE;
        return re.test(date);
    }    
    
    validateDate(date) {
        let isValid = ( moment(date, "MM/DD/YYYY", true).isValid() || moment(date, "MM/DD/YY", true).isValid() );
        return isValid;
    }
    
    
    handlePhoneChange(val) {
        var state = this.state;
        state.personal_answers.usr_phone = val;
        this.setState(state);
    }
    
    checkFlow(){
        let that = this;
        let p_ans = that.state.personal_answers;
        let current = that.state.current;
        switch(current){
            case 0 :
                if (
                     ( p_ans["usr_first_name"] && p_ans["usr_first_name"].length >= 2 ) &&
                     ( !REGEX.ALPHANUMERIC.test(p_ans["usr_first_name"]) ) &&
                     ( p_ans["usr_last_name"] && p_ans["usr_last_name"].length >= 2 ) &&
                     ( !REGEX.ALPHANUMERIC.test(p_ans["usr_last_name"]) ) 
                ){
                    return true;
                }
            break;
            case 1 :
                if (
                     ( p_ans["usr_address_1"] && p_ans["usr_address_1"].length >= 2 ) &&
                     ( p_ans["usr_city"] && p_ans["usr_city"].length >= 2 ) &&
                     ( !REGEX.ALPHANUMERIC.test(p_ans["usr_city"]) ) &&
                     ( p_ans["usr_zip"] && p_ans["usr_zip"].length >= 2 ) &&
                     ( that.validateZipCode(p_ans["usr_zip"]) ) &&
                     ( p_ans["usr_state"] && p_ans["usr_state"] != "-1" ) 
                ){
                    return true;
                }
            break;
            case 2 :
                if (
                     ( p_ans["usr_license_state"] && p_ans["usr_license_state"] != "-1" ) &&
                     ( p_ans["usr_license_id"] && p_ans["usr_license_id"].length >= 2 ) &&
                     ( p_ans["usr_license_exp"] && p_ans["usr_license_exp"].length >= 2 ) &&
                     ( that.validateExpiration(p_ans["usr_license_exp"]) )
                ){
                    return true;
                }
            break;
            case 3 :
                if (
                     ( p_ans["usr_phone"] && p_ans["usr_phone"].length >= 10 ) &&
                     ( p_ans["usr_email"] && p_ans["usr_email"].length >= 2 ) &&
                     ( that.validateEmail(p_ans["usr_email"]) ) &&
                     (( p_ans["usr_birthday"] && p_ans["usr_birthday"].length >= 2 ) && that.validateDate(p_ans["usr_birthday"]) ) &&
                     (( !p_ans["usr_password"] && !p_ans["usr_password_confirm"] ) || ( ( p_ans["usr_password"] == p_ans["usr_password_confirm"] ) && ( that.validatePassword(p_ans["usr_password"]) ) ))
                     
                ){
                    return true;
                }
            break;
            default : 
                return false
            break;
        }
        return false;
    }
    
    generateNextButton(){
        let that = this;
             return(
             <div className="col-xs-12 question_nav text-center">
                {that.state.current >0 &&
                 <button id="" type="button" className={"btn gig_button background backgroundHover color_2 hidden-lg hidden-md hidden-sm"} onClick={that.goToBack}>PREVIOUS</button>
                }
                {that.state.current <3 &&
                 <button id="" type="button" className={"btn gig_button background backgroundHover "+(that.checkFlow()==true?"color_1":"color_2 disabledButton")} onClick={that.goToNext}>NEXT</button>
                }
                {(that.state.current == 3 && that.checkFlow()==false) &&
                 <button id="" type="button" className={"btn gig_button background backgroundHover color_2 disabledButton"}>SUBMIT</button>
                }
                {(that.state.current == 3 && that.checkFlow()==true) &&
                 <button id="" type="button" className={"btn gig_button background backgroundHover color_1"} data-toggle="modal" data-target="#confirmModal">SUBMIT</button>
                }
                {/*<div>
                    <Link className="skip_link" to="/Match">skip this step... <i class="fa fa-refresh fa-fw"></i></Link>
                </div>*/}
            </div>
        );
    }

    render() {
        let that = this;
        let p_ans = that.state.personal_answers;
        let ans = that.state.answers;
        return (
            <DocumentTitle title="GIG Personal Information">
                <section className="questionnaire_container personal_questionnaire container-fluid">
                   <style>{`body{background-color:#ededed;}`}</style>
                   <div className="container">
                        {that.state.current >0 &&
                            <img className="prev_arrow hidden-xs" onClick={that.goToBack} src="public/img/icons/left_arrow.png"></img>
                        }
                        
                        <section id="page_1" 
                            className="questionGroup text-center col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 margin-bottom-30" style={{display:(""+(that.state.current==0?"block":"none"))}}>
                            <div className="questionGroup text-center margin-bottom-30">
                                <h3 className="margin-bottom-15">You’re almost finished! Before we can securely transfer your information over to the companies you selected, we just need to get your basic info.</h3>
                            </div>
                            <div className="row">
                                <div className="form-group col-sm-4">
                                    <input placeholder="Legal First Name" type="text" className="form-control" id="usr_first_name" onChange={that.handleChange} value={p_ans.usr_first_name}></input>
                                </div>
                                <div className="form-group col-sm-4">
                                    <input placeholder="Legal Last Name " type="text" className="form-control" id="usr_last_name" onChange={that.handleChange} value={p_ans.usr_last_name}></input>
                                </div>
                                <div className="form-group col-sm-4">
                                    <input placeholder="Nickname (optional)" type="text" className="form-control" id="usr_nick_name" onChange={that.handleChange} value={p_ans.usr_nick_name}></input>
                                </div>
                                
                            </div>
                            {that.generateNextButton()}
                        </section>      
                                         
                        <section id="page_2" 
                            className="questionGroup text-center col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 margin-bottom-30" style={{display:(""+(that.state.current==1?"block":"none"))}}>
                            <div className="questionGroup text-center margin-bottom-30">
                                <h3 className="margin-bottom-15">What’s Your Address?</h3>
                            </div>
                            <div className="row">
                                <div className="form-group col-sm-6">
                                    <input placeholder="Address line 1" type="text" className="form-control" id="usr_address_1" onChange={that.handleChange} value={p_ans.usr_address_1}></input>
                                </div>
                                <div className="form-group col-sm-6">
                                    <input placeholder="Address line 2" type="text" className="form-control" id="usr_address_2" onChange={that.handleChange} value={p_ans.usr_address_2}></input>
                                </div>
                                <div className="form-group col-sm-6">
                                    <input placeholder="City" type="text" className="form-control" id="usr_city" onChange={that.handleChange} value={p_ans.usr_city}></input>
                                </div>
                                <div className="form-group col-sm-6">
                                    <div className="row">
                                        <div className="form-group col-sm-6">
                                            <select placeholder="State" className="form-control" id="usr_state" onChange={that.handleChange} defaultValue={p_ans.usr_state}>
                                                <option value="-1">State</option>
                                                <option value="1">Massachusetts</option>
                                                <option value="2">New York</option>
                                                <option value="3">California</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-sm-6">
                                            <input placeholder="Zip Code" className="form-control" id="usr_zip" onChange={that.handleChange} value={p_ans.usr_zip} maxLength="10"></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {that.generateNextButton()}
                        </section>    
                                           
                        { ( ans["q-002"] && ans["q-002"]!="-1" ) &&
                           <section id="page_3" 
                            className="questionGroup text-center col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 margin-bottom-30" style={{display:(""+(that.state.current==2?"block":"none"))}}>
                            <div className="questionGroup text-center margin-bottom-30">
                                <h3 className="margin-bottom-15">And Driver’s License Information?</h3>
                            </div>
                            <div className="row">
                                 <div className="form-group col-sm-4">
                                    <input placeholder="Driver’s License #" type="text" className="form-control" id="usr_license_id" onChange={that.handleChange} value={p_ans.usr_license_id} maxLength="22"></input>
                                 </div>
                                 <div className="form-group col-sm-4">
                                    <select placeholder="Driver’s License State" className="form-control" id="usr_license_state" onChange={that.handleChange} defaultValue={p_ans.usr_license_state}>
                                        <option value="-1">Driver’s License State</option>
                                        <option value="1">Massachusetts</option>
                                        <option value="2">New York</option>
                                        <option value="3">California</option>
                                    </select>
                                </div>
                                 <div className="form-group col-sm-4">
                                    <input placeholder="Expiration MM/YY" type="text" className="form-control" id="usr_license_exp" onChange={that.handleChange} value={p_ans.usr_license_exp} maxLength="7"></input>
                                </div>
                            </div>
                            {that.generateNextButton()}
                        </section>}     
                                          
                        <section id="page_4" 
                            className="questionGroup text-center col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 margin-bottom-30" style={{display:(""+(that.state.current==3?"block":"none"))}}>
                            <div className="questionGroup text-center margin-bottom-30">
                                <h3 className="margin-bottom-15">And, finally, what’s the best way for these companies to contact you?</h3>
                            </div>
                            <div className="row">
                                <div className="form-group col-sm-6">
                                    <input placeholder="Email address" type="text" className="form-control" id="usr_email" onChange={that.handleChange} value={p_ans.usr_email}></input>
                                </div>
                               <div className="form-group col-sm-3">
                                    <Phone
                                        id="usr_phone"
                                        placeholder="Phone"
                                        format={phoneNumberFormat.US}
                                        value={this.state.personal_answers.usr_phone}
                                        onChange={that.handleChange}
                                        onChange={(val) => this.handlePhoneChange(val)}
                                        className="form-control" />
                                </div>
                                <div className="form-group col-sm-3">
                                     <input placeholder="Birthday" type="text" className="form-control" id="usr_birthday" onChange={that.handleChange} value={p_ans.usr_birthday}></input>
                                </div>
                                <div className="form-group col-sm-6">
                                    <input placeholder="Create Password (optional)" type="password" className="form-control" id="usr_password" onChange={that.handleChange} value={p_ans.usr_password}></input>
                                </div>
                                <div className="form-group col-sm-6">
                                    <input placeholder="Confirm Password" type="password" className="form-control" id="usr_password_confirm" onChange={that.handleChange} value={p_ans.usr_password_confirm}></input>
                                </div>
                                <p className="col-sm-12 text-left">*Creating a password will enable us to store all of the information you’ve provided for next time!</p>
                            </div>
                            {that.generateNextButton()}
                        </section>

                        <div class="modal fade" id="confirmModal" role="dialog" aria-labelledby="confirmModalLabel">
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title" id="confirmModalLabel">Thank you!</h4>
                              </div>
                              <div class="modal-body">
                                 We’ve gotten everything we needed. By clicking on GIG UP below, you authorize us to securely transfer the information you provided to us with each of the companies you chose.
                              </div>
                              <div class="modal-footer">
                                <Link className={"btn gig_button background backgroundHover color_1"} onClick={()=>{window.location.href = "/#/Match"}} data-dismiss="modal">Disagree</Link>
                                <button type="button" class="btn gig_button background backgroundHover color_1" data-dismiss="modal" onClick={()=>{window.location.href = "/#/Home"}}>GIG UP</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        

                        
                   </div>
                 </section>
            </DocumentTitle>
        )
    }
    
}

export default PersonalInformation;