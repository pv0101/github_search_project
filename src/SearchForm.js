import React, {useState} from 'react';
import { withRouter } from 'react-router';

const SearchForm = (props) => {
  // useState for query which is the text input into search bar
  const [query, setQuery] = useState("");
  // normal is regex expression for normal characters.
  const normal = /^[a-zA-Z0-9]+$/

  // setQuery to set the query variable to event.target.value. event onChange for text bar. Every time text is typed this function is called and query is updated 
  const handleInput = (event) => {
    setQuery(event.target.value);
  };

  // This function is for submitting. Event is clicking the submit button.
  const handleSubmit = (event) => {
    event.preventDefault();//cancels event. Prevents submitting a form. Not sure what this does.
    if(normal.test(query)//.test() searches query to see if it contains the normal characters. Not sure what it returns if not normal characters are in query but the code works so it must return false if not all characters in query are in normal.
    ) {
      props.history.push(`/search/${query}`);//history prop keeps track of all session history and provides different methods to manipulate it. push method is used to push a path as a route to the history stack. This url change leads to Results component mounting
    }
    else {
      alert(`No special characters`)//if special characters are found send alert message
    }
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        {/* input tag for search bar */}
          <input type="text" className="form-control" placeholder="Search" onChange={handleInput}/>
          {/* button for submit */}
          <button type="submit" className="btn btn-default">Submit</button>
      </form>
    </div>
  );
}

export default withRouter(SearchForm);//export withRouter to get access to the history object's properties and the closest <Route>'s match. Use this to pass data basically?
