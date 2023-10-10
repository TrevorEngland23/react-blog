import {Link} from 'react-router-dom'
import './notFound.css'

const NotFound = () => {
    return (
        <>
        <div className="lost">
              <h2>Are you lost?</h2>
            <p>This page cannot be found</p>
            <Link to="/">Return to Earth</Link>
        </div>
        <div className="not-found">
            <div className="stars"></div>
            <div className="planet">
                <div className="shadow"></div>
            </div>
            <div className="astronaut">
                <div className="tank center"></div>
                <div className="suit center">
                    <div className="helmet center"></div>
                    <div className="buttons center"></div>
                    <div className="hand-l"></div>
                    <div className="hand-r"></div>
                    <div className="leg-l"></div>
                    <div className="leg-r"></div>
                    <div className="pipe"></div>
                </div>
            </div>
           
         
        </div>
        </>
      );
}
 
export default NotFound;