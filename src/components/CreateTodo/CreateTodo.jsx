import React, { useState} from "react";
import {useDispatch} from 'react-redux'

import axios from '../../utils/axios'
import * as actions from '../../store/actions/index'
import Notifications from '../Notifications/Notifications'

import "./CreateTodo.style.css";

function CreateTodo() {
  const dispatch = useDispatch()

  const [taskName, setTaskName] = useState("");
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const addTodo = (e) => {
    e.preventDefault()
    setLoading(true)
    const data = {description: taskName}
    axios.post('/tasks',data).then(res => {
      setTaskName('')
      dispatch(actions.onAddTodo(res.data)) 
      setLoading(false)
    }).catch(err => {
      setError(err)
      setLoading(false)
    } )
  }


  const taskNameHandler = (e) => {
    if (e.target.value.length > 30) {
      e.target.value = e.target.value.slice(0, 30);
    }
    setTaskName(e.target.value);
  };

  return (
    <>
      {error && <Notifications title={'Error'} message={error} type='danger'  />}
      <div className="main">
        <div className="field main">
          <form className="control">
            <label htmlFor="taskName">Task Title</label>
            <input
              type="text"
              name="taskName"
              value={taskName}
              className="input is-primary"
              onChange={(e) => taskNameHandler(e)}
            />
            <div className="btn">
              <p></p>
              <button type='submit' disabled={taskName.length < 1} className={`button is-primary add ${loading ? 'is-loading' : ''}`} onClick={(e) => addTodo(e)}>Add Todo</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateTodo;

// const date = new Date(res.data.createdAt)
// console.log(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`)