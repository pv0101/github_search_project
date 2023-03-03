import React from "react";
// New page with a detail card for the repository that was clicked.
const Detail = (props) => {//element was passed through state from Result.js. Needed to use props.location to access state.
  return (
    <div className="container">
      <div className="detail__data--container">
        <div className="detail__data--wrapper">
          <img
            src={props.location.state.element.owner.avatar_url}
            alt=""
            className="repository__img detail__img detail__data"
          />
          <h2 className="detail__data">
            Name: {props.location.state.element.name}
          </h2>
          <h2 className="detail__data">
            Description: {props.location.state.element.description}
          </h2>
          <h2 className="detail__data secondary">
            Languages: {props.location.state.element.language}
          </h2>
          <h2 className="detail__data secondary">
            {/* Topics is an array if defined so needed to convert to string */}
            Topics: {props.location.state.element.topics.toString()}
          </h2>
          <h2 className="detail__data secondary">
            Created: {props.location.state.element.created_at}
          </h2>
          <h2 className="detail__data secondary">
            Updated: {props.location.state.element.updated_at}
          </h2>
          <h2 className="detail__data secondary detail__url">
            URL:{" "}
            <a className="detail__data secondary detail__link" href={props.location.state.element.html_url}>
              {props.location.state.element.html_url}
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Detail;
