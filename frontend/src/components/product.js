import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css';

const Product = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Products</h2>

      <div className="row justify-content-center mb-4 ">
        <div className="col-md-6 text-center mb-4">
          <img
            src="img/Zinc.jpg"
            alt="Mono Zinc"
            className="product-img"
          />
          <h5 className="mt-2">Mono Zinc 33%</h5>
        </div>
        <div className="col-md-6 text-center mb-4">
          <img
            src="img/DAP.jpg"
            alt="Zinc Boost"
            className="product-img"
          />
          <h5 className="mt-2">DAP</h5>
        </div>
      </div>

      <div className="row justify-content-center mb-4">
        <div className="col-md-6 text-center mb-4">
          <img
            src="img/CPA.jpg"
            alt="Mono Zinc"
            className="product-img"
          />
          <h5 className="mt-2">4 CPA</h5>
        </div>
        <div className="col-md-6 text-center mb-4">
          <img
            src="img/Nano002.jpg"
            alt="Zinc Boost"
            className="product-img"
          />
          <h5 className="mt-2">Nano Fertilizers</h5>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6 text-center mb-4">
          <img
            src="img/Nano003.jpg"
            alt="High Yield Zinc"
            className="product-img"
          />
          <h5 className="mt-2">Nano Fertilizers</h5>
        </div>
        <div className="col-md-6 text-center mb-4">
          <img
            src="img/Nano004.jpg"
            alt="Zinc + Sulphur"
            className="product-img"
          />
          <h5 className="mt-2">Nano Fertilizers</h5>
        </div>
      </div>

               <div className="row justify-content-center">
        <div className="col-md-6 text-center mb-4">
          <img
            src="img/Nano005.jpg"
            alt="High Yield Zinc"
            className="product-img"
          />
          <h5 className="mt-2">Nano Fertilizers</h5>
        </div>
        <div className="col-md-6 text-center mb-4">
          <img
            src="img/Nano00x.jpg"
            alt="Zinc + Sulphur"
            className="product-img"
          />
          <h5 className="mt-2">Nano Fertilizers</h5>
        </div>
      </div>
              
    </div>
  );
};

export default Product;
