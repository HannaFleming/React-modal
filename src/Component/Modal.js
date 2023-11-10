import React from 'react';
import "./Modal.css";

function Modal({ closeModal }) {
  return (
    <div className='backgroundModal'>
        <div className='containerModal'>
            <div className="titleCloseBtn">
                <button onClick={() => closeModal(false)}> X </button>
            </div>
            <div className='title'> 
                    <h1>Are You Sure You Want To Continue?</h1>
            </div>

            <div className='body'>
                <p>The Next Page Is Awesome! You Should Move Forward.</p>
            </div>

            <div className='footer'>
                <button  onClick={() => closeModal(false)} id="cancelBtn" >Close</button>
                <button>Continue</button>
            </div>

        </div>
    </div>
  )
}

export default Modal;