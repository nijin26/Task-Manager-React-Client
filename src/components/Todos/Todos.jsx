import React, { useEffect, useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import * as actions from '../../store/actions/index'
import axios,{setAuthToken} from '../../utils/axios'

// import FlipMove from "react-flip-move";

import ListView from "../ListView/ListView";
import Notifications from '../Notifications/Notifications'
import Spinner from '../UI/Spinner/Spinner.js'

function Todos() {

  const tasks = useSelector(state => state.task)
  const dispatch = useDispatch()

  const [order,setOrder] = useState('asc')
  const [load, setLoad] = useState(false)
  const [error, setError] = useState(null)


  useEffect(() => {
    const token = localStorage.getItem('token')
    setAuthToken(token)
    setLoad(true)
    axios.get(`/tasks?completed=false&sortBy=createdAt:${order}`).then(res => {
      dispatch(actions.onTodoFetch(res.data))
      setLoad(false)
    })
    .catch(e => {
      setError(e)
      setLoad(false)
    })   
  },[order])

 const deleteHandler = (id) => {
   setLoad(true)
   axios.delete(`/tasks/${id}`).then(res =>  {dispatch(actions.onDeleteTodo(id)) 
    setLoad(false) }
     ).catch(e => {setError(e)
    setLoad(false)})
 }

 const checkBoxHandler = (id) => {
    const token = localStorage.getItem('token')
    setAuthToken(token)
    setLoad(true)
    axios.patch(`/tasks/${id}`,{completed: true}).then(res =>{dispatch(actions.onUpdateTodo(res.data))
    setLoad(false)}).catch(err => {
      setError(err) 
      setLoad(false)})
 }

   const dropDownHandler = (e) => {
      setOrder(e.target.value)
  }

  return (
    <>
{error && <Notifications title='Tasks Todo - Error' message={error} type='danger' />}   
 <select name="order" id="" onChange={(e) => dropDownHandler(e)}>
    <option value="asc">Order By</option>
      <option value="asc">ASCENDING</option>
      <option value="desc">DESCENDING</option>
    
    </select>
      {tasks.todo.map((todo) => (
        <ListView
          key={todo._id}
          id={todo._id}
          title={todo.description}
          completed={todo.completed}
          createdAt={todo.createdAt}
          onDelete={(id) => {deleteHandler(id)}}
          onCheck = {id => {checkBoxHandler(id)}}
        />
      ))}
          {load && <Spinner />}

    </>
  );
}

export default Todos;
