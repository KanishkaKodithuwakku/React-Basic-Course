import React from "react";

const LinkButton = ({ btnText, btntype, href }) => {
  return (
    <>
      <a href={href} className={`btn btn-${btntype}`}>
        {btnText}
      </a>
    </>
  );
};
LinkButton.defaultProps = {
  href: "#",
  btntype: "primary",
  btnText: "Go somewhere",
};
export default LinkButton;
