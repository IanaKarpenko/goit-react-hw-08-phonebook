import styles from './ContactList.module.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {contactsOperations } from '../../redux/contacts';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul className={styles.listStyle}>
            {contacts.map(contact => {
                return (
                    <li key={contact.id} className={styles.item}>
                        <div className={styles.itemInternal}>
                        <span className={styles.name}>{contact.name}</span>
                            :<span className={styles.number}>{contact.number}</span>
                        </div>
                            <button type='button' name={contact.name} className={styles.deleteButton} onClick={()=>onDeleteContact(contact.id)}>Delete</button>
                        
                    </li>
                )
            })}
        </ul>      
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })),
    onDeleteContact: PropTypes.func.isRequired
}

const getFilteredContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase(); 
    return allContacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter));
  };

const mapStateToProps = state => {
    return(
    {
    contacts: getFilteredContacts(state.contacts.items, state.contacts.filter),
  })};
  
  const mapDispatchToProps = dispatch => ({
    onDeleteContact: (id) => dispatch(contactsOperations.deleteContact(id)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
