import { getCars } from 'getCars'

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
  next() {
      this.setState({
      index: this.state.index === cars.length - 1 ? 0 : this.state.index + 1
    })
  }
  render () {
    return (
      <div className='green-box'>
        <HelloContent {...this.props} car={cars[this.state.index]} />
        <button  type="button" onClick={this.next}>Next </button>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloBox name='from prop' cars={getCars()}/>,
  document.getElementById('content')
);
