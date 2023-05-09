import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Form, Button, Input, FilterName } from './ContactForm.styled';
import { changeFilter } from '../../redux/store';

export function ContactForm({ testName }) {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <Form
        onSubmit={e => {
          e.preventDefault();
          testName({ name: e.target[0].value, number: e.target[1].value });
        }}
      >
        <label htmlFor="name-contact">Name</label>
        <Input
          type="text"
          name="name"
          id="name-contact"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="name-phone">Phone</label>
        <Input
          type="tel"
          name="number"
          id="name-phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
        <FilterName htmlFor="name-filter">Find contact</FilterName>
        <Input
          type="text"
          name="filter"
          id="name-filter"
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </Form>
    </div>
  );
}

ContactForm.propTypes = {
  submit: PropTypes.func,
  addItem: PropTypes.func,
};
