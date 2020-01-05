var React = require('react')
var FontAwesome = require('react-fontawesome')
 
var MyComponentReact = React.createClass({
  render: function() {
    return (
      <FontAwesome
        className="fas fa-4x fa-react text-primary mb-4"
        name="rocket"
        size="2x"
        spin
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
    )
  },
})

export default MyComponentReact
