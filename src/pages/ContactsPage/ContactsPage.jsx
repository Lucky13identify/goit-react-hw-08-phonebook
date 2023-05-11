import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from '../../components/ContactList/ContactList';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { changeFilter } from '../../redux/store';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../../redux/operations';

export function ContactsPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  // const isRefreshed = useSelector(state => state.auth.isRefreshing);
  const contactsArr = useSelector(state => state.contacts.contacts.items);
  const filterValue = useSelector(state => state.contacts.filter);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

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

  const filterArr = contactsArr.filter(contact => {
    return contact.name.toLowerCase().includes(filterValue);
  });
  return (
    <>
      {
        <div className="main-div">
          <h1>Phonebook</h1>
          <ContactForm filter={changeFilter} testName={testName} />
          <h2>Contacts</h2>
          <ul>
            <ContactList arr={filterArr} deleteF={onDelete} />
          </ul>
        </div>
      }
    </>
  );
}
