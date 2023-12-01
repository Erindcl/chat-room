import { userType } from './constant'
import { IUser } from '../../types'

export const setUserInfo = (data?: IUser) => (dispatch: any) => {
  dispatch({
    type: userType.SET_USER_INFO,
    payload: data || {}
  });
}
