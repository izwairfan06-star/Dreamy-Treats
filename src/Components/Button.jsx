import React from 'react'
import styles from '../Styles/Button.module.css'
const Button = ({text,variant}) => {
    let styling=styles.btn;
    if(variant==="Order Fresh Today"){
        styling=`${styles.orderBtn}`
    }else if(variant==="Submit"){
         styling=`${styles.submitbtn}`
    }
  return (
    <>
    <button className={styling}>{text}</button>
    </>
  )
}

export default Button