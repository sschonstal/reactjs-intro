
class HelloBox extends React.Component {
  render() {
    return (
      <div className='green-box'>
        <div style={{ fontSize: '200%' }}>Hello {this.props.name}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloBox name='from prop' />,
  document.getElementById('content')
);
