import { userType } from './constant'
import { IUser } from '../../types'

 const userReducer = (state = {}, action: any) => {
  const { type, payload } = action
  if (type === userType.SET_USER_INFO) {
    return Object.assign({}, state, payload)
  } else {
    return state
  }
}
export default userReducer
