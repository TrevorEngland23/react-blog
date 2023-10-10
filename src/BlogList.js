import { Link } from "react-router-dom/cjs/react-router-dom.min";

// Pass in the props keyword 
const BlogList = (props) => {
    // optionally you could use const BlogList = ({blogs, title}) => {} and not define the variables.
    // props.blogs references the blogs version of props, coming from the home page. Now that we have this reference stored in a variable...
    const blogs = props.blogs;
    const title = props.title
    
    return (  
       <div className="blog-list">
        <h2 className="blog-header">{title}</h2>
        {/* We can iterate through the blogs, looking at each blog */}
        {blogs.map((blog) => (
            // And display the title and author of each specific blog, by referencing the unique value of the key "id"
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by: {blog.author}</p>
                    </Link>
                  
                    {/* create a button that allows users to delete blogs */}
                </div>
               ))}
       </div> 
    );
}
 
export default BlogList;
