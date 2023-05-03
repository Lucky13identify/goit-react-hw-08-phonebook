import PropTypes from 'prop-types';
import { Button } from './ContactList.styled';
import React, { Component } from 'react';

export class ContactList extends Component {
  render() {
    console.log(this.props.arr);
    return (
      this.props.arr &&
      this.props.arr.map(({ id, name, phone }) => (
        <li key={id}>
          {name}: {phone}
          <Button onClick={() => this.props.deleteF(id)}>Delete</Button>
        </li>
      ))
    );
  }
}

ContactList.propTypes = {
  submit: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string,
    })
  ),
  deleteF: PropTypes.func,
};
