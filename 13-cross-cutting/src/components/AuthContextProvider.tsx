import { ReactNode, useState } from 'react';
import { AuthContext } from './AuthContext';

interface Props {
  children: ReactNode;
}

export function AuthContextProvider({ children }: Props) {
  const [user, setUser] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
