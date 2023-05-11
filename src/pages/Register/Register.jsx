import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { register } from '../../redux/authRegister/authOperations';
import { Form, Button, Input } from './Register.styled';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const submitRegisterForm = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    navigate('/login');
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={submitRegisterForm}>
      <label htmlFor="user-name">Name</label>
      <Input
        onChange={handleChange}
        type="name"
        name="name"
        id="user-name"
        required
      />
      <label htmlFor="user-email">Email</label>
      <Input
        onChange={handleChange}
        type="email"
        name="email"
        id="user-email"
        required
      />
      <label htmlFor="user-password">Password</label>
      <Input
        onChange={handleChange}
        type="password"
        name="password"
        id="user-password"
        required
      />
      <Button type="submit">Register</Button>
    </Form>
  );
}
