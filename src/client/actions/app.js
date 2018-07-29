import axios from 'axios'
import { NAME_UPDATE } from '../constants/app'

export function nameUpdate(data) {
  return {
    type: NAME_UPDATE,
    result: data,
  }
}

export const getUserName = () => {
  return dispatch => {
    return axios
      .get('/api/username')
      .then(res => {
        dispatch(nameUpdate(res.data.username))
      })
      .catch(() => {
        dispatch(nameUpdate('Ajnabi'))
      })
  }
}
