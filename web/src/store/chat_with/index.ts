import { chatWithType } from './constant'
import { IUser } from '../../types'

const initialState: IUser = {
  id: 0,
  name: '',
  avatar: '',
}
 const chatWithReducer = (state = initialState, action: any) => {
  const { type, payload } = action
  if (type === chatWithType.SET_CHAT_WITH) {
    return Object.assign({}, state, payload)
  } else {
    return state
  }
}
export default chatWithReducer
