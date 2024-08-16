import React from 'react'
import styles from "./Login.module.css"
import facebook from '../../assets/facebook.svg'
import Footer from '../../components/Footer/Footer'

const Login = () => {
  return (
    <>
    <div className={styles.login}>
      <div className={styles.main}>
        <div className={styles.left}>
            <img src={facebook} alt="" className={styles.icon} />
            <p>Facebook helps you connect and share</p>
            <p>with the people in your life.</p>
        </div>
        <div className={styles.right}>
            <div className={styles.box}>
                <input type="text" placeholder='Email address or phone number' />
                <input type="password" placeholder='Password' />
                <button className={styles.loginBtn}>Log in</button>
                <p>Forgetten password?</p>
                <hr />
                <button className={styles.createBtn}>Create new account</button>
            </div>
            <p className={styles.para}><span>Create Page </span> for a celebrity, brand or business</p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Login
