import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Notfound from './component/Notfound';
import Header from './component/Layouts/Header';
import { auth } from './firebase';
import ShoppingContext from './Context/shopping/shoppingContext';
import { useContext, useEffect } from 'react';
import ProductDetails from './component/ProductDetails';
import LowerHeaderOne from './component/Layouts/lowerHeaderOne';
import Products from './component/Products';
import Login from './component/Login';
import LowerHeader from './component/Layouts/LowerHeader';
import CheckoutProduct from './component/CheckoutProduct';
import Checkout from './component/Checkout';
import Payment from './component/Payment';
import Orders from './component/Orders';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51Q0F5l03osImxnaMrbCgfWYpv9FCv6leUwpsCzEttBSpP1J0iCRnAn6c3m7sEJBwi4Xmi6bE3SKDijCwYW83BoPP00QcDV76tk');

// Payment Wrapper for Stripe integration
const PaymentWrapper = () => (
  <Elements stripe={stripePromise}>
    <Payment />
  </Elements>
);

const App = () => {
  const shoppingContext = useContext(ShoppingContext);

  const { setUser } = shoppingContext;
  

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
    console.log("User is -> ", authUser);
    if(authUser) {
    setUser(authUser)
    }else{
    setUser(null)
    }
    })
    }, [])

    return (
    <>
     <Router> 
    <div className="App">
      
          
        <Header />
        <LowerHeaderOne />  
        <LowerHeader />
      
    
          <Routes>
            {/* Redirect from root (/) to /home */}
            <Route path="/" element={<Navigate to="/home" />}/>
            
            {/* Define all the route paths */}
            <Route path="/home" element={<Home />}/>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/products/:id" element={<ProductDetails />}></Route>
            <Route path="/checkout-product" element={<CheckoutProduct />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/payment" element={<PaymentWrapper />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
            {/* Catch-all route for 404 Not Found */}
            <Route path="*" element={<Notfound />}></Route>
         
       </Routes>
     
    </div>
    </Router>
     </>
  );
};

export default App;



