import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
// component for each individual repository result from API
const Result = ({ element }) => {// Passed element from Results.js which is 1 repository result from API

  //return html for a new row in a table and the table data. set table data using element prop
  return (
    <tr className="result__row">
      <td className="result__row--img">
        <img
          src={element.owner.avatar_url}
          alt=""
          className="repository__img"
        />
      </td>
      <td className="result__row--title">{element.name}</td>
      <td className="result__row--description">
        {element.description ? (
          <p>{element.description}</p>
        ) : (
          null
        )}
      </td>
      <td className="result__row--button--wrapper">
        {/* button links to new url consisting of repository id. Pass element prop so that the new Detail page that opens up will have the repository data */}
        <Link to=
        {{
          pathname: `/${element.id}`,
          state:{element}
        }}>
          <button className="result__row--button">View Details</button>
        </Link>
      </td>
    </tr>
    );
}

export default withRouter(Result);//export withRouter so that Detail page can have element data?
