import { chatWithType } from './constant'
import { IUser } from '../../types'

export const setChatWith = (data: IUser) => (dispatch: any) => {
  dispatch({
    type: chatWithType.SET_CHAT_WITH,
    payload: data
  });
}
