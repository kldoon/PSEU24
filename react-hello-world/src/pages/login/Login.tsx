import React from 'react';
import classNames from 'classnames';
import classes from './login.module.css';
import { useNavigate } from 'react-router';
import { EPages } from '../../enums';
import { storeData } from '../../utils/storage';

const LoginPage = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget['username'].value;
    const password = e.currentTarget['password'].value;
    if (username.toLowerCase() === 'sarah' && password === '1234') {
      const user = {
        username,
        role: 'admin'
      };
      storeData(user, 'sarah-express-user');
      navigate(`/${EPages.CATEGORIES}`);
    } else if (username.toLowerCase() === 'eid' && password === '1234') {
      const user = {
        username,
        role: 'user'
      };

      storeData(user, 'sarah-express-user');
      navigate(`/${EPages.CATEGORIES}`);
    }
    else {
      alert('Wrong username or password!');
      localStorage.removeItem('username');
    }
  }

  return (
    <div>
      <h2 className={classes.title}>Login to Sarah Express</h2>
      <form
        className={classNames(classes.container)}
        onSubmit={handleSubmit}
      >

        <div className={classes.formGroup}>
          <label className={classes.label} htmlFor="username">User Name:</label>
          <input
            className={classes.input}
            id="username"
            name="username"
          />
        </div>

        <div className={classes.formGroup}>
          <label className={classes.label} htmlFor="password">Password:</label>
          <input
            className={classes.input}
            id="password"
            name="password"
            type="password"
          />
        </div>

        <div className={classes.buttonGroup}>
          <button type="submit" className={classes.button}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage;