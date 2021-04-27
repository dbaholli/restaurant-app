import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-2.jpg'
              text='At the time when everyone was thinking for a better place to share time with family and friends, in the presence of the aroma of meals and the taste of sweets, just at the right time, Blue Heaven Restaurant was opened for the first time. '
              label='About us'
              path='/About us'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Join TL Publishing Group and the Tampa community as we celebrate poetry and the arts with our open mic event'
              label='Events'
              path='/Events'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-4.jpg'
              text='Blue Heaven’s quick and easy Online  Reservations systems simplifies restaurant reservations and puts planning your night out at your fingertips. '
              label='Reservation'
              path='/Reservation'
            />
            <CardItem
               src='images/img-1o.jpg'
               text='Delivery & takeout from the best local restaurants. Breakfast, lunch, dinner and more, delivered safely to your door. Now offering pickup & no-contact delivery.'
               label='Online orders'
               path='/Online order'
            />
            <CardItem
              src='images/img-8.jpg'
              text='DURING RESTAURANT HOURS WE OFFER OUR ENTIRE MENU FOR DELIVERY.'
              label='Menu'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;