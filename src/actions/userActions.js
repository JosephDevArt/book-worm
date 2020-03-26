import { SET_IS_AUTHORIZED } from "./actionTypes";

export const setIsAuthorized = isAuthorized => ({
  type: SET_IS_AUTHORIZED,
  isAuthorized
});
