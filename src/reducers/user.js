let initialState  = {
    email:String,
    password: String
}

const userDetails = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_USER':{
        return Object.assign({}, state, {
            email: action.email, password: action.password
          })
          
        }
      case 'LOGOUT_USER':{
        return Object.assign({}, state, {
          email: null, password: null
        })
      }

      default:
        return state
    }
  }
  
  export default userDetails
  