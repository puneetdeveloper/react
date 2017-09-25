import React from 'react';
import {STRINGS} from '../_utility/constants';
import {Link} from 'react-router';

class Nav extends React.Component {
    

  componentDidMount(){
  
      
      $(window).scroll(function() {    
         var scroll = $(window).scrollTop();
   
         if (scroll >= 569) {
             $(".navbar").addClass("navbar-fixed-top dark-bar");
         } else {
             $(".navbar").removeClass("navbar-fixed-top dark-bar");
         }
     });
  
   
  }
  componentWillMount(){
     // Menu bar
     $( ".menu" ).click(function() {
      $(this).toggleClass('m c');
      $('.menu span').toggleClass('ion-navicon ion-android-close');
      $('#menu-item').toggleClass( "show-menu hide-menu" );
    });
  
    $( "#menu-item a" ).click(function() {
      $('.menu').toggleClass('c m');
      $('.menu span').toggleClass('ion-navicon ion-android-close');
      $('#menu-item').toggleClass( "show-menu hide-menu" );
    });
  
  }
  
  constructor(props) {
        super(props);
    }
    
    
    
    signOut() {
        
    }

    render() {
        return (        
          <div id="menu-item" className="menu-item hide-menu">
            <div className="container">
                <ul>
                    <a href="index.html"><li>home</li></a>
                    <a href="#about"><li>about</li></a>
                    <a href="#expertise"><li>expertise</li></a>
                    <a href="#workstation"><li>workstation</li></a>
                    <a href="#team"><li>team</li></a>
                    <a href="#contact"><li>contact</li></a>
                    <a href="elements.html"><li>Elements</li></a>
                </ul>
            </div>
            <div className="main">
        <header  className="bg-img header">
            <nav  className="navbar navbar-default navbar-ubutia">
                <div  className="container">
                    <div  className="navigation-bar">
                        <div  className="row">
                            <div  className="col-xs-6">
                                <div  className="logo">
                                    <a href="index.html"><span  className="ubutia-icon"></span></a>
                                </div>
                            </div>
                            <div  className="col-xs-6 text-right">
                                <div  className="menu m">
                                    <a href="#"><span  className="ion-navicon _ion-android-menu"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="intro-box">
                        <div className="intro">
                            <h1>We are ubutia agency</h1>
                            <p>Creative digital agency based in US</p>
                            <a class="btn ubutia-btn" href="#">Explore us</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
        </div>
      
        
        )

    }
}

export default Nav;
