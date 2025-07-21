function Loader() {
  return (
    <div className="loader-wrapper d-flex justify-content-center align-items-center">
      <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' , borderRightColor:'transparent',borderLeftColor:'yellow',borderTopColor:'yellow',borderBottomColor:'yellow'}}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loader;