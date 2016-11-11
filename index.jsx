let HelloContent = (props) => (
  <div style={{ float: "left" }}>
    <div className='logo-container'>
      <img src={props.logo} className='logo'/>
    </div>
    <div className='content-text'>{props.name}</div>
  </div>
)

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