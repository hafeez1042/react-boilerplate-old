import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './components/Home/Home';
import App from './components/App/App';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    {/* <Route path="/repos" component={Repos}>
      <Route path="/repos/:userName/:repoName" component={Repo}/>
    </Route> */}
    {/* <Route path="/about" component={About}/> */}
  </Route>
);
