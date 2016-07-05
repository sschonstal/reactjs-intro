function HelloContent(props)  {
    return (
      <div>
        <div className='logo-container'>
          <img src={props.logo} className='logo'/>
        </div>
        <div style={{ fontSize: '200%' }}>Hello {props.name} {props.counter}</div>
      </div>
    )
}

class HelloBox extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
   this.next = this.next.bind(this)
  }
  next() {
      this.setState({
      counter: this.state.counter + 1
    })
  }
  render () {
    return (
      <div className='green-box'>
        <HelloContent {...this.props} counter={this.state.counter} />
        <button  type="button" onClick={this.next}>Next </button>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloBox name='from prop' logo="./images/vett.jpg"/>,
  document.getElementById('content')
);
