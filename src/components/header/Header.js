import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/" className='navLink'>Home</Link>
      {" | "}
      <Link to="/foo" className='navLink'>Foo</Link>
      {" | "}
      <Link to="/foo" className='navLink'>Foo</Link>
    </div>
  )
};

export default Header;
