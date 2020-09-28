

import React from 'react';
import { NavLink } from "react-router-dom";
import NameContext from './NameContext';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      changeName: this.changeName
    }
  }


  render() {

    return (
      <header>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" className="is-selected">Home</NavLink>
            </li>
            <li>
              <NavLink to="/staff" className="is-selected">Staff</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="is-selected">About Us</NavLink>
            </li>
          </ul>
        </nav>
        <NameContext.Consumer >
          {(value) =>
            <div>
               Hello {value.name}
            </div>
          }
        </NameContext.Consumer>
      </header>
    );
  }
};



export default Navigation;
