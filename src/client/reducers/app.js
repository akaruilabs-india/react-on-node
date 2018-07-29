import { NAME_UPDATE } from '../constants/app'

export default function app(state = {}, action) {
  switch (action.type) {
    case NAME_UPDATE:
      return { name: action.result }
    default:
      return state
  }
}
