import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link,withRouter } from 'react-router-dom';
import List from './list';
import BlogService from './service';
import Utils from './../Core/utils'
class Blog extends React.Component {
	state={categories: [],selectedItem:null};
	constructor(props) {
		super(props);
		this.BlogService = new BlogService();
		this.Utils = new Utils();
	}
	componentDidMount() {
	  this.getCategories()
	}
	getCategories() {
		this.BlogService.retrieveCategories().then(categories => {
			  this.setState({categories: categories,selectedItem:null});
			}
		);
	}
  render() {
	const categories = this.state.categories;
    if(!categories) return null;
	  const listCategories = categories.map((cat) =>
      <li key={cat.id}>
         <Link to={'/'+cat.url+".html#blog"}>{cat.name}</Link>
      </li>
    );
	if(categories.length>0){
		this.state.selectedItem=categories[0].url;
	}
    return (
      <div className="arlo_tm_section" id="blog">
		<div className="container">
			<div className="arlo_tm_title_holder contact">
				<h3>Blog</h3>
				<span>Read latest posts</span>
			</div>
		</div>
		<div className="arlo_tm_footer_contact_wrapper_all">
			<div className="arlo_tm_contact_wrap_all">
				<div className="container d-flex">
					<div className="col-lg-3">
						<div className="arlo_tm_mini_title_holder contact">
							<h4 className="mb-3">Categories</h4>
						</div>
						<div className="short_info_wrap" >
							
								<ul className="list-unstyled">
									{listCategories}
								</ul>
							
						</div>
					</div>
					<div className="  col-lg-9">
						<div className="arlo_tm_contact_wrap">
							<div className="main_input_wrap" style={{minHeight: "700px"}}>
								<Router exact path={["/:categoryId", "/:categoryId/:postId"]}>
									
										<List categoryId={this.Utils.getUrl(1)} {...this.props} />
									
								</Router>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
    );
  }
}

export default withRouter(Blog);
