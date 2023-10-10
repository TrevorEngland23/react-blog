import {useEffect, useState} from 'react';

const useFetch = (url) => {
       // Set the state of the blogs
       const [data, setData] = useState(null);
       const [isLoading, setIsLoading] = useState(true);
       const [error, setError] = useState(null)
        // basically, When the state of name changes, this side effect is ran
        useEffect(() => {
            
            const abortCont = new AbortController();
            // NOTE: only using setTimeout() to show the "loading..." feature. Since the JSON is small and in the browser, it takes no time to load, but in a real application that gets data
            // from a server, it may take 1-2 seconds to retrieve data and render to the screen, so timeout is set to 1 second.
            // get the data from the url
            setTimeout(() => {
                // Associate abortCont to this url. The goal is if we change pages before the home page loads, the request aborts.
                fetch(url, {signal: abortCont.signal})
                // given a response...
                    .then(res => {
                        // If the ok key is false, throw an error with a custom error message
                        if(!res.ok) {
                            throw Error('could not fetch the data for that resource')
                        }
                        // return the response JSON
                        return res.json();
                    })
                    // Then log the data returned to the console
                    .then(data => {
                        console.log(data)
                        // setBlogs is data, isLoading is false because it's not loading anymore, setError is null because no error was returned
                        setData(data)
                        setIsLoading(false)
                        setError(null)
                    })
                    .catch(err => { 
                        // If the error is an abort error caused from the cleanup function, handle it by logging to the console, otherwise continue on.
                        if (err.name === 'AbortError') {
                            console.log('fetch aborted')
                        } else {
                        // if an error was caught, setError is the error message, and setIsLoading is false because the page is not loading anymore
                        setError(err.message);
                        setIsLoading(false)
                        }
                    })
            }, 1000);
                // abort whatever fetch this is associated with
            return () => abortCont.abort();
                  // Optional return statement. a return statement here is a "cleanup" function, so anytime the state changes, the state destorys itself
        // and the return function is ran as a clean up function, then once the page re-reners the new state, the effect will run again, if specified in the brackets.
        // The [] makes sure that this hook only runs the function after the first initial render. without this, anytime the state changes, this function is called and ran

        // when the url changes, it will rerun the function to get the data of the new url
    }, [url]);

    return {data, isLoading, error}
}

export default useFetch;