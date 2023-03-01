import {loginfailure, loginStart, loginSuccess} from "./userSlice"
import { publicRequest} from '../requestMethods'

export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post("/login", user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginfailure())
    }
}