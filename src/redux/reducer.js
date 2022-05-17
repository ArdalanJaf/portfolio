import { initialState } from "./initialState";
import { types } from "./types";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_FORM_DATA: {
      let formData = { ...state.formData };
      formData[action.payload.label] = action.payload.value;
      const results = { ...state, formData };
      return results;
    }
    case types.SET_JOI_ERRORS: {
      let joiErrors = { ...state.joiErrors };
      joiErrors = action.payload.joiErrors;
      const results = { ...state, joiErrors };
      return results;
    }
    case types.CLEAR_JOI_ERRORS: {
      let joiErrors = { ...state.joiErrors };
      joiErrors = {};
      const results = { ...state, joiErrors };
      return results;
    }
    case types.SET_SCROLL_POSITION: {
      let scrollPosition = { ...state.scrollPosition };
      if (scrollPosition.now !== action.payload.now) {
        scrollPosition.prev = scrollPosition.now;
      }
      scrollPosition.now = action.payload.now;
      const results = { ...state, scrollPosition };
      return results;
    }
    case types.SET_THEME: {
      let theme = { ...state.theme };
      theme = action.payload.theme;
      const results = { ...state, theme };
      return results;
    }
    default:
      return state;
  }
}
