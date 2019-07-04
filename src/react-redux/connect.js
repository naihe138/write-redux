import React, { Component } from 'react'
import { Consumer } from './context'
import redux from '../redux'

const bindActionCreator = redux.bindActionCreator

export default function (mapStateToProps, mapDispatchToProps) {
  return function (Com) {
    class Proxy extends Component {
      constructor (props) {
        super(props)
        this.state = mapStateToProps(props.store.getState())
      }
      componentDidMount () {
        this.unsubcribt = this.props.store.subcribt(() => {
          this.setState(mapStateToProps(this.props.store.getState()))
        })
      }
      componentWillUnmount () {
        this.unsubcribt()
      }
      render () {
        let actions = {}
        if (typeof mapDispatchToProps === 'object') {
          actions = bindActionCreator(mapDispatchToProps, this.props.store.dispatch)
        } else {
          actions = mapDispatchToProps(this.props.store.dispatch)
        }
        return (
          <Com {...this.state} {...actions}></Com> 
        )
      }
    }
    return () => (
      <Consumer>
        { 
          value => <Proxy store={value}/> 
        }
      </Consumer>
    )
  }
}
