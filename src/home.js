import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './home.css';
import About from "./about";
import Entro from "./entro";
import Blog from "./Blog/blog";
import Contact from "./contact";
class Home extends React.Component {
	componentDidMount() {
		setTimeout(function(){ eval("InitialiazeJS()"); },5000)
    }
	componentDidUpdate(){
		alert("home")
	}
  render() {
	  
    return (
      <div className="arlo_tm_wrapper_all">
	<div id="arlo_tm_popup_blog">
		<div className="container">
			<div className="inner_popup scrollable"></div>
		</div>
		<span className="close"><a href="#"></a></span>
	</div>
	<div className="arlo_tm_preloader">
		<div className="spinner_wrap">
			<div className="spinner"></div>
		</div>
	</div>
	<div className="arlo_tm_mobile_header_wrap">
		<div className="main_wrap">
			<div className="logo">
				<a href="index.html"><img src="img/logo/mobile_logo.png" alt="mobile_logo" /></a>
			</div>
			<div className="arlo_tm_trigger">
				<div className="hamburger hamburger--collapse-r">
					<div className="hamburger-box">
						<div className="hamburger-inner"></div>
					</div>
				</div>
			</div>
		</div>
		<div className="arlo_tm_mobile_menu_wrap">
   			<div className="mob_menu">
				<ul className="anchor_nav">
					<li><a href="/">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#blog">Blog</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div className="arlo_tm_content">
		<div className="arlo_tm_leftpart_wrap">
			<div className="leftpart_inner">
				<div className="logo_wrap">
					<a href="#"><img src="img/logo/desktop-logo.png" alt="desktop-logo" /></a>
				</div>
				<div className="menu_list_wrap">
					<ul className="anchor_nav">
						<li><a href="#home">Home</a></li>
						<li><a href="#about">About</a></li>
						<li><a href="#blog">Blogs</a></li>
						<li><a href="#contact">Contact</a></li>
					</ul>
				</div>
				<div className="leftpart_bottom">
					<div className="social_wrap">
						<ul>
							<li><a href="#"><i className="xcon-facebook"></i></a></li>
							<li><a href="#"><i className="xcon-twitter"></i></a></li>
							<li><a href="#"><i className="xcon-linkedin"></i></a></li>
							<li><a href="#"><i className="xcon-instagram"></i></a></li>
							<li><a href="#"><i className="xcon-behance"></i></a></li>
						</ul>
					</div>
				</div>
				<a className="arlo_tm_resize" href="#"><i className="xcon-angle-left"></i></a>
			</div>
		</div>
		<div className="arlo_tm_rightpart">
			<div className="rightpart_inner">
				<Entro />
				<About />
				<Blog />
				<Contact />
			</div>
		</div>
		
	</div>
  </div>
    );
  }
}

export default Home;
