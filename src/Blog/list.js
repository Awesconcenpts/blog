import React from "react";
import BlogService from './service';
import Detail from './detail';
class List extends React.Component {
	state = {
		post: null,
		posts:null,
		show:"false"
	}
	constructor(props) {
		super(props);
		this.BlogService = new BlogService();
	}
	componentDidMount () {
		  this.getPosts()
	}
	componentDidUpdate(){
		//this.setState({posts: this.state.posts,post:this.state.post,show:"false"});
		this.state.show="false";
	}
	onDetailView(post){
		this.setState({post: post,show:"true",posts:this.state.posts});
	}
	getPosts() {
		this.BlogService.retrievePosts().then(posts__ => {
			  this.setState({posts: posts__,post:null,show:"false"});
			}
		);
	}
	render() {

		const posts = this.state.posts;
		if(!posts){
			return null;
		} 
		const listPosts = posts.map((post) =>
		<div key={post.id} className="col-xs-12 col-sm-6 col-md-6 mb-5">
			<div className="blog-item-grid" onClick={() => this.onDetailView(post)}>
				<div className="post-image">
					<a href="javascript:void(0)"><img src="/img/blog.jpg" alt="Blog Image"/><i className="fa fa-plus"></i></a>
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
					<h3 className="post-title"><a href="javascript:void(0)">{post.name}</a></h3>
					<p>{post.content}</p>
					<a onClick={() => this.onDetailView(post)} className="default-btn"> View More </a>
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
                                <p>Enthusiastically procrastinate frictionless e-commerce before holistic infrastructures. Authoritatively predominate scalable benefits whereas functional e-tailers. Holisticly embrace bleeding-edge solutions rather than end-to-end expertise. Dynamically.{ this.props.id }</p>
                            </div>
                        </div>
                    </div>
					<div className="row">
						<div className="row">
							<Detail show={this.state.show} data={this.state.post}/>
							{listPosts}
						</div>
                    </div>
                </div>
                    
		);
	}
}

export default List;
