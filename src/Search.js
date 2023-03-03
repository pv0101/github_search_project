import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SearchForm from './SearchForm.js';
import Results from './Results.js';
import Detail from './pages/Detail.js';
// Search component has multiple Routes. I put in Detail Route with the id of the specific repository to be viewed in detail as the url.
const Search = () => (
  <Switch>
    <Route exact path='/' component={SearchForm}/>
    <Route path='/search/:query' component={Results}/>
    <Route path='/:id' component={Detail}/>
  </Switch>
);

export default Search;
