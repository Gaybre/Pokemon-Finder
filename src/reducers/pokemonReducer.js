const INITIAL_STATE = {
  currentPokemon: [],
  pokemonsCollection: [],
  loading: false,
  error: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    case 'savePokemon':
      return {
        ...state,
        pokemonsCollection: state.pokemonsCollection.concat(state.currentPokemon),
        loading: false,
        error: null,
      }
    case 'getNextPokemon':
      return {
        ...state,
        currentPokemon: action.payload,
        loading: false,
        error: null,
      }
    default:
      return state
  }
}