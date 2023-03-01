import {loginfailure, loginStart, loginSuccess} from "./userSlice"
import { userRequest} from '../requestMethods'

export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await userRequest.post("/login", user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginfailure())
    }
}