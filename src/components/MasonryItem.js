import React from "react";
import {formatDate} from '../utils/utils'

const MasonryItem = ({ card }) => {
  return (
    <div className="masonry-item">
      <div className="card-img">
        <img src={card.image} alt="card img" />
      </div>
      <div className="card-date">{formatDate(card.date)}</div>
      <div className="card-title">{card.title}</div>
      <div className="card-author">
        Presented by <span>{card.author}</span>
      </div>
    </div>
  );
};

export default MasonryItem;
