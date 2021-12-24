import React, { Compoent } from 'react'
import logo from '../../assests/static/images/logo.png'
import './styles.css'
import { FaShoppingCart } from "react-icons/fa";

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        {/* <button type="button" onClick={handleClose}>
          Close
        </button> */}
      </section>
    </div>
    )
}
export default Modal