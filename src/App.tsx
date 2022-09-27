import { useContext, useEffect, useState } from 'react'
import { MessageContext } from './context/MessageReducer'

function App() {

  const { state, dispatch } = useContext(MessageContext); 

  useEffect(() => {
    console.log(state.message);
  }, [])
  return (
    <div className="App">
      <input type="text" id="test" onChange={(e) => dispatch({ type: "SET_MESSAGE", payload: e.target.value })} />
      <button onClick={() => dispatch({type: "RESET_MESSAGE"})}> Reset </button>
      <p> {state.message} </p>
    </div>
  )
}

export default App
