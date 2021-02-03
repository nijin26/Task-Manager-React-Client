import React, { useState } from "react";

import style from "./Listview.module.scss";

function Todo({ id, title, completed,createdAt, onDelete, onCheck }) {

  const date = new Date(createdAt)
  const [check,setCheck] = useState(completed)

  const checkHandler = (id) => {
    setCheck(prev => !prev)
    onCheck(id)
  }

  return (
    <>
      <div
        className={style.list}
        style={
          completed ? { backgroundColor: "rgba(247, 125, 125, 0.555)" } : null
        }
      >
        <div className="title_date">
          <p>{title}</p>
          <p className="date">{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</p>
        </div>

        <div className={style.icons}>
          <p>
            <label>
              <input
                type="checkbox"
                checked={check}
                onChange={() => checkHandler(id)}
              />
            </label>
          </p>
          <span className="delete" onClick={() => onDelete(id)}>
            X
          </span>
        </div>
      </div>
    </>
  );
}

export default Todo;
