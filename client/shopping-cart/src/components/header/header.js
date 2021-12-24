import React, { Compoent } from 'react'
import logo from '../../assests/static/images/logo.png'
import './styles.css'
import { FaShoppingCart } from "react-icons/fa";
import Modal from '../modal/modal';
import Cart from '../../pages/cart/cart';
import { connect, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAction } from '../../redux/action/loginAction';

const Header = (props) => {
    const [toggleModal, setToggleModal] = React.useState(false)
    const { isLoggedIn } = useSelector((state) => state.loginReducer)

    const hideModal = () => {
        setToggleModal(false)
    }
    const showModal = () => {
        setToggleModal(true)
    }
    const navigate = useNavigate();
    const onLogout = () => {
        props.logout()
        navigate('/login')
    }
    const cartData = useSelector((state) => state.cartReducer.cartData)
    return (
        <div className='header'>
            <div className='left-section'>
                <div className='logo' onClick={() => navigate('/dashboard')} >
                    <img src={logo} />
                </div>
                <div className='nav'>

                    <ul className='nav-list'>
                        <li onClick={() => navigate('/dashboard')}>Home</li>
                        <li onClick={() => navigate('/products', {
                            state: {
                                fetch: 'all',
                            }
                        })}>Products</li>

                    </ul>
                </div>
            </div>
            <div className='right-section'>
                {!isLoggedIn ? <div className='user-btn'>
                    <span onClick={() => { navigate("/login") }}>SignIn</span>
                    <span onClick={() => { navigate("/register") }}>Register</span>
                </div> : <span onClick={onLogout}>SignOut</span>}
                <div className='cart-btn' onClick={showModal}>
                    <FaShoppingCart color="#BF2956" />{cartData.length} Items
                </div>
            </div>
            <Modal show={toggleModal} >
                <Cart handleClose={hideModal} />
            </Modal>
        </div>
    )
}
const mapStateToProps = (state) => {
    return { state }
}
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => { dispatch(logoutAction()) },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)