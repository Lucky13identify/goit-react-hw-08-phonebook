import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ButtonUser } from './ContactList.styled';

export class ContactList extends Component {
  render() {
    console.log(this.props.arr);
    return this.props.arr
      ? this.props.arr.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <ButtonUser onClick={() => this.props.deleteF(id)}>
              Delete
            </ButtonUser>
          </li>
        ))
      : '';
  }
}

ContactList.propTypes = {
  submit: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteF: PropTypes.func,
};
