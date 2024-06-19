import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
         <div className={css.textContainer}>
      <p className={css.text}>{contact.name}</p>
      <p className={css.text}>{contact.number}</p>
      </div>
      <button className={css.btn} onClick={() => handleDeleteContact(contact.id)}>Delete</button>
    </div>
  );
}
