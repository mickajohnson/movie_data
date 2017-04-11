var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Welcome = require('./MovieSearch');

var Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    hashHistory = ReactRouter.hashHistory


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Welcome} />
  </Router>
)


var App = React.createClass({
  render: function(){
    return routes
  }
})


ReactDOM.render(<App />, document.getElementById('app'));
