import React from "react";
import BlogService from './service';
class Detail extends React.Component {
	state = {
		selectedPost:null
	}
	constructor(props__) {
		super(props__);
		this.BlogService_ = new BlogService();
	}
	componentDidMount () {
		var id =  this.props.id;
		  this.setState(() => ({ id:id }))
		  this.getPost()
	}
	getPost() {
		this.BlogService_.getPost().then(posts => {
			  this.setState({selectedPost: posts});
			}
		);
	}
	render() {
		console.log(this.props.data);
		console.log(this.props.show);
		return (
			<div className="col-lg-12 popup" style={{display:(this.props.show=="true"?"block":"none") }}>
			<img src="/img/blog/3.jpg" />
			<h2 className="mt-3">{
			(this.props.data!==null)?this.props.data.name:""
		}</h2>
			{
			(this.props.data!==null)?this.props.data.content:""
			}
			</div>
			
		);
	}
}

export default Detail;
