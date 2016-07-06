class HelloContent extends React.Component {
  render () {
    return (
      <div>
        <div className='logo-container'>
          <img src={this.props.logo} className='logo'/>
        </div>
        <div className='content-text'>Hello {this.props.name}</div>
      </div>
    );
  }
}

class HelloBox extends React.Component {
  render () {
    return (
      <div className='green-box'>
        <HelloContent name='Corvette' logo="./images/vett.jpg" />
      </div>
    );
  }
}

ReactDOM.render(
  <HelloBox name='Corvette' logo="./images/vett.jpg"/>,
  document.getElementById('content')
);
