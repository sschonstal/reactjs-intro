var children =  [];

for (var i = 0; i < 10; i++) {
  children.push(React.createElement('div', null, 'Hello React JS ' + i))
}

var parent =  React.createElement('div', {className: 'green-box'}, children);

ReactDOM.render(
  parent,
  document.getElementById('content')
);