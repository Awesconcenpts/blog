import React from "react";
import { useHistory,withRouter } from "react-router-dom";
import BlogService from './service';
import Utils from './../Core/utils'
class Detail extends React.Component {
	state={data:null,postId:null,categoryId:null}
	constructor(props) {
		super(props);
		this.Utils = new Utils();
	}
	componentDidMount () {
		this.state.categoryId=this.Utils.getUrl(1)
		this.state.postId=this.Utils.getUrl(2)
	}

	render() {
		this.state.categoryId=this.Utils.getUrl(1)
		this.state.postId=this.Utils.getUrl(2)
		const post=this.props.data.posts.find(({ url }) => url == this.state.postId);
		if(this.state.postId=='undefined' || typeof(post)=='undefined'){
			return ("");
		}else{
		
				return (
					<div className="col-lg-12 popup">
					<img src="/img/blog/3.jpg" />
					<h2 className="mt-3">{post.name}</h2>
					{post.content}
					</div>

				);
		}
	}
}

export default withRouter(Detail);
