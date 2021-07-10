import { createStore } from 'redux'

interface ActionType {
  type: string
}

export default function counter() {
  const initialState = { value: 0 }

  function counterReducer(state = initialState, action: ActionType) {
    switch (action.type) {
      case 'counter/incremented':
        return { value: state.value + 1 }
      case 'counter/decremented':
        return { value: state.value - 1 }
      default:
        return state
    }
  }

  const store = createStore(counterReducer)
  store.subscribe(() => console.log(store.getState()))

  const incrementAction = { type: 'counter/incremented' }
  const decrementAction = { type: 'counter/decremented' }

  const handleIncrement = () => store.dispatch(incrementAction)
  const handleDecrement = () => store.dispatch(decrementAction)

  return (
    <>
      <button onClick={handleIncrement}>递增</button>
      <button onClick={handleDecrement}>递减</button>
    </>
  )
}
