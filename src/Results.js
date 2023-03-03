import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm.js";
import axios from "axios";
import Result from "./ui/Result.js";
import Pagination from "./ui/Pagination.js";

const Results = (props) => {
  //props contains query from Search.js. I think this is because Search.js was exported withRouter? Or props is a global variable?
  // currentPage for pagination. Default is 1 for first page and updates when user clicks to other pages of results
  const [currentPage, setCurrentPage] = useState(1);
  // data from API
  const [data, setData] = useState([]);
  const [dataItems, setDataItems] = useState([]); //need this to pass data.items from API to Result.js. data.items contains the repository results

  //fetch from API code was provided but did not work well with my code ideas. Used async/await and axios.get
  async function fetchData() {
    // add ?page= + currentPage to get other pages of results for pagination
    const { data } = await axios.get(
      "https://api.github.com/search/repositories?q=" +
        props.match.params.query +
        "?page=" +
        currentPage
    );

    //set the useState variables using results from API fetch
    setData(data);
    setDataItems(data.items);
  }

  //useEffect to execute code immediately on mount and when dependency array variables update. props was already included, so when the search query changes? I added currentPage so that when the user clicks to another page and updates currentPage, new API data will be fetched.
  useEffect(() => {
    // fetch("https://api.github.com/search/repositories?q=" + props.match.params.query)
    //   .then(results => results.json())
    //   .then(data => setData(data));
    fetchData();
  }, [props, currentPage]);

  // function already given. Shows number of results if it exists, otherwise show null (for waiting for data from API to finish fetching?). props also contains total number of data objects from API. This total number changes when page number changes, because new API data is fetched every time page number changes (in other words props is changing?)
  function SearchResults(props) {
    if (props.totalCount !== undefined) {
      return <h2>Search found {data.total_count} results</h2>;
    }
    return null;
  }

  // function for setting the currentPage
  function setPage(page) {
    setCurrentPage(page);
  }

  return (
    <div>
      {/* call components/functions and pass necessary props */}
      <SearchForm />
      <SearchResults totalCount={data.total_count} />
      {/* I used a table to show search results. This is the div and table tag and I put the header row here */}
      <div className="table__container">
        <table className="resultsTable">
          <tbody>
            <tr>
              <th></th>
              <th>Repository Title</th>
              <th className="table__header--description">
                Repository Description
              </th>
            </tr>
            {/* map over each element in dataItems (array of objects with each object being a repository result from API). Pass each element to Result component and return whatever Result gives */}
            {dataItems.map((element) => {
              return <Result element={element} key={element.id} />;
            })}
          </tbody>
        </table>
      </div>
      {/* Pagination component, pass the currentPage variable and setPage function*/}
      <Pagination currentPage={currentPage} setPage={setPage} />
    </div>
  );
};

export default Results;
