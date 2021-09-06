import React from "react";
import Masonry from "react-masonry-css";
import MasonryItem from "./MasonryItem";

const MasonryGrid = ({ cards } = []) => {
  const breakpointColumnsObj = {
    default: 3,
    1023: 2,
    768: 2,
    480: 1,
  };

  return (
    <div className="masonry-container">
      <Masonry
        className="masonry-grid"
        breakpointCols={breakpointColumnsObj}
        columnClassName="masonry-col"
      >
        {cards &&
          cards.map((card) => <MasonryItem card={card} key={card.title} />)}
      </Masonry>
    </div>
  );
};

export default MasonryGrid;
