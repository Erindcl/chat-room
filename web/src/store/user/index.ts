import { userType } from './constant'
import { IUser } from '../../types'

const initialState: IUser = {
  id: 0,
  name: '',
  avatar: '',
}
 const userReducer = (state = initialState, action: any) => {
  const { type, payload } = action
  if (type === userType.SET_USER_INFO) {
    return Object.assign({}, state, payload)
  } else {
    return state
  }
}
export default userReducer
