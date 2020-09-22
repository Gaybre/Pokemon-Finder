const INITIAL_STATE = {
  currentPokemon: [],
  pokemonsCollection: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'savePokemon':
      return {
        ...state,
        pokemonsCollection: state.pokemonsCollection.concat(state.currentPokemon),
      }
    case 'getNextPokemon':
      return {
        ...state,
        currentPokemon: action.payload,
      }
    default:
      return state
  }
}