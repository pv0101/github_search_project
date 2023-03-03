import React from 'react';
import Search from './Search.js';

// "Home" component. Each page in app will have GitHub Search title at the top
const App = (props) => {
  return (
    <div>
      <h1>GitHub Search</h1>
      <Search />
      {/* Call Search component */}
    </div>
  );
}

export default App;
