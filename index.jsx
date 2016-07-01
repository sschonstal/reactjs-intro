
let name = 'Component';
let HelloBox = React.createClass({
  render: function() {
    return (
    <div className='green-box'>
      <div style={{ fontSize: '200%' }}>Hello {name}</div>
    </div>
    );
  }
});

ReactDOM.render(
  <HelloBox />,
  document.getElementById('content')
);