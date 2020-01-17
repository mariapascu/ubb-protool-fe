import {any} from "prop-types";

let initialState  = {
    loggedUser:any
}

const userDetails = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_USER':{
        return Object.assign({}, state, {
            loggedUser: action.loggedUser
          })

        }
      case 'LOGOUT_USER':{
        return Object.assign({}, state, {
          loggedUser:null
        })
      }

      default:
        return state
    }
  }
  
  export default userDetails
  