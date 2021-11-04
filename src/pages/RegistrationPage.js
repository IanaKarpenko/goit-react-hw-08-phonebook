import { useState } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import styles from './pages-styles/RegistrationPage.module.scss';
import PropTypes from 'prop-types';

const RegistrationPage = ({ onRegister }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const newUser = { name: name, email: email, password: password };
        onRegister(newUser);
        setName('');
        setEmail('');
        setPassword('');
    }

    return(
        <div className={styles.registrationContainer}>
          <div className={styles.wrapper}>
        <h1 className={styles.title}>Registration Page</h1>

        <form
          onSubmit={handleSubmit}
          className={styles.form}
          autoComplete="off"
        >
          <label htmlFor="name" className={styles.label}>Name:</label>     
            <input
              className={styles.input}
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={(evt)=>{setName(evt.target.value)}}
            />
          

            <label htmlFor="email" className={styles.label}>Email:</label>  
            <input
              className={styles.input}
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(evt)=>{setEmail(evt.target.value)}}
            />
          

          <label htmlFor="password" className={styles.label}>Password:</label>
            <input
              className={styles.input}
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(evt)=>{setPassword(evt.target.value)}}
            />
          

          <button className={styles.button} type="submit">Register</button>
        </form>
        </div>
      </div>
    )
}

RegistrationPage.propTypes = {
  onRegister: PropTypes.func.isRequired
}

const mapDispatchToProps = {
    onRegister: authOperations.register,
  };
  
  export default connect(null, mapDispatchToProps)(RegistrationPage);