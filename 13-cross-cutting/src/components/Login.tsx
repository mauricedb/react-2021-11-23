import { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';
import classes from './Login.module.css';

export function Login() {
  const { user, setUser } = useContext(AuthContext);

  return (
    <div className={classes.Login}>
      {user ? (
        <>
          <p>Hello {user}</p>
          <div>
            <button
              onClick={() => {
                return setUser(null);
              }}
            >
              Logout
            </button>
          </div>
        </>
      ) : (
        <button
          onClick={() => {
            return setUser('Jack Sparrow');
          }}
        >
          Login
        </button>
      )}
    </div>
  );
}
