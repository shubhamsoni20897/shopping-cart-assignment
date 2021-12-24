import React, { Compoent } from 'react'
import { IoClose } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

import productImage from '../../assests/static/images/products/fruit-n-veg/apple.jpg'
import lowestPrice from '../../assests/static/images/lowest-price.png'
import './styles.css'
import { connect, useSelector } from 'react-redux';
import { removeProduct, updateCart } from '../../redux/action/cartAction';
import { useNavigate } from 'react-router-dom';

const Cart = (props) => {
    const navigate = useNavigate();

    const cartData = useSelector((state) => state.cartReducer.cartData)
    const incCartQuantity = (data) => {
        props.updateCart('inc', data)
    }
    const decCartQuantity = (data) => {
        props.updateCart('dec', data)

    }
    return (
        <div className='container'>
            <div className='cart-header'>
                <span className='header-text'>My Cart {'(1 Item)'}</span>
                <div className='close-btn' onClick={props.handleClose}>
                    <IoClose color='white' />
                </div>
            </div>
            <div className='cart-content'>
                {cartData.length == 0 ? (
                    <div className='empty-cart'>
                        <h3>No items in you cart</h3>
                        <span>Your favourite items are just a click away</span>
                    </div>) : cartData?.map((data) => {
                        return (<div className='cart-product-card'>
                            <div className='cart-product-image'>
                                <img src={process.env.PUBLIC_URL+`${data.imageURL}`}/>

                            </div>
                            <div className='prduct-detail'>
                                <div className='product-title'>
                                    <span>{data.name}</span>
                                    <div className='delete-icon' onClick={()=>props.delete(data)}><MdDeleteOutline  size={20}/></div>
                                </div>
                                <div className='price-container'>
                                    <div className='quantity'>
                                        <div className='dec-btn' onClick={()=>decCartQuantity(data)}>
                                            -
                                        </div>
                                        <span>{data.quantity}</span>
                                        <div className='inc-btn' onClick={()=>incCartQuantity(data)}>
                                            +
                                        </div>
                                        <span>X Rs.{data.price}</span>
                                    </div>
                                    <div className='price'>
                                        
                                      Rs. {data.price*data.quantity}
                                    </div>
                                </div>
                            </div>
                        </div>)
                    })}


            </div>
            {cartData.length > 0 ? <div className='offer-tile'>
                <img src={lowestPrice} height={30} />
                <span>You won't find it any cheaper anywhere</span>
            </div> : null}
            <div className='cart-card-footer'>
                <span>{cartData.length > 0 ? 'Promocode can be applied at payment page' : null}</span>
                {cartData.length > 0 ? <div className='checkout-btn'>
                    <span>Proceed to checkout</span>
                    <span>100</span>
                </div> : <div className='checkout-btn empty' onClick={()=>{props.handleClose()}}>
                    <span>Start Shopping</span>
                </div>}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return { state }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateCart: (action, data) => { dispatch(updateCart(action, data))
         },
         delete: ( data) => { dispatch(removeProduct(data))}
       

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)