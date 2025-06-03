import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

const background = {
  backgroundColor: '	#d4edda', 
  fontSize: '16px',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px' ,
  marginTop:'20px'
}

const Footer = () => {
  return (
    <footer className="footer text-dark py-3" style={background}>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4 mb-2 mb-md-0">
            <i className="bi bi-telephone-fill me-2"></i>
            +91 8691922000
          </div>
          <div className="col-md-4 mb-2 mb-md-0">
            <i className="bi bi-envelope-fill me-2"></i>
            info@harmonds.com
          </div>
          <div className="col-md-4">
            <i className="bi bi-globe2 me-2"></i>
            www.harmonds.com
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
