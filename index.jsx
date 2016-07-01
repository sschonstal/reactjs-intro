
let name = 'Nested Components';
class HelloBox extends React.Component {
  render() {
    return (
    <div className='green-box'>
      <BoxContents/>
    </div>
    );
  }
}

class BoxContents extends React.Component {
  render() {
    return (
        <div style={{ fontSize: '200%' }}>Hello {name}</div>
    );
  }
}

ReactDOM.render(
  <HelloBox/>,
  document.getElementById('content')
);
