export const getNextPokemon = () => (dispatch) => {
  const API = 'https://pokeapi.co/api/v2/'

  dispatch({
    type: 'getNextPokemon',
    payload: {name: 'pikachu'}
  })
}

export const savePokemon = () => (dispatch) => {
  dispatch({
    type: 'savePokemon',
  })
}