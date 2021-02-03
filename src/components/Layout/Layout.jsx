import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

import CreateTodo from "../CreateTodo/CreateTodo";
import Todos from "../Todos/Todos";
import Completed from "../Completed/Completed";

import "./Layout.style.css";

function Layout() {
  const [toggleTab, setToggleTab] = useState("todo");

  return (
    <>
      <div className="main">
        <CreateTodo />
        <div className="tabs is-centered is-boxed">
          <ul>
            <li className={`${toggleTab === "todo" ? "is-active" : ""}`}>
              <a onClick={() => setToggleTab("todo")}>
                <span className="icon is-small">
                  <i className="fas fa-list" aria-hidden="true"></i>
                </span>
                <span>Tasks Todo</span>
              </a>
            </li>
            <li className={`${toggleTab === "completed" ? "is-active" : ""}`}>
              <a onClick={() => setToggleTab("completed")}>
                <span className="icon is-small">
                  <i className="fas fa-check-circle" aria-hidden="true"></i>
                </span>
                <span>Completed Tasks</span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className="tab-content"
          style={toggleTab === "todo" ? { display: "block" } : null}
        >
          <Todos />
        </div>
        <div
          className="tab-content"
          style={toggleTab === "completed" ? { display: "block" } : null}
        >
          <Completed />
        </div>
      </div>
    </>
  );
}

export default Layout;
