const intitialState = {
    isLoggedIn: false,
    users: []
}

export const loginReducer = (state = intitialState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { ...state, isLoggedIn: true }
        case 'LOGOUT_SUCCESS':
            return { ...state, isLoggedIn: false }
        case 'REGISTER_SUCCESS':
            return { ...state, users:[...state.users,action.data] }
        default:
            return state
    }
}