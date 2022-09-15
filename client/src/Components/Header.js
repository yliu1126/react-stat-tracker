import PropTypes from "prop-types";

const Header = ({ title, onShow, showStat }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Stat Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
