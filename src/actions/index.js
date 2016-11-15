export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export function incrementCounter(increment = 1) {
  return {
    type: INCREMENT_COUNTER,
    increment
  }
}
