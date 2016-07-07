let HelloContent = (props) => (
    <div style={{float: 'left'}}>
      <div className='logo-container'>
        <img src={props.car.img} className='logo'/>
      </div>
      <div className='content-text'>{props.car.name}</div>
    </div>
  )

class HelloBox extends React.Component {
  constructor () {
    super()
    this.state = {
      index: 0,
      cars: [ {img: "./images/vett.jpg", name: "Chevrolet Corvett" },
        {img: "./images/camero.jpeg", name: "Chevrolet Camero" },
        {img: "./images/challanger.jpeg", name: "Dodge Challanger" },
        {img: "./images/gt.jpg", name: "Ford GT" },
        {img: "./images/viper.jpg", name: "Dodge viper" },
        {img: "./images/mustang.jpg", name: "Ford Mustang" } ]
    }
    this.next = this.next.bind(this)
  }

  next () {
    this.setState({
      index: this.state.index === this.state.cars.length - 1 ? 0 : this.state.index + 1
    })
  }

  render () {
    return (
      <div className='green-box'>
        <HelloContent {...this.props} car={this.state.cars[this.state.index]}/>
        <div className='btn-container'>
          <button className='btn' type="button" onClick={this.next}>Next</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloBox/>,
  document.getElementById('content')
);
