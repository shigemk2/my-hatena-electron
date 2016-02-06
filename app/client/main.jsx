var React = require('react');
var ReactDOM = require('react-dom');

var MyComponent = React.createClass({
    render: function() {
        return <div>test test test</div>;
    }
});

ReactDOM.render(<MyComponent />, document.getElementById("content"));
