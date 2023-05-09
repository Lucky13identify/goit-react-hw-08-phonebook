import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from '../../redux/authRegister/authOperations';
import { Form, Button, Input } from './Login.styled';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    }
  };

  const submitRegisterForm = e => {
    e.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={submitRegisterForm}>
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

      <Button type="submit">LogIn</Button>
    </Form>
  );
}
