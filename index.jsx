
let name = 'JSX'
ReactDOM.render(
  <div className='green-box'>
    <div style={{ fontSize: '200%' }}>Hello {name}</div>
  </div>,
  document.getElementById('content')
);