import React from 'react';
import '../../App.css';
import '../Cards.css';
import CardItem from '../Carditem';

export default function Services(props) {
  console.log("zdfdf",props.location.state);
  // return <h1 className='service'>SERVICES</h1>;
  return (
    <>
    <li className='cards__item'>
      <div className='cards__item__link' to={props.location.state.details.path}>
        <figure className='cards__item__pic-wrap' data-category={props.location.state.details.label}>
          <img width ='30px' height='4px'
            className='cards__item__img'
            alt='Travel Image'
            src={props.location.state.details.src}
          />
        </figure>
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{props.location.state.details.text}</h5>
        </div>
      </div>
    </li>
  </>
  )
}
