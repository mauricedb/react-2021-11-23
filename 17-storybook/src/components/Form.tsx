import { FormHTMLAttributes, ReactNode } from 'react';
import classes from './Form.module.css';

interface Props extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export function Form({ children, className, ...props }: Props) {
  return (
    <form className={`${classes.Form} ${className}`} noValidate {...props}>
      {children}
    </form>
  );
}
