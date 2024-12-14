import React from 'react'

function Cart({ cart, removeFromCart }) {
    const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0).toFixed(2);
    
    return (
        <div className="container">
            <h1>Your Shopping Cart</h1>
            {cart.length === 0 ? (
                <div className="alert alert-warning" role="alert">
                    Your cart is empty.
                </div>
            ) : (
                <div>
                    <ul className="list-group">
                        {cart.map((item) => (
                            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <h5>{item.name}</h5>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: {item.price}</p>
                                </div>
                                <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        Total Items: {cart.reduce((total, item) => total + item.quantity, 0)} <br />
                        Total Price: ${totalPrice}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;