import { useState } from 'react';
import classes from './Login.module.css';

export function Login() {
  const [user, setUser] = useState<string | null>(null);

  return (
    <div className={classes.Login}>
      {user ? (
        <>
          <p>Hello {user}</p>
          <div>
            <button onClick={() => setUser(null)}>Logout</button>
          </div>
        </>
      ) : (
        <button onClick={() => setUser('Jack Sparrow')}>Login</button>
      )}
    </div>
  );
}
