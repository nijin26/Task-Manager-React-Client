import React,{useEffect} from 'react'
import ReactNotification, {store} from 'react-notifications-component'

import './Notifications.style.css'
import 'react-notifications-component/dist/theme.css'
import 'animate.css/animate.compat.css'

const Notifications = ({title,message,type}) => {

    useEffect(() => {
        store.addNotification({
            title:title.toString(),
            message: message.toString(),
            type: type.toString(),
            insert: "top",
            container: "center",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
    },[message])
   
    return (
        <>
        <div className="app-container">
        <ReactNotification />
      </div>
        </>
    )
}

export default Notifications

