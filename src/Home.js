import BlogList from './BlogList';
import useFetch from './useFetch'
// this statement is for the functionality of the module, everything underneath is functionality, and everything under the return statement that looks like
// HTML is the JSX for what the user sees on the screen.
const Home = () => {
    const { data, isLoading, error} = useFetch('http://localhost:8000/blogs')
    return (
        <div className="home">
            {/* If there was an error, it will display on the screen with the error messsage. If not, no error will ever show to the screen and the user will never know
            that this exists */}
            {error && <div>{error}</div>}
           {/* The && evaluates whatever is to the left of it first. if it's false, it doesn't evaluate what's on the right
           If it's true, then it does. So initially, it is false since it takes time for the data to come through, then once the data comes through,
           it is now true, and will render to the screen. Additionally, the blogs={blogs} is called a prop so you can use data across multiple directories without the need of having
           to store that data in multiple directories. In the BlogList directory, the prop is inserted as an argument to the main function, where I am then able to
           make variables that reference the blogs, title, and handleDelete functions within that directory without any errors occuring*/}
            {isLoading && <div>Loading...</div>}
           {data && <div className="contain"><BlogList blogs={data} title="Welcome To Our Blog!" /> </div>}
        </div>
      );
}
 
export default Home;