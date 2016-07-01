
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
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    setInterval(() => {this.setState({counter: this.state.counter + 1 })}, 500)
  }
  render() {
    return (
        <div>
          <textarea rows="1" cols="20"/>
          <div style={{ fontSize: '200%' }}>counter {this.state.counter}</div>
        </div>
    );
  }
}

ReactDOM.render(
  <HelloBox/>,
  document.getElementById('content')
);
