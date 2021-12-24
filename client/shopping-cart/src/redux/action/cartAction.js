import { useSelector } from "react-redux"
import React ,{Component} from 'react'
import { store } from "../store"
export const addToCart = (data) =>{
    return (dispatch)=>{
        dispatch({
            type:'ADD_TO_CART_SUCCESS',
            data
        })
    }
    // const cartState = store.getState().cartReducer.cartData
    // const isExist =  cartState.find(item=>data.id===item.id)
  
}
export const updateCart = (action,data) =>{
    if(action==='inc') {
        return (dispatch)=>{
            dispatch({
                type:'INC',
                data
            })
        }

    } else {
        return (dispatch)=>{
            dispatch({
                type:'DEC',
                data
            })
        }
    }
}

export const removeProduct = (data) =>{
    return (dispatch)=>{
        dispatch({
            type:'REMOVE_PRODUCT',
            data
        })
    }
}

