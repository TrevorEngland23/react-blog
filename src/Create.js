import {useState} from "react";
import {useHistory} from 'react-router-dom';

const Create = () => {
    // set initial state of variables
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Trevor England');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    // Submit click function

    const handleSubmit = (e) => {
        // prevent page from refreshing (by default it refreshes)
        e.preventDefault(e);
        const blog = { title, body, author};

            // new state
        setIsLoading(true)
        // call to "database" to post a blog
        fetch('http://localhost:8000/blogs', {
            method: 'POST', 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(() => {
            // if successful...
            console.log('new blog added')
            setIsLoading(false)
            history.push('/');
    
        })
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                type="text" required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}/>

                <label>Blog Body:</label>
                <textarea required
                value={body}
                onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog Author:</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Trevor England">Trevor England</option>
                    <option value="Amber England">Amber England</option>
                </select> 
                {/* Evaluation. if state is false, does not compute, if state is true, it will */}
                {! isLoading && <button>Add Blog</button>}
                { isLoading && <button disabled>Adding Blog...</button>}
            </form>
        </div>
      );
}
 
export default Create;