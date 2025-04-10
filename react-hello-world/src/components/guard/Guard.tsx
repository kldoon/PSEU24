import React from 'react';
import { readData } from '../../utils/storage';
import { Navigate } from 'react-router';
import lock from '../../assets/lock.svg';
import classes from './guard.module.css';

interface IProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

const Guard = (props: IProps) => {
  const user: Store.IUser = readData('sarah-express-user');

  if (!user) {
    return <Navigate to="/user/login" />;
  } else if (props.allowedRoles.includes(user.role) || props.allowedRoles[0] === '*') {
    return props.children;
  } else {
    return (
      <div className={classes.noAccess}>
        <img src={lock} alt="No access" />
        <p>You are not allowed to access this page</p>
      </div>
    );
  }

  return (
    <div>Guard</div>
  )
}

export default Guard