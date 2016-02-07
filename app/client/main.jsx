var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var History = ReactRouter.History;
var ReactDOM = require('react-dom');
var Header = require('./views/header.jsx');
var Body = require('./views/body.jsx');
var UserBox = require('./views/userbox.jsx');
var Footer = require('./views/footer.jsx');

var HOST = 'http://www.shigemk2.com';
var Index = React.createClass({
    render: function(){
        return $.ajax({
            url: HOST
        });
    }
});


ReactDOM.render(
    document.getElementById('content')
);
