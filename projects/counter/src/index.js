import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

const render = () =>
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )

render()
// store的的state值发生改变，更新试图
store.subscribe(render)
