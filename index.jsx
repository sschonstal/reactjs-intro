
let name = 'ES6 Class';
class HelloBox extends React.Component {
  render() {
    return (
    <div className='green-box'>
      <div style={{ fontSize: '200%' }}>Hello {name}</div>
    </div>
    );
  }
}

ReactDOM.render(
  <HelloBox />,
  document.getElementById('content')
);