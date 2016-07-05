
class HelloBox extends React.Component {
  render() {
    return (
      <div className='green-box'>
        <div className='logo-container'>
          <img src={this.props.logo} className='logo'/>
        </div>
        <div style={{ fontSize: '200%' }}>Hello {this.props.name}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloBox name='from prop' logo="./images/vett.jpg"/>,
  document.getElementById('content')
);
