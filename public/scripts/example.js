
var CommentBox = React.createClass({displayName: 'CommentBox',
  render: function() {
   return (
    React.createElement('div', {className: "commentBox"},
      "Hello I am new to React"
      )
   )
  }
})

ReactDOM.render(React.createElement(CommentBox, null),
  document.getElementById('welcome')
);