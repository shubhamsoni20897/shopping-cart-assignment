export const loginAction = () =>{
    console.log('data')
    return (dispatch)=>{
        dispatch({
            type:'LOGIN_SUCCESS',
         
        })
    }
}
export const logoutAction = () =>{
    return (dispatch)=>{
        dispatch({
            type:'LOGOUT_SUCCESS',
         
        })
    }
}

export const registerAction = (data) =>{
    return (dispatch)=>{
        dispatch({
            type:'REGISTER_SUCCESS',
         data
        })
    }
}