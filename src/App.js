import React, {useEffect, useState} from 'react'


const App = props => { 
  const [state, setState] = useState(props)
  const {name, price } = state

  console.log(state)
  
  useEffect(()=>{
    console.log('This is like is invoked')
  } )

  useEffect(()=>{
    console.log('name')
  },[name] )

  

  const reset = ()=> {
    setState(props)
  }
  
  return (
    <>
    <p>現在の{state.name}は、{state.price}円です。</p>
    <button onClick={() => setState({...state, price: price + 1})}>+1</button>
    <button onClick={() => setState({...state, price: price - 1})}>-1</button>
    <input value={state.name} onChange={e => setState({...state, name: e.target.value})}/>
    <button onClick={reset}>reset</button>
    </>
  )
}

App.defaultProps = {
  name: 'サンプル',
  price: 1000
}

export default App