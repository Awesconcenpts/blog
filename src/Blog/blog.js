import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import List from './list';
import BlogService from './service';
class Blog extends React.Component {
	state={categories: [],selectedItem:null};
	constructor(props) {
		super(props);
		this.BlogService = new BlogService();
		//this.onSelect = this.onSelect.bind(this)
		
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
	onSelect(itemLink) {
		
		this.setState({
		  	categories:this.state.categories,
			selectedItem:itemLink
		},function(){
			
			
		});
		localStorage.setItem("selectedItem",itemLink);
		
  	}
	
	componentDidUpdate(){
		
		
	}
	getId(){
		return localStorage.getItem("selectedItem");
	}
  render() {
	const categories = this.state.categories;
    if(!categories) return null;
	  const listCategories = categories.map((cat) =>
      <li onClick={() => this.onSelect(cat.id)}>
         <Link to={'/blog/'+cat.id}>{cat.name}</Link>
      </li>
    );
	
	if(categories.length>0){
		this.state.selectedItem=categories[0].id;
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
							<Router exact path={["/", "/blog", "/blog/:id"]}>
								<ul className="list-unstyled">
									{listCategories}
								</ul>
							</Router>
						</div>
					</div>
					<div className="  col-lg-9">
						<div className="arlo_tm_contact_wrap">
							<div className="main_input_wrap" style={{minHeight: "700px"}}>
								<List id={this.getId()}/>
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

export default Blog;
