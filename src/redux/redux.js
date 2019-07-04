
export default function createStore(reducer, preloadState = {}, enhancer) {
  // 库的enhancer. 你可能需要指定这个去增强仓库的能力以使用第三方的能力比如中间件  
  // 时间旅行，持久化等等。redux自带的唯一中间件是applyMiddleware
  if (enhancer) {
    return enhancer(createStore)(reducer, preloadState)
  }

  let state = preloadState
  let listeners = []

  function getState () {
    return state
  }
  // 订阅函数
  function subcribt (fn) {
    listeners.push(fn)
    return () => {
      let index = listeners.findIndex(fn)
      listeners.splice(index, 1)
    }
  }
  // 
  function dispatch (actions) {
    state = reducer(state, actions)
    listeners.forEach(fn => fn())
  }
  //派发了一个动作获取初始值，其实在redux内部是派发一个INIT: '@@redux/INIT'动作
  dispatch({ type: '@@redux/INIT' })
  return {
    getState,
    subcribt,
    dispatch
  }
}
