function HelloContent (props) {
  return (
    <div style={{ float: "left" }}>
      <div className='logo-container'>
        <img src={props.car.img} className='logo'/>
      </div>
      <div className="content-text">{props.car.name}</div>
    </div>
  )
}

class HelloBox extends React.Component {
  constructor () {
    super()
    this.state = {
      cars: [ { img: "./images/vett.jpg", name: "Chevrolet Corvett" },
        { img: "./images/camero.jpeg", name: "Chevrolet Camero" },
        { img: "./images/challanger.jpeg", name: "Dodge Challanger" },
        { img: "./images/gt.jpg", name: "Ford GT" },
        { img: "./images/viper.jpg", name: "Dodge viper" },
        { img: "./images/mustang.jpg", name: "Ford Mustang" } ]
    }

    this.remove.bind(this)
  }


  remove (i) {
    this.setState({
      cars: this.state.cars.filter((car, mi) => {
        if (i !== mi) {
          return car
        }
      })
    })
  }

  render () {
    return (
      <div>
        <div className='green-box'>

          {this.state.cars.map((car, i) => (
            <div>

              <HelloContent car={car}/>

              <div className="btn-container">
                <button className="btn"
                        type="button"
                        onClick={(() => {
                                            return () => {
                                              this.remove(i);
                                          }
                                          })(i)}
                  >Remove
                </button>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloBox />,
  document.getElementById('content')
);
