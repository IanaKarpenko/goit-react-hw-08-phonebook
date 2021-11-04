import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contacts-actions';

//axios.defaults.baseURL = 'https://6183ccdc91d76c00172d1b8a.mockapi.io/api/v1';
const contactsBASEURL = 'https://6183ccdc91d76c00172d1b8a.mockapi.io/api/v1'

const fetchContacts = () => async dispatch => {
  console.log('hello from fetch');
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get(`${contactsBASEURL}/contacts`);
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }

  // axios
  //   .get('/contacts')
  //   .then(({ data }) => dispatch(fetchContactsSuccess(data)))
  //   .catch(error => dispatch(fetchContactsError(error)));
};

const addContact = (name, number) => async dispatch => {
  const contact = { name, number };
  dispatch(addContactRequest());

  try {
    const { data } = await axios.post(`${contactsBASEURL}/contacts`, contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error.message));
  }

  // axios
  //   .post('/contacts', contact)
  //   .then(({ data }) => dispatch(addContactSuccess(data)))
  //   .catch(error => dispatch(addContactError(error)));
};

const deleteContact = contactId => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await axios.delete(`${contactsBASEURL}/contacts/${contactId}`);
    dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactError(error.message));
  }

  // axios
  //   .delete(`/contacts/${contactId}`)
  //   .then(() => dispatch(deleteContactSuccess(contactId)))
  //   .catch(error => dispatch(deleteContactError(error)));
};

export default { fetchContacts, addContact, deleteContact };
