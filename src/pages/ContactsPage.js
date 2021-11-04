/* Modules */
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../redux/contacts';

import  ContactForm  from '../components/ContactForm';
import  ContactList  from '../components/ContactList';
import  Filter from '../components/Filter';
import styles from './pages-styles/ContactsPage.module.scss';
import Spinner from '../components/Spinner';
import PropTypes from 'prop-types';

const ContactsPage = ({ fetchContacts, isLoadingContacts }) => {

    useEffect(()=>{
        fetchContacts();
    }, []);

  return (
    <div className={styles.contactsContainer}>
        <header className={styles.AppHeader}>
          <h1 className={styles.Header}>Phonebook</h1>
          <ContactForm />
          <h2 className={styles.SubHeader}>Contacts</h2>
          <Filter />
          <ContactList />
          { isLoadingContacts && <div className={styles.spinnerContainer}><Spinner /></div>}
        </header>
      </div>
  )
}

ContactsPage.propTypes = {
  isLoadingContacts: PropTypes.bool.isRequired,
  fetchContacts: PropTypes.func.isRequired
}

const mapStapeToProps = state => ({
    isLoadingContacts: contactsSelectors.getLoading(state),
  });
  
  const mapDispatchToProps = dispatch => ({
    fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
  });
  
  export default connect(mapStapeToProps, mapDispatchToProps)(ContactsPage);