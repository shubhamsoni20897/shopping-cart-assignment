import React, { Component } from 'react'
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { registerAction } from '../../redux/action/loginAction';
import './styles.css'
const Register = (props) => {
    const navigate = useNavigate();
    
    const firstNameInput = React.useRef(null) 
    const lastNameInput = React.useRef(null) 
    const emailInput = React.useRef(null) 
    const passwordInput = React.useRef(null) 
const onRegister = ()=>{
    const data ={
        firstName:firstNameInput.current.value,
        lastName:lastNameInput.current.value,
        email:emailInput.current.value,
        password:passwordInput.current.value
    }
    console.log(data);
    props.register(data)
    let onOk = alert('Register Successfully')
navigate('/login')
}

    return (
        <div className='main'>
            <Header />
            <div className='register-container'>
                <div className='register-title'>
                    <span className='register-txt'>Signup</span><br />
                    <span className='register-desc'>We do not share your personal details with anyone</span>

                </div>

                <div className='register-form'>
                    <span className='label'>First Name</span>
                    <input type='text' ref={firstNameInput} className='id-input' name='fName' />
                    <span className='label'>Last Name</span>
                    <input type='text'ref={lastNameInput} className='id-input' name='lName' />
                    <span className='label'>Email</span>
                    <input type='text'ref={emailInput} className='id-input' name='userId' />
                    <span className='label'>Password</span>
                    <input type='password'ref={passwordInput} className='id-input' name='password' />
                    <span className='label'>Confirm Password</span>
                    <input type='password' className='id-input' name='confPassword' />
                    <div className='register-btn' onClick={onRegister}>

                        Signup
                    </div>
                </div>

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
        register: (data) => { dispatch(registerAction(data)) },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)