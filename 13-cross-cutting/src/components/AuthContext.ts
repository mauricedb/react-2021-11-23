import React from 'react';

interface AuthContextValue {
  user: string | null;
  setUser: (user: string | null) => void;
}

export const AuthContext = React.createContext<AuthContextValue>({
  user: null,
  setUser: () => {},
});
