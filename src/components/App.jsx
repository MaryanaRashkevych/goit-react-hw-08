import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import { fetchContacts } from '../redux/contactsOps';
import { store } from '../redux/store';
 

export default function App() {
  const dispatch = useDispatch();
  const selectIsLoading = useSelector((state) => state.contacts.loading);
  const selectIsError = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      {selectIsLoading && <div className={css.warningText}>Loading... Please wait...</div>}
      {selectIsError && <div className={css.warningText}>Oops! There has been an error. Try to reload</div>}
      <SearchBox />
      <ContactList />
    </div>
  );
}
