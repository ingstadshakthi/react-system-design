import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {
  const [show, setShow] = useState(false)

  function modalHandler() {
    setShow(prev => !prev);
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <button onClick={modalHandler} className='bg-slate-400 px-5 py-2 text-white rounded-lg hover:-translate-y-1 duration-200'>Show Modal</button>
      {show &&
        <Modal closeHandler={modalHandler}>
          <div>Your Modal</div>
        </Modal>
      }
    </div>
  )
}

export default App
