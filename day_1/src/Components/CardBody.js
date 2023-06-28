import React from "react";


const CardBody = (props) => { 
    return (
        <div className={ props.style}>
            { props.children}
        </div>
    );
}


export default CardBody;
