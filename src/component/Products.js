import React from 'react';  
import Product from './Product';
import './Products.css';

const Products = () => {
  return (
    <div className='product-container'> 

      <div className='products-row'> 
        <Product 
          id='1'
          image={'https://m.media-amazon.com/images/I/51AID6LcImL._AC_UL320_.jpg'} // 360-Degree Photo Booth Machine
          title={'80cm 360-Degree Photo Booth Machine with RGB Light Flight Case'}
          rating={5}
          price={"$299.99"}
        />
        <Product 
          id='2'
          image={'https://m.media-amazon.com/images/I/41lvCntiFJL._AC_UL320_.jpg'} // Photography Light
          title={'Live Photography Multi-Angle Brightness Adjustment Light'}
          rating={5}
          price={"$150.00"}
        />
        <Product 
          id='3'
          image={'https://m.media-amazon.com/images/I/71CJz-ErvQL._AC_UL320_.jpg'} // Media Box
          title={'Mediabox Maverick 4K Android Certified TV Box'}
          rating={5}
          price={"$99.99"}
        />
     
      </div>

      <div className='products-row'> 
        <Product 
          id='5'
          image={'https://m.media-amazon.com/images/I/41yX1MwmnEL._AC._SR360,460.jpg'} // MXQ Pro TV Box
          title={'MXQ Pro TV Box 4K 5G HD Android 11.1 Upgraded'}
          rating={5}
          price={"$139.99"}
        />
        <Product 
          id='6'
          image={'https://m.media-amazon.com/images/I/51AID6LcImL._AC_UL320_.jpg'} // 360-Degree Photo Booth Machine
          title={'80cm 360-Degree Photo Booth Machine with RGB Light Flight Case'}
          rating={5}
          price={"$299.99"}
        />
        <Product 
          id='7'
          image={'https://m.media-amazon.com/images/I/41lvCntiFJL._AC_UL320_.jpg'} // Photography Light
          title={'Live Photography Multi-Angle Brightness Adjustment Light'}
          rating={5}
          price={"$150.00"}
        />
        
      </div>

    
    </div>
  );
};

export default Products;






