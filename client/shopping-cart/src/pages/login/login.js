import React, { Component } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { loginAction, logoutAction } from '../../redux/action/loginAction';
import './styles.css'
const Login = (props) => {
    const navigate = useNavigate();
    const handleLogin = () => {
        props.login()
        navigate('/dashboard')
    }
 
    return (
        <div className='main'>
            <Header />
            <div className='login-container'>
                <div className='login-title'>
                    <span className='login-txt'>Login</span><br />
                    <span className='login-desc'>Get access to your Orders,wishlists and Recommendations</span>

                </div>

                <form className='login-form'>

                    <span className='id-label'>Email</span>
                    <input type='email' className='id-input' name='userId' required />
                    <span className='id-label'>Password</span>
                    <input type='text' className='id-input' name='userId' />
                    <div className='login-btn' onClick={handleLogin}>
                        Login
                    </div>
                </form>

            </div>
            <Footer />

        </div>
    )
}
const mapStateToProps = (state) => {
    return { state }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: () => { dispatch(loginAction()) },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)