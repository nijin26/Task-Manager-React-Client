import React from 'react'
import {useSelector} from 'react-redux'

import classes from './Account.module.scss'

function Account() {

  const auth = useSelector(state => state.auth)

    return (
      <div className={classes.container}>
        <div className={classes.container__image}>
            <img src="" alt="profile"/>
        </div>

        <h2 className={classes.container__heading}>{auth.name}</h2>
        <p><strong></strong></p>
        <p><strong></strong></p>
        <p><strong></strong></p>
      </div>
    );
}

export default Account
