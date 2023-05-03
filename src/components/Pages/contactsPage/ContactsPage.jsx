import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from '../contactList/ContactList';
import { ContactForm } from '../сontactForm/ContactForm';
import { changeFilter } from '../../redux/store';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../../redux/operations';

export function ContactsPage() {
  const dispatch = useDispatch();
  const contactsArr = useSelector(state => state.contacts.contacts.items);
  const filterValue = useSelector(state => state.filter);
  // console.log(contactsArr);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  const testName = data => {
    for (const item of contactsArr) {
      if (item.name === data.name) {
        console.log('YES');
        return;
      }
    }
    console.log(data);

    dispatch(addContact(data));
  };

  const filterArr =
    contactsArr !== undefined
      ? contactsArr.filter(contact => {
          // console.log(contact);
          return contact.name.toLowerCase().includes(filterValue);
        })
      : '';

  return (
    <>
      <div className="main-div">
        <h1>Phonebook</h1>
        <ContactForm filter={changeFilter} testName={testName} />
        <h2>Contacts</h2>
        <ul>
          <ContactList arr={filterArr} deleteF={onDelete} />
        </ul>
      </div>
    </>
  );
}
