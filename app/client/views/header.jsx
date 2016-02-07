var React = require('react');
var ReactRouter = require('react-router');
var History = ReactRouter.History;
var Link = ReactRouter.Link;

var Header = React.createClass({
  mixins: [ History ],
  
  handleClick: function(e){
    this.history.pushState(null, '/');
  },
  render: function(){
    return (
      <header>
        <div style={{position:"absolute", margin: "-15px 0px"}}>
          <h1>This is header</h1>
        </div>
        <div style={{position:"relative", textAlign:"right", paddingTop: "30px"}}>
          <Link to="/portal" style={{paddingRight: "5px"}}>Portal</Link>
          <Link to="/userbox" style={{paddingRight: "5px"}}>Uesr List</Link>
          <button onClick={this.handleClick}>Logout</button>
        </div>
        <hr/>
      </header>
    );
  }
});

module.exports = Header;
