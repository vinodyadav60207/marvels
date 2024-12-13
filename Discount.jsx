// import React from 'react';
// import discountProducts from './DiscountProducts';

// const DiscountProductsDisplay = () => (
//   <div className="container">
//     <div className="row">
//       {discountProducts.map((product) => (
//         <div className="col-md-4 mb-4" key={product.id}>
//           <div className="card">
//             <img src={product.imgUrl} className="card-img-top" alt={product.productName} />
//             <div className="card-body">
//               <h5 className="card-title">{product.productName}</h5>
//               <p>Price: ${product.price}</p>
//               <p>Discount: {product.discount}%</p>
//               <p>Rating: {product.avgRating} ⭐</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// export default DiscountProductsDisplay;


import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import discountProducts from './DiscountProducts';

const DiscountProductsDisplay = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => setSelectedProduct(null);

  return (
    <div className="container">
      <div className="row">
        {discountProducts.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div
              className="card"
              onClick={() => handleProductClick(product)}
              style={{ cursor: 'pointer' }}
            >
              <img src={product.imgUrl} className="card-img-top" alt={product.productName} />
              <div className="card-body">
                <h5 className="card-title">{product.productName}</h5>
                <p>Price: ${product.price}</p>
                <p>Discount: {product.discount}%</p>
                <p>Rating: {product.avgRating} ⭐</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <Modal show onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.productName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedProduct.imgUrl} alt={selectedProduct.productName} className="img-fluid" />
            <p>Price: ${selectedProduct.price}</p>
            <p>Discount: {selectedProduct.discount}%</p>
            <p>Rating: {selectedProduct.avgRating} ⭐</p>
            <p>{selectedProduct.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default DiscountProductsDisplay;

