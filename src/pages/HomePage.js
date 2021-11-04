import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';
import styles from './pages-styles/HomePage.module.scss';
import defaultImg from './pages-styles/anon.gif';
import PropTypes from 'prop-types';


const HomePage = ({ userName }) => (
    <div className={styles.container}>
      <div className={styles.titlesContainer}>
      <h1 className={styles.title}>
        You are in <span className={styles.resource}>PhoneBook</span> service, {userName? userName : 'anonym'}!
      </h1>
      { !userName && <h2 className={styles.subtitle}>(Login first to access contacts)</h2> }
      </div>
      <img className={styles.image} src={defaultImg} alt="Anonymous"/>
    </div>
  );

  HomePage.propTypes = {
    userName: PropTypes.string
  }

  const mapStateToProps = state => ({
    userName: authSelectors.getUsername(state)
  });
  
  export default connect(mapStateToProps, null)(HomePage);