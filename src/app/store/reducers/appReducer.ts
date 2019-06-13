import { ACTION_BRUCE } from "../actions/appActions";
interface nameReducer {
  name : string
}
const initialState: nameReducer = {
  name : "Soumitra Kar"
}
export function reducer(state = initialState, action) {
    switch (action.name) {
      case ACTION_BRUCE :
        return {
          ...state,
          name: ACTION_BRUCE
        }
      case "Soumitra" :
        return {
          ...state,
          name: "Soumitra Kar"
        }
    }
}
