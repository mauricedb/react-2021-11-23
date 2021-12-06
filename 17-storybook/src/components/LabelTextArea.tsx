import {
  ChangeEventHandler,
  ReactNode,
  SetStateAction,
  TextareaHTMLAttributes,
} from 'react';

interface Props
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'> {
  data: any;
  children: ReactNode;
  name: string;
  setData: React.Dispatch<SetStateAction<any>>;
}

export function LabelTextArea({
  children,
  data,
  name,
  setData,
  ...props
}: Props) {
  const value = data[name] as any;
  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setData((data: any) => ({ ...data!, [name]: e.target.value }));
  };

  return (
    <>
      <label>{children}</label>
      <textarea value={value} onChange={onChange} {...props} />
    </>
  );
}
