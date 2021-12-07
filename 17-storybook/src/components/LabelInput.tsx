import {
  ChangeEventHandler,
  InputHTMLAttributes,
  ReactNode,
  SetStateAction,
} from 'react';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'name'> {
  data: any;
  children: ReactNode;
  name: string;
  setData: React.Dispatch<SetStateAction<any>>;
  errorMessage?: string;
}

export function LabelInput({
  children,
  data,
  name,
  setData,
  errorMessage,
  ...props
}: Props) {
  const value = data[name] as any;
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setData?.((data: any) => ({ ...data, [name]: e.target.value }));
  };

  return (
    <>
      <label>{children}</label>
      <input type="text" value={value} onChange={onChange} {...props} />
      {errorMessage ? (
        <div style={{ backgroundColor: 'red' }}> {errorMessage}</div>
      ) : null}
    </>
  );
}
