import React, { Component } from "react"
import { Provider, connect } from './react-redux'
import store from './store'
import { add, minus } from './store/actions'

class Foo extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render () {
    return (
      <div>
        <h1>{this.props.value.count}</h1>
        <button onClick={() => this.props.add()}>+</button>
        <button onClick={() => this.props.minus()}>-</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({value: state})
const mapDispatchToProps = dispatch => ({
  add: () => dispatch(add()),
  minus: () => dispatch(minus())
})


const Rfood = connect(mapStateToProps, mapDispatchToProps)(Foo)

class APP extends Component {
  render () {
    return (
      <Provider store={store}>
        <Rfood />
      </Provider>
    )
  }
}


export default APP
