const API = 'https://pokeapi.co/api/v2/pokemon/'

export const getNextPokemon = (id) => async (dispatch) => {
  dispatch({
    type: 'LOADING'
  })

  try {
    const response = await fetch(`${API}${id}`)
    const res = await response.json()
    dispatch({
      type: 'getNextPokemon',
      payload: res,
    })
  } catch(error) {
    dispatch({
      type: 'ERROR',
      payload: error.message,
    })
  }
}

export const savePokemon = () => (dispatch) => {
  dispatch({
    type: 'savePokemon',
  })
}

export const turnNotification = (newState) => (dispatch) => {
  dispatch({
    type: 'turnNotification',
    payload: newState,
  })
}