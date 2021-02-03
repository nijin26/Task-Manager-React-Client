import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from '../../store/actions/index'

function Nav() {

  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  let button =  (<Link to="/auth" className="button is-primary" >
  <strong> Login </strong>
</Link>)



if(auth.token){
  button = (<button className="button is-primary" onClick={() => dispatch(actions.onLogout())} >
  <strong> LogOut </strong>
</button>)
}

  return (
    <React.Fragment>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <h2>Task Manager App</h2>
          </Link>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>

           {auth?.token && <Link to="/acc" className="navbar-item">
              Account
            </Link>}
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              {button}
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Nav;
