import React from "react";
import PropTypes from "prop-types";

const Avatar = ({ avatar, width, shape, name }) => {
  return (
    <img
      src={avatar}
      alt={name}
      className={`card-img-top rounded-${shape}`}
      width={width}
    />
  );
};

Avatar.defaultProps = {
  avatar: "https://i.pravatar.cc/300",
  name: "Profile Name",
  width: 100,
  shape: "circle",
};

//if no default values set console will gives error for missing subtitle
Avatar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Avatar;
