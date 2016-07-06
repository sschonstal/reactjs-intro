
function HelloContent(props)  {
    return (
      <div>
        <div className='logo-container'>
          <img src={props.car} className='logo'/>
        </div>
        <div style={{ fontSize: '200%' }}>Hello {props.name}</div>
      </div>
    )
}

class HelloBox extends React.Component {
  constructor() {
    super()
    this.state = {
      index: 0
    }
   this.next = this.next.bind(this)
  }

  componentWillMount () {
    this.setState({
      cars: [ "./images/vett.jpg",
        "./images/camero.jpeg",
        "./images/challanger.jpeg",
        "./images/gt.jpg",
        "./images/viper.jpg",
        "./images/mustang.jpg" ]
    })
  }
  next() {
      this.setState({
      index: this.state.index === this.state.cars.length - 1 ? 0 : this.state.index + 1
    })
  }
  render () {
    return (
      <div className='green-box'>
        <HelloContent {...this.props} car={this.state.cars[this.state.index]} />
        <button  type="button" onClick={this.next}>Next </button>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloBox name='from prop'/>,
  document.getElementById('content')
);
