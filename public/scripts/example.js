var welcomeBox = React.createClass({
	render: function(){
		return(
			React.createElement('p', {className: "welcomeBox"},
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore eum perspiciatis libero, unde ipsam. Ullam sequi, magnam provident commodi molestiae id laudantium. Ratione ea veniam sit vero, quam sed."
				)
			)
	}
})

ReactDOM.render(React.createElement(welcomeBox,null),
	document.getElementById('content')
);


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