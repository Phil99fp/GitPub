import React from 'react';
import { NavHashLink } from 'react-router-hash-link';

import './index.css';

const Header = () => {
    return (
      <>
        <nav>
          <NavHashLink smooth exact to="/" activeClassName="active">
            Home
          </NavHashLink>

        </nav>
        <span>
          <h1>WELCOME TO GITPUB</h1>
          
        </span>
      </>
    );
}

export default Header;
