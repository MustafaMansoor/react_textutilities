import PropTypes from 'prop-types'

function Navbar(props){
return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">{props.name}</a>
      </li>
    </ul>
  </div>
</nav>
);
};
Navbar.propTypes = {
    title: PropTypes.string.isRequired
  };
  
export default Navbar;
