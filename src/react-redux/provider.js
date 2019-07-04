import React, { Component } from 'react'
import { Provider } from './context'
class P extends Component {
  render () {
    return (
      <Provider value={this.props.store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default P