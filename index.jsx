function HelloContent(props)  {
    return (
      <div>
        <div className='logo-container'>
          <img src={props.logo} className='logo'/>
        </div>
        <div style={{ fontSize: '200%' }}>Hello {props.name}</div>
      </div>
    );
}

class HelloBox extends React.Component {
  render () {
    return (
      <div className='green-box'>
        <HelloContent {...this.props}/>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloBox name='from prop' logo="./images/vett.jpg"/>,
  document.getElementById('content')
);
