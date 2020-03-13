
class BlogService {
  constructor() {
    this.categories = [
      {
		  id:1, 
		  name:"Category 1", 
		  created_at:"01/12/2020", 
		  updated_at:"01/12/2020", 
		  created_by:"Kishan Sharma", 
		  description:"Desc 1"
	  },
      {
		  id:2, 
		  name:"Category 2", 
		  created_at:"01/12/2020", 
		  updated_at:"01/12/2020", 
		  created_by:"Kishan Sharma", 
		  description:"Desc 2"},
      {
		  id:3, 
		  name:"Category 3", 
		  created_at:"01/12/2020", 
		  updated_at:"01/12/2020", 
		  created_by:"Kishan Sharma", 
		  description:"Desc 3"
	  },
    ];
	  this.posts = [
      {
		  id:11, 
		  name:"Test Post Article 1",
		  category_id:1,
		  created_at:"01/12/2020", 
		  updated_at:"01/12/2020", 
		  created_by:"Kishan Sharma", 
		  content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet quidem sapiente repellendus nihil quibusdam!!"
	  },
      {
		  id:12, 
		  category_id:2,
		  name:"Test Post Article 2", 
		  created_at:"01/12/2020", 
		  updated_at:"01/12/2020", 
		  created_by:"Kishan Sharma", 
		  content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet quidem sapiente repellendus nihil quibusdam!!"
	  },
      {
		  id:13, 
		  category_id:3,
		  name:"Test Post Article 3", 
		  created_at:"01/12/2020", 
		  updated_at:"01/12/2020", 
		  created_by:"Kishan Sharma", 
		  content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet quidem sapiente repellendus nihil quibusdam!!"
	  },
		  {
		  id:14, 
		  category_id:3,
		  name:"Test Post Article 4", 
		  created_at:"01/12/2020", 
		  updated_at:"01/12/2020", 
		  created_by:"Kishan Sharma", 
		  content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet quidem sapiente repellendus nihil quibusdam!!"
	  },
    ];
  }
  async retrieveCategories() {
      return Promise.resolve(this.categories);
  }
  async getCategory(itemLink) {
    for(var i = 0; i < this.categories.length; i++) {
      if ( this.categories[i].id === itemLink) {
        return Promise.resolve(this.categories[i]);
      }
    }
    return null;
  }
  async createCategory(item) {
    console.log("ItemService.createItem():");
    console.log(item);
    return Promise.resolve(item);
  }
  async deleteCategory(itemId) {
    console.log("ItemService.deleteItem():");
    console.log("item ID:" + itemId);
  }
  async updateCategory(item) {
    console.log("ItemService.updateItem():");
    console.log(item);
  }
	//-------------------
	async retrievePosts() {
      return Promise.resolve(this.posts);
  }
  async getPost(itemLink) {
    for(var i = 0; i < this.categories.length; i++) {
      if ( this.categories[i].id === itemLink) {
        return Promise.resolve(this.categories[i]);
      }
    }
    return null;
  }
  async createPost(item) {
    console.log("ItemService.createItem():");
    console.log(item);
    return Promise.resolve(item);
  }
  async deletePost(itemId) {
    console.log("ItemService.deleteItem():");
    console.log("item ID:" + itemId);
  }
  async updatePost(item) {
    console.log("ItemService.updateItem():");
    console.log(item);
  }
}
export default BlogService;