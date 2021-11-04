import { useState } from "react";
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import styles from './pages-styles/LoginPage.module.scss';
import PropTypes from 'prop-types';


const LoginPage = ({ onLogin }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = evt => {
        evt.preventDefault();
        const userCreds = { email: email, password: password };
        onLogin(userCreds);
        setEmail('');
        setPassword('');
    };

    return(
      <div className={styles.loginContainer}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Login Page</h1>

        <form
          onSubmit={handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <label htmlFor="email" className={styles.label}>
            Email:</label>
            <input
              className={styles.input}
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(evt)=>{setEmail(evt.target.value)}}
            />
          

          <label htmlFor="password" className={styles.label}>
            Password:</label>
            <input
              className={styles.input}
              type="password"
              name="password"
              value={password}
              onChange={(evt)=>{setPassword(evt.target.value)}}
            />
          

          <button className={styles.button} type="submit">Login</button>
        </form>
        </div>
      </div>
    )
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired
}

const mapDispatchToProps = {
    onLogin: authOperations.logIn,
  };
  
  export default connect(null, mapDispatchToProps)(LoginPage);