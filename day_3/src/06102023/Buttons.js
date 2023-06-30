import React from "react";

const Button = (props) => { 

    return (
        <button type={props.type} className={`btn btn-{$props.bg}`}>
            { props.children}
        </button>
    )
}

export default Button;
