import React from 'react';
import './item.css'

export default function item() {
  return (
    <div className="item">
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>

            <div className="items-price-old">
                ${props.old_price}
            </div>
        </div>
    </div>
  );
}
