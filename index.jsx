//ReactDOM.render(
//  React.createElement('div', null, "Hello Sam"),
//  document.getElementById('content')
//);

var child =  React.createElement('div', null, 'Hello Sam');
var parent =  React.createElement('div', {className: 'green-box'}, child);


ReactDOM.render(
  parent,
  document.getElementById('content')
);