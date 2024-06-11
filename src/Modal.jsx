const Modal = ({ setisAccept, setShowModal }) => {
  return (
    <div className="Modal">
      <div className="upper">
        <div>Modal overlay</div>
        <button
          onClick={() => setShowModal((val) => !val)}
        >
          X
        </button>
      </div>
      <div className="down">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          corrupti officia quia consequuntur blanditiis. Ex sunt dicta pariatur
          labore hic.
        </div>
        <div>
          <button
            onClick={() => {
              setisAccept((val) => !val);
              setShowModal((val) => !val);
            }}
          >
            Accept Offer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
