import {Link} from 'react-router-dom'

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Transition 2 Tech</h1>
            <div className="links">
                {/* a tags are fine to use if you're fine with every link going to a server, but if you want the react router to intercept that request
                and take care of rendering content in the browser, you need to use special tags found in the react-router-dom library */}
                <Link to="/">Home</Link>
                <Link to="/create" style={{color: "white", backgroundColor: "tomato", borderRadius: "8px"}}>Create Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;

