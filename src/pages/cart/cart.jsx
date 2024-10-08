// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart, clearCart } from "../../store/slices/cartSlice"; // Import actions
// import "./cart.css"
// import { Card, Button, Container } from 'react-bootstrap'; // Bootstrap components

// const Cart = () => {
//   const cart = useSelector((state) => state.cart); // Access the cart from the Redux store
//   const dispatch = useDispatch();

//   const handleRemove = (id) => {
//     dispatch(removeFromCart(id));
//   };

//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };

//   return (
//     <Container className="cart-container">
//       <h2>Cart</h2>
//       {cart.items.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <>
//           {cart.items.map((item) => (
//             <Card key={item.id} className="mb-3 cart-item-card">
//               <Card.Body className="d-flex align-items-center">
//                 <div className="cart-item-image">
//                   <img src={item.thumbnail} alt={item.title} style={{ width: '100px', height: 'auto' }} />
//                 </div>
//                 <div className="cart-item-details ms-3">
//                   <h5>{item.title}</h5>
//                   <p>EGP {item.price} x {item.quantity}</p>
//                 </div>
//                 <Button variant="danger" className="ms-auto" onClick={() => handleRemove(item.id)}>
//                   Remove
//                 </Button>
//               </Card.Body>
//             </Card>
//           ))}
//           <h3 className="total-price">Total: EGP {cart.totalPrice}</h3>
//           <Button variant="warning" className="clear-cart-btn" onClick={handleClearCart}>
//             Clear Cart
//           </Button>
//         </>
//       )}
//     </Container>

//   );
// };

// export default Cart;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../store/slices/cartSlice'; // Import actions
import { Card, Button, Container } from 'react-bootstrap'; // Bootstrap components
import './cart.css';
import { saveAs } from 'file-saver'; // Import file-saver library for saving files

const Cart = () => {
  const cart = useSelector((state) => state.cart); // Access the cart from the Redux store
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Function to generate receipt and trigger file download
  const handleCheckout = () => {
    if (cart.items.length === 0) {
      alert("Your cart is empty. Please add some items before checkout.");
      return;
    }

    // Generate the receipt text content
    let receiptContent = `Receipt\n\nItems:\n`;
    cart.items.forEach((item) => {
      receiptContent += `${item.title} - EGP ${item.price} x ${item.quantity} = EGP ${item.price * item.quantity}\n`;
    });
    receiptContent += `\nTotal: EGP ${cart.totalPrice}\nThank you for shopping with us!`;

    // Convert the content to a blob and trigger download
    const blob = new Blob([receiptContent], { type: 'text/plain;charset=utf-8' });
    try {
      saveAs(blob, 'receipt.txt'); // Save the file as 'receipt.txt'
      alert("Checkout successful! Your receipt has been downloaded.");
      handleClearCart(); // Clear the cart after successful checkout
    } catch (error) {
      alert("Error generating receipt. Please try again.");
    }
  };

  return (
    <Container className="cart-container">
      <h2>Cart</h2>
      {cart.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.items.map((item) => (
            <Card key={item.id} className="mb-3 cart-item-card">
              <Card.Body className="d-flex align-items-center">
                <div className="cart-item-image">
                  <img src={item.thumbnail} alt={item.title} style={{ width: '100px', height: 'auto' }} />
                </div>
                <div className="cart-item-details ms-3">
                  <h5>{item.title}</h5>
                  <p>EGP {item.price} x {item.quantity}</p>
                </div>
                <Button variant="danger" className="ms-auto" onClick={() => handleRemove(item.id)}>
                  Remove
                </Button>
              </Card.Body>
            </Card>
          ))}
          <h3 className="total-price">Total: EGP {cart.totalPrice}</h3>
          <Button variant="warning" className="clear-cart-btn" onClick={handleClearCart}>
            Clear Cart
          </Button>
          <Button variant="success" className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cart;
