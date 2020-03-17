import React from "react";
import BlogService from './service';
import { BrowserRouter as Router, Switch, Route, Link,withRouter } from 'react-router-dom';
import Detail from './detail';
import Utils from './../Core/utils'
class List extends React.Component {
	state = {
		post: null,
		posts:null,
		categoryId:null,postId:null
	}
	constructor(props) {
		super(props);
		this.BlogService = new BlogService();
		this.Utils = new Utils();
		
	}
	componentDidMount () {
		  this.getPosts()
	}
	getPosts() {
		this.BlogService.retrievePosts().then(posts__ => {
			this.state.categoryId=this.Utils.getUrl(1)
			this.state.postId=this.Utils.getUrl(2)
			const post = posts__.find(({ url }) => url ==this.state.postId);
			this.setState({categoryId:this.state.categoryId,postId:this.state.postId,posts:posts__,post:post})
		});
	}
	render() {
		const posts=this.state.posts;
		if(!posts){
			return null;
		}
		const listPosts = posts.map((post) =>
		<div key={post.id} className="col-xs-12 col-sm-6 col-md-6 mb-5">
			<div className="blog-item-grid" >
				<div className="post-image">
					<Link  to={'/'+this.props.categoryId+'/'+post.url+".html#blog"}><img src="/img/blog.jpg" alt="Blog Image"/><i className="fa fa-plus"></i></Link>
					<div className="post-date">
						<span className="date">30</span>
						<span className="month">Sep</span>
					</div>
				</div>
				<div className="post-content ">
					<div className="post-meta-wrapper">
						<span className="post-author"><i className="fa fa-user"></i> John Doe</span>
						<span className="post-categories"><i className="fa fa-tag"></i> Nature, Object</span>
					</div>
					<h3 className="post-title"><Link  to={'/'+this.props.categoryId+'/'+post.url+".html#blog"} >{post.name}</Link></h3>
					<p>{post.content}</p>
					<Link  to={'/'+this.props.categoryId+'/'+post.url+".html#blog"} className="default-btn"> View More </Link>
				</div>
			</div>
		</div>
		);
		return (
			<div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="section-intro">
                                <h2 className="primary-title title-bar">Our Blog </h2>
                                <p>Enthusiastically procrastinate frictionless e-commerce before holistic infrastructures. Authoritatively predominate scalable benefits whereas functional e-tailers. Holisticly embrace bleeding-edge solutions rather than end-to-end expertise. Dynamically.{this.props.categoryId}
			
			</p>
                            </div>
                        </div>
                    </div>
					<div className="row">
						<div className="row">
							<Detail data={this.state}/>
							{listPosts}
						</div>
                    </div>
                </div>
                    
		);
	}
}

export default withRouter(List);
