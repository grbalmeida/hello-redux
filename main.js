'use strict'

const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT': return state + 1
    case 'DECREMENT': return state - 1
  }

  return state
}

const decrement = () => {
  store.dispatch({ type: 'DECREMENT' })
}

const increment = () => {
  store.dispatch({ type: 'INCREMENT' })
}

const { createStore } = Redux
const store = createStore(counter)

const $counter = document.querySelector('[data-js="counter"]')
const $decrement = document.querySelector('[data-js="decrement"]')
const $increment = document.querySelector('[data-js="increment"]')

$decrement.addEventListener('click', decrement, false)
$increment.addEventListener('click', increment, false)

store.subscribe(() => {
  $counter.textContent = store.getState()
})