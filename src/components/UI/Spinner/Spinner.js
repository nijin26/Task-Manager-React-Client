import React from 'react'

import style from './Spinner.module.scss'

function Spinner() {
    return (
      <div className={style.center}>
        <div className={style.lds__hourglass}></div>
      </div>
    );
}

export default Spinner
