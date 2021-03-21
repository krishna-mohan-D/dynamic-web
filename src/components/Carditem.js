import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  Services from './pages/Services'

function CardItem(props) {
  const  [details , setdetails] = useState(props);
     
  // console.log(details);
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={{
  pathname: '/Services',
  state: {
    details: details
  }
}}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
          {/* <Services details={details}/> */}
        </Link>
      </li>
    </>
  );
}

export default CardItem;
