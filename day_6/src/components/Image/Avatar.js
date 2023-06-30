import React from "react";


const Avatar = ({ image, alt, classname }) => {
  return (
    <>
      <img src={image} className={classname} alt={alt} />
    </>
  );
};

Avatar.defaultProps = {
  image: "/profile_default.jpg",
  alt: "Profile Image",
  classname : "card-img-top"
};

export default Avatar;
