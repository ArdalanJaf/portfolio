import { initialState } from "./initialState";
import { types } from "../types";

export function generalReducer(
    state = initialStateFromDisk || initialState,
    action
  ) {
    switch (action.type) {
      case types.EXAMPLE: {
        const result = { ...state, userInput: action.payload };
        //storeData("genernitiaalIlStateFromDisk", result);
        return result;
      }
  
      default:
        return state;
    }
  }