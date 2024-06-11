import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Modal from './Modal';

function App() {
  const [ShowModal, setShowModal] = useState(false);
  const [isAccept, setisAccept] = useState(false);

  return (
    <div className="main">
      {ShowModal ? (
        <Modal setisAccept={setisAccept} setShowModal={setShowModal} />
      ) : isAccept ? (
        <h1>Offer Accepted Succesfully</h1>
      ) : (
        <>
          <div>
            <img src={reactLogo} className="logo react" alt="React logo" />
          </div>
          <h1>React Modal</h1>
          <div className="card">
            <button
              onClick={() => {
                setShowModal((val) => !val);
              }}
            >
              Get Offer
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
