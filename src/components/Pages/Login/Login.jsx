import { useDispatch } from 'react-redux';
import { login } from '../../redux/authRegister/authOperations';
import { useState } from 'react';

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
    <form onSubmit={submitRegisterForm}>
      <input onChange={handleChange} type="email" name="email" required />
      <input onChange={handleChange} type="password" name="password" required />
      <button type="submit">LogIn</button>
    </form>
  );
}
