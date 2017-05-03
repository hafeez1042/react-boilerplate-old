import React from 'react';
import { renderToString } from 'react-dom/server';
import { RouterContext, match } from 'react-router';

import template from './template';
import routes from './routes';

// import App from './components/App';



export default function render(req, res) {
  // match the routes to the url
  match({ routes, location: req.url }, (err, redirect, props) => {
    // in here we can make some decisions all at once
    if (err) {
      // there was an error somewhere during route matching
      res.status(500).send(err.message);
    } else if (redirect) {
      // we haven't talked about `onEnter` hooks on routes, but before a
      // route is entered, it can redirect. Here we handle on the server.
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      // `RouterContext` is what the `Router` renders. `Router` keeps these
      // `props` in its state as it listens to `browserHistory`. But on the
      // server our app is stateless, so we need to use `match` to
      // get these props before rendering.
      const appHtml = renderToString(<RouterContext {...props} />);

      // dump the HTML into a template, lots of ways to do this, but none are
      // really influenced by React Router, so we're just using a little
      // function, `renderPage`
      // res.send(renderPage(appHtml))
      res.send(template({
        body: appHtml,
        title: 'FROM THE SERVER',
      }));
    } else {
      // no errors, no redirect, we just didn't match anything
      res.status(404).send('Not Found');
    }
  });
}
