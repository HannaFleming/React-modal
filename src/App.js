import './App.css';
import { useState } from 'react';
import Modal from "./Component/Modal"

function App() {

  const[ openModal, setOpenModal ] = useState(false);

  return (
    <div className='App'>
      <h1>Hey, Click on the button to open the modal.</h1>
      <button className='openModalBtn' onClick={() =>{setOpenModal(true)} }>Open</button>
      { openModal && <Modal closeModal={setOpenModal}/>}
    </div>
  );
}

export default App;
