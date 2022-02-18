import s from "./backdrop.module.scss";
import PropTypes from "prop-types";

export const BackDrop = ({ children, bg, childPosition = "" }) => {
  return (
    <div
      className={`${s.backdrop} ${s[childPosition]}`}
      style={{ background: bg }}
    >
      {children}
    </div>
  );
};

BackDrop.propTypes = {
  bg: PropTypes.string,
  childPosition: PropTypes.string,
};
