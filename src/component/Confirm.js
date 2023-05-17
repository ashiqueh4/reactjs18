const Confirm = ({ text,open,id, handleConfirm }) => {

    return (
      <>
        <div className={open ? 'confirm show' : 'confirm'}>
          <div className="confirm-content">
            <h4>CONFIRM</h4>
            <div className="inner">
              <h2>{text}</h2>
              <p>This action is delete the site</p>
            </div>
          </div>
          <div className="confirm-btns">
            <button onClick={() => handleConfirm(true,id)}>YES</button>
            <button onClick={() => handleConfirm(false,id)}>NO</button>
          </div>
        </div>
        <div 
          className="overlay" 
          
        />
      </>
    )
  }

  export default Confirm