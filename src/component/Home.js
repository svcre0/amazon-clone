import React from 'react'; 
import './Home.css';
import Product from './Product';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-container'>
        <img
          className='home-image'
          src='https://m.media-amazon.com/images/I/61Y9P87xXqL._SX3000_.jpg' // Adjust this path as necessary
          alt='banner'
        />
        <div className='products-row'> 
          <Product 
            id='47'
            image={'https://m.media-amazon.com/images/I/61JvFLHZ6NL._AC._SR360,460.jpg'}
            title={'iPhone 14 Pro Max'} // Updated title
            rating={4}
            price={"$29.99"} // Example price
          />

          <Product 
            id='48'
            image={'https://m.media-amazon.com/images/I/41lFLkSs-1L._AC._SR360,460.jpg'}
            title={'Apple Watch High Performance'} // Updated title
            rating={5}
            price={"$39.50"} // Example price
          />

          <Product 
            id='49'
            image={'https://m.media-amazon.com/images/I/61Bt4QCnxPL._AC._SR360,460.jpg'}
            title={'Premium Vlogging Kit'} // Updated title
            rating={5}
            price={"$24.99"} // Example price
          />

          <Product 
            id='3'
            image={'https://m.media-amazon.com/images/I/71CJz-ErvQL._AC_UL320_.jpg'} // Media Box
            title={'Mediabox Maverick 4K Android TV Box'}
            rating={5}
            price={"$99.99"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

