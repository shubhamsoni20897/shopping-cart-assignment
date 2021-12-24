const intitialState = {
    cartData: []
}

export const cartReducer = (state = intitialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART_SUCCESS':
            const isExist = state.cartData.find((item) => item.id === action.data.id)
            if (isExist) {
                state.cartData.find((item) => item.id === action.data.id).quantity += 1
                return { ...state, }

            } else {
                action.data.quantity = 1
                return { ...state, cartData: [...state.cartData, action.data] }

            }
        case 'INC':
            let addedData = state.cartData.find((item) => item.id === action.data.id)
            addedData.quantity += 1

            return { ...state, }
        case 'DEC':

            let tempData1 = state.cartData.find((item) => item.id === action.data.id)
            tempData1.quantity -= 1
            if (tempData1.quantity < 1) {
                tempData1.quantity = 1

            }
            return { ...state, }
        case 'REMOVE_PRODUCT':

            const index = state.cartData.findIndex((item) => item.id === action.data.id)
            state.cartData.splice(index,1)
            return { ...state, }
        default:
            return state
    }
}