import React from "react";
import PropTypes from 'prop-types';

const Header = (props) => { 
    return (
        //{title, subtitle} = props;
        <div>
            <h2>{ props.title}</h2>
            <h4>{ props.subtitle}</h4>
        </div>
    )
}

Header.defaultProps = {
    title : "missing title",
    subtitle : "missing sub title"
};

//if no default values set console will gives error for missing subtitle
Header.propTypes = {
  subtitle: PropTypes.string.isRequired,
};


export default Header;
