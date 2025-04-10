import React from 'react';
import classNames from 'classnames';
import classes from './login.module.css';
import useAuth from '../../hooks/auth.hook';

const LoginPage = () => {
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = e.currentTarget['username'].value;
    const password = e.currentTarget['password'].value;
    login(username, password);
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