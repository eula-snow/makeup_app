import './Header.css';
import { NavLink } from 'react-router-dom';

function Header (props) {
    return (
      <header>
        
        <h3 id='logo'>MakeApp</h3>
        <nav>
           <NavLink to="/">Home</NavLink>
           <NavLink to="/product">Product</NavLink>
           <NavLink to="/brand">Brand</NavLink>
           <NavLink to="/category">Category</NavLink>
           <button> Button </button>
        </nav>
      </header>
    );
  }

  export default Header;