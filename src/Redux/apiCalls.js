import { loginfailure, loginStart, loginSuccess } from "./userSlice";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/login", user);
    // console.log(typeof(res.data.success));
    if (res.data.success === 1) {
      dispatch(loginSuccess(res.data));
    }
    else {
        dispatch(loginfailure());
    }
  } catch (error) {
    dispatch(loginfailure());
  }
};
