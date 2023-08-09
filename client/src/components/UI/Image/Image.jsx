import React, {} from "react";

const Image = ({srcSet, type, srcImage, srcImageClass, srcWidth}) => {
  return (
    <picture>
      <source srcSet={srcSet} type={type} />
      <img src={srcImage} className={srcImageClass} width={srcWidth} alt="image" />
    </picture>
  );
};

export default Image;
