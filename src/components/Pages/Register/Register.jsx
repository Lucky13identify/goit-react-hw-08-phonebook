import { useDispatch } from 'react-redux';
import { register } from '../../redux/authRegister/authOperations';
import { useState } from 'react';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

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
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={submitRegisterForm}>
      <input onChange={handleChange} type="name" name="name" required />
      <input onChange={handleChange} type="email" name="email" required />
      <input onChange={handleChange} type="password" name="password" required />
      <button type="submit">Register</button>
    </form>
  );
}
