import { useParams } from "react-router-dom";
import useFetch from "./useFetch"
import {useHistory} from 'react-router-dom'

 const BlogDetails = () => {
    const {id} = useParams();
    // what we want back
    const {data, error, isLoading} = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory()

    const handleClick = () => {
        // url show the id of specific blog we click on
        fetch("http://localhost:8000/blogs/" + data.id, {
            // delete request
            method: "Delete",
        })
        // once deleted return to homepage
        .then(() => {
            history.push('/')
        })
    }
    //jsx
    return ( 
        <div className="blog-details">
            {isLoading && <div className="loading">Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <p>Written by: {data.author}</p>
                    <div className="body">{data.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;