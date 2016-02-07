var React = require('react');

var Footer = React.createClass({
  render: function(){
    return (
      <footer style={{textAlign: "center"}}>
        <hr/>
        <span>This is footer</span>
      </footer>
    );
  }
});

module.exports = Footer;
