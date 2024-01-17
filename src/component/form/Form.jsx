import React from 'react'
import {FaMoneyCheck } from 'react-icons/fa'
import { FaMoneyCheckDollar } from "react-icons/fa6";
import style from './form.module.css'

const Form = () => {
  return (
    <form action="" method="POST" className={style.inputForm}>
      <div className={style.inputType}>
        <input
          type="text"
          name="reciever_wallet"
          placeholder="Reciever Wallet"
        />
        <FaMoneyCheck className={style.icon} />
      </div>
      <div className={style.inputType}>
        <input type="text" name="amount" placeholder="Amount" />
        <FaMoneyCheckDollar className={style.icon} />
      </div>
      <button type="submit">Send</button>
    </form>
  );
}

export default Form